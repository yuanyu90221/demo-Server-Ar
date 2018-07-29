const express = require('express');
const app = express();

const demoServerPort = '8887';
app.use('/', express.static(__dirname));
app.get('/', (req, res)=> {
  res.sendFile(`index.html`, {root: __dirname});
});
app.get('/test', (req, res)=> {
  res.sendFile(`test.html`, {root: __dirname});
});
app.listen(`${demoServerPort}`, () => {
  console.log(`demo server is on ${demoServerPort}`);
});