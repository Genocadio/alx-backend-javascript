const express = require('express');

const PORT = 1245;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

module.exports = app;
