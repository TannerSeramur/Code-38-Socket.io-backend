const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

const prevMsgs = [];
const incomingMsgs = []
const bookmarkMsg = [];

const storeMsg = (arr, val) => {
  let msg = {
    msg: val.msg,
    likes: 0,
    bookmark: false,
    userId: val.userId
  }
  arr.push(msg);
  // if (arr.length > 50) {
  //   arr.shift()
  // }

}


io.on('connection', socket => {
  socket.emit('getprevMsgs', prevMsgs);

  console.log('Connected', socket.id);

  socket.on('troll', (payload) => {
    console.log('broadcast', payload);
    storeMsg(prevMsgs, payload);

    socket.emit('getprevMsgs', prevMsgs);
    socket.broadcast.emit('incoming', payload);
  });

  socket.on('addLike', (payload) => {
    console.log(payload);
    prevMsgs[payload].likes = prevMsgs[payload].likes + 1;
    console.log(prevMsgs[payload].likes, 'likes here');
    socket.emit('getprevMsgs', prevMsgs);

    //needs id of button clicked

    //use payload to pull msg[payload].likes ++
  });
  socket.on('incoming', () => {
    socket.emit('getprevMsgs');
  })
  socket.on('removeLike', (payload) => {
    console.log(payload);
    prevMsgs[payload].likes = prevMsgs[payload].likes - 1;
    console.log(prevMsgs[payload].likes, 'likes here');
    socket.emit('getprevMsgs', prevMsgs);

    //needs id of button clicked

    //use payload to pull msg[payload].likes ++
  });

});





