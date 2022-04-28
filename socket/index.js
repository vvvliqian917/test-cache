const ws = require("nodejs-websocket");
const fs= require('fs')
const port = 6152
module.exports=function(){
  return function(){
    var connections=[]
    var server = ws.createServer(function (current) {
      connections.push(current);//将新的链接对象存放在数组中
      current.on("text", function (str) {
        console.log("server receive connection", str)
        connections.forEach(item=>{
              item.sendText(str) //所有客户端都发送消息
        });
      });
     
    //   fs.watchFile(__dirname,'./index.html',function(cur,pre){
    //     connections.forEach(item=>{
    //       item.sendText('file change') //所有客户端都发送消息
    //  });
      }) 
      current.on("close", function (code, reason) {
          console.log("server connection closed")
      });
      current.on("error", function (code, reason) {
          console.log("server connection error")
      });
  })
  server.listen(port)
  console.log("server WebSocket connected")}
}
