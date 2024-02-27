const express = require('express');
const { countStudents } = require('./3-read_file_async');

const PORT = 1245;
const DATABASE_PATH = 'database.csv';

const app = express();

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DATABASE_PATH)
    .then(() => {
      res.type('text').send('This is the list of our students');
    })
    .catch((error) => {
      res.status(500).send(`${error.message}\n`);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
