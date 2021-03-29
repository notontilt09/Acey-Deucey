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

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.emit('connection', null)
})

server.listen(port, () => {
  console.log(`Server running on ${port}...`)
})