
var ws = require("nodejs-websocket");
const port = 6152

var connections=[]
var server = ws.createServer(function (current) {
  connections.push(current);
  current.on("text", function (str) {
    console.log("server receive connection", str)
    connections.forEach(item=>{
          item.sendText(str)
    });
  });
  current.on("close", function (code, reason) {
      console.log("server connection closed")
  });
  current.on("error", function (code, reason) {
      console.log("server connection error")
  });
})

server.listen(port)
console.log("server WebSocket connected")
