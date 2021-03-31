require('dotenv').config();
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

const port = process.env.PORT || 8000;

const connectedClients = new Set();

app.get('/', (req, res) => {
  res.send('Home');
});

io.on('connection', socket => {
  console.log(`user ${socket.id} connected`);
  connectedClients.add(socket.id);
  console.log(`${connectedClients.size} clients connected`)
  socket.emit('connection', null)

  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`);
    connectedClients.delete(socket.id);
    console.log(`${connectedClients.size} clients connected`)
  })
})

server.listen(port, () => {
  console.log(`Server running on ${port}...`)
})