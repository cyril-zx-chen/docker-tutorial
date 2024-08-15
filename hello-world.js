const { createServer } = require('node:http');

// redis
const redis = require('redis');
let rds = redis.createClient({ url: 'redis://redis:6379' });
rds.on('connect', () => {
  console.log('Connected to Redis');
});
rds.connect();

// server
const hostname = '0.0.0.0';
const port = 8080;

const server = createServer(async (req, res) => {
  if (req.url === '/redis') {
    let cnt = await rds.incr('counter');
    console.log(`Counter: ${cnt}`);
    res.statusCode = 200;
    res.end(`Counter: ${cnt}`);
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World123');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
