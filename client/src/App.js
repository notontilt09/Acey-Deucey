import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:8000';

function App() {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    
    socket.on('connection', () => {
      console.log(`Connected with back-end`);
    })
  }, [])

  return (
    <h1>test</h1>
  )
}

export default App;
