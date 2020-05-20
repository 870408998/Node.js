var http = require('http')

//  1.创建Server
var server = http.createServer()

//  2.监听request请求事件，设置请求处理函数
server.on('request', function(req, res){
  console.log("收到请求了，请求路径是" + req.url)
  console.log('请求我的客户端的端口号是:', req.socket.remoteAddress, req.socket.remotePort)
  // res.write("Hello")
  // res.end()

  //上面的方式比较麻烦，推荐end的同时发送end
  // res.end("Hello World")

  //根据不同的请求路径，发送不同的响应结果
  //  1.获取请求路径
  //    req.url 获取到的是端口号之后的那一部分路径
  //    也就是说所有的url都是以/开头的
  //  2.判断路径处理响应
  var url = req.url
  if(url === '/'){
    res.end("index pages")
  }else if(url === '/login'){
    res.end("login pages")
  }else if(url === '/products'){
    var products = [
      {name:'iphone X', price:8888},
      {name:'Xiaomi10', price:4888},
      {name:'Huaweip40', price:5888}
    ]
    res.end(JSON.stringify(products))
  }
})

//  3.绑定端口号，启动服务
server.listen(8080,function(){
  console.log("服务器启动成功了")
})