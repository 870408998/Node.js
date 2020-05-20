var http = require("http")

var server = http.createServer();

//request请求事件处理函数，需要接收两个函数
// Request  请求对象
//    请求对象可以用来获取客户端的一些请求消息，例如请求路径
// Response
//    响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
  console.log('收到客户端的请求了,请求路径是:' + request.url)
  //response 对象有一个方法，write可以用来给客户端发送响应数据
  //write 可以使用多次，但是最有一定要用end来结束响应，否则客户端就会一直在等待
  response.write('hello')

  //告诉客户端，我的话说完了，你可以呈递给用户了
  response.end()

  //我们希望当请求不同的路径时返回不同的结果
  //例如：
  //  /index
  //  /login 登录
  //  /register 注册cls1
})


server.listen(3000,function(){
  console.log("服务器启动成功了")
})