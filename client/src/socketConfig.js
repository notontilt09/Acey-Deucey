import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:8000';
const socket = socketIOClient(ENDPOINT);

socket.on('connection', () => {
  console.log('Connected with back-end');
})

export default socket;