
function WebSocketTest(){
  if ("WebSocket" in window){
      console.log("您的浏览器支持 WebSocket!");
      // 打开一个 web socket
      var ws = new WebSocket("ws://localhost:6152");
      ws.onopen = function(){
        // Web Socket 已连接上，使用 send() 方法发送数据
       ws.send("client send data");
       console.log("client send data...")
      };
      ws.onmessage = function (evt){ 
        var received_msg = evt.data;
        console.log('client received data',received_msg)
      };  
      ws.onclose = function(){ 
        console.log('client closed')
      };
  }else{
      alert("browser not supported WebSocket!");
  }
} 
WebSocketTest()