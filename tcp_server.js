const net = require('net');

var port = process.env.PORT || 8000;
const server = net.createServer((c) => {
    // 'connection' listener
    console.log('client connected');
c.on('end', () => {
    console.log('client disconnected');
});
c.write('hello\r\n');
c.pipe(c);
});
server.on('error', (err) => {
    throw err;
});
server.listen(port, () => {
    console.log('server bound on port ',port);
});
