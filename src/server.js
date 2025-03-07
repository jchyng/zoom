import express from 'express';
import SocketIO from 'socket.io';
import http from 'http';

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home');
});

// HTTP Server
const server = http.createServer(app); 
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// SocketIO
const wsServer = SocketIO(server);
wsServer.on('connection', (socket) => {
  socket.onAny((event) => {
    console.log(`Socket Event: ${event}`);
  });
  socket.on('enter_room', (data, callback) => {
    console.log(socket.id);
    console.log(socket.rooms);
    socket.join(data);
    callback(data.payload);
  });
});

 
