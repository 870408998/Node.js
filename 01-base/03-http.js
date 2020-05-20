// 接下来，使用node来开发一个web服务器
// 在node中提供了一个核心模块 http
// http这个模块的职责就是用来创建编写服务器的

//  1.加载http核心模块
var http = require("http")

//  2.使用http.createServer()方法创建一个web服务器
//返回一个server实例
var server = http.createServer();

//  3.当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调处理函数
server.on('request',function(){
  console.log('收到客户端的请求了')
})

//  4.绑定端口号，启动服务器
server.listen(3000,function(){
  console.log("服务器启动成功了")
})