var http = require('http')

var server = http.createServer()

server.on('request',function(req,res){
// 服务器端发送的数据，其实是utf8编码
// 但是浏览器不知道是utf8编码
// 浏览器在不知道的情况下会使用系统默认编码格式也就是gbk去解析执行
// 解决方法就是告诉浏览器我发送的是什么格式的编码
// 在http协议中Conent-Type就是来告知对方我给你发送的数据内容是什么类型
  // res.setHeader('Content-Type','text/plain;charset=utf-8')
  // res.end('hello 世界')

  var url = req.url
  if(url === '/plain'){
    // text/plain就是普通文本
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('Hello 世界')
  }else if(url === '/html'){
    // 如果你发送的是htm格式的字符串，则你也要告诉我给你发送的是text-html格式的内容
    res.setHeader("Content-Type",'text/html;charset=utf-8')
    res.end('<p>hello html <a href="">点我</a></p>')
  }
})

server.listen(3000,function(){
  console.log('Server is runnig...')
})