# Code-38-Socket.io-backend

### Author: Tanner Seramur Jon DiQuattro

### Links and Resources

[sandbox](https://codesandbox.io/s/l55ml6w809)
[backend](https://ts-jd-socket-38-server.herokuapp.com/)
double click message to add a like
![CF](http://i.imgur.com/7v5ASc8.png) LAB
[gitHub](https://github.com/TannerSeramur/Code-38-Socket.io-backend)
=================================================


### Description
This is the backend server for a chat application and it does the following:
* When a user connects to the chat  room and sends a message the message is broadcast to all users that are connected.
  * When a user double clicks on a previous message text bubble a like/dislike button appears
  * When a like/dislik button gets clicked the likes are stored in the server
* On page load each user gets a unique user id and when that id matches a user on the server they can see the previous messages.
    * Their texts are saved in blue all others are in grey
    * The last 50 messages are saved



### Setup
#### `.env` requirements
* `PORT` - Port Number supplied in the code sandbox should be the commented out line 5 troll.js on the sanbox. If you are trying to run it from the deployed backend don't change sandbox and ues the backend link.


#### Running the app
* Open deployed backend link https://ts-jd-socket-38-server.herokuapp.com/
* Open code sanbox link https://codesandbox.io/s/l55ml6w809
* Type into the text field and hit enter to see your message!
* When another user is connected you will see their messages as well.




