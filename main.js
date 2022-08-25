const http = require('http');
const config = require('dotenv').config();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const server = http.createServer((req , res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'application/json');
res.end('TEST');
});


server.listen(port , hostname , () => {
console.log(`Server sucessfully started`);
console.log(`Running on hostname ${hostname} and port ${port}`);
});
server.getMaxListeners(2);