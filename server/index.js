const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router');

app.use(cors());
app.use(router);

io.on('connection', (socket) => {
  console.log('connect');
  socket.on('join', ({ name, room }, callback) => {
    console.log('message: ' + name, room);
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return callback(error);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(process.env.PORT || 3001, () =>
  console.log(`Server has started.`)
);
