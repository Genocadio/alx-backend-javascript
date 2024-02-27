const fs = require('fs');

const countStudents = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.trim().split('\n');
    const studentGroups = {};

    const dbFieldNames = lines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, -1);

    for (const line of lines.slice(1)) {
      const [studentRecord, field] = line.trim().split(/,(?=\s*\w+$)/);
      if (!studentGroups[field]) {
        studentGroups[field] = [];
      }
      const studentEntries = studentPropNames.map((propName, idx) => [propName, studentRecord.split(',')[idx]]);
      studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce((acc, cur) => acc + cur.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }

    resolve(totalStudents);
  });
});

countStudents('database.csv')
  .catch((error) => console.error(error.message));

module.exports = countStudents;
