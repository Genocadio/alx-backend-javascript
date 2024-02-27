const express = require('express');

const PORT = 1245;

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
