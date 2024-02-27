const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fields = lines[0].split(',');
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    fields.forEach((field, index) => {
      const fieldStudents = students.filter((student) => student.split(',')[index].trim() !== '');
      console.log(`Number of students in ${field}: ${fieldStudents.length}. List: ${fieldStudents.map((student) => student.split(',')[index].trim()).join(', ')}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

countStudents('database.csv');

module.exports = countStudents;
