import express from 'express';
import WebSocket from 'ws';
import http from 'http';

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home');
});

const hadleListen = () => {
  console.log(`Server is running on port ${PORT}`);
}

const server = http.createServer(app); 
const wss = new WebSocket.Server({ server });

const handleConnection = (socket) => {
  console.log("conneted to Browser");

  sockets.push(socket);
  socket['nickname'] = 'Anon';
  
  socket.on('close', () => console.log('Disconnected from the Browser'));
  socket.on('message', (message) => {
    const parsedMessage = JSON.parse(message);

    switch (parsedMessage.type) {
      case 'new_message':
        sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${parsedMessage.payload}`));
        break;
      case 'nickname':
        socket['nickname'] = parsedMessage.payload;
        break;
    }
    
  });
};

const sockets = [];

wss.on('connection', handleConnection);

server.listen(PORT, hadleListen);
 
