const http = require('http');
const express = require('express');

const app1 = express();
const app2 = express();

const hostname = '127.0.0.1';
const port1 = 3000;
const port2 = 3001;
const port3 = 3002;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port1, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port1}/`);
// });

app1.get('/', (req, res) => {
  res.send('Hello Express World!');
});

app1.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});

app2.get('/', (req, res) => {
  res.send('Hello Express World! (from 2nd server)');
});

app2.listen(port3, () => {
  console.log(`Example app listening at http://localhost:${port3}`);
});

process.on('uncaughtException', (error) => {
  console.log("Server crashed");
  console.log("error =", error);
});
