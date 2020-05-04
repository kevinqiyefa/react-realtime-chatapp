const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router');

app.use(cors());
app.use(router);

server.listen(process.env.PORT || 3001, () =>
  console.log(`Server has started.`)
);
