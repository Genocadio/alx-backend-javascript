/* eslint-disable no-use-before-define */
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DATABASE_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  fs.readFile(dataPath, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }

    const Reports = [];
    const fileLines = data.toString('utf-8').trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    for (const line of fileLines.slice(1)) {
      const studRec = line.split(',');
      const studProp = studRec.slice(0, -1);
      const field = studRec[studRec.length - 1];

      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }

      const studentEntries = studentPropNames.map((propName, idx) => [
        propName,
        studProp[idx],
      ]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce(
      (pre, cur) => (pre || []).length + cur.length,
    );
    Reports.push(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      Reports.push(
        `Number of students in ${field}: ${group.length}. List: ${group
          .map((student) => student.firstname)
          .join(', ')}`,
      );
    }
    resolve(Reports.join('\n'));
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DATABASE_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      setResponse(res, responseText);
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

function setResponse(res, responseText) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
  res.end();
}

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
