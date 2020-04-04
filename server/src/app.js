const Chat = require('./models/Chat');
const path = require('path');
const { Server } = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();
const server = new Server(app);
const io = socketIO(server);
const router = require('./router');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
/*
* static files
* */
app.use(express.static(path.join(__dirname, '../uploads')));
/*
* http routing
* */
app.use('/api', router);
/*
* error handler
* */
app.use(( err, req, res, next) => {
  res.status(500).send(err);
});

/*
* WebSocket
* */
const chat = io.of('/chat');

chat.on('connection', function ( socket ) {
  socket.on('join to chats', ( user ) => {
    user.chats.forEach(chat => {
      socket.join(chat);
    });
  });
  socket.on('message', async ( chatId, message ) => {
    const chatModel = await Chat.findOne({_id: chatId});
    if (chatModel) {
      chatModel.messages.push(message);
      chatModel.save();
      io.of('/chat').to(chatId).emit('new-message', chatId, message);
    }


  });
  socket.on('newChat', function () {
    io.of('/chat').emit('updateChats');

  });
  socket.on('join to chat', ( chatId ) => socket.join(chatId))


});


/*
* start server
* */
server.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);

module.exports.socket = io;






