const http = require('http');

const app = http.createServer((req, res) => {
  const restText = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', restText.length);
  res.statusCode = 200;
  res.write(Buffer.from(restText));
});

app.listen(1245);

module.exports = app;
