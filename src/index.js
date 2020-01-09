import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// var WebSocketServer = require("ws").Server
// var http = require("http")
// var express = require("express")
// var app = express()
// var port = process.env.PORT || 5000

// app.use(express.static(__dirname + "/"))

// var server = http.createServer(app)
// server.listen(port)

// console.log("http server listening on %d", port)

// var wss = new WebSocketServer({server: server})
// console.log("websocket server created")

// wss.on("connection", function(ws) {
//   var id = setInterval(function() {
//     ws.send(JSON.stringify(new Date()), function() {  })
//   }, 1000)

//   console.log("websocket connection open")

//   ws.on("close", function() {
//     console.log("websocket connection close")
//     clearInterval(id)
//   })
// })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
