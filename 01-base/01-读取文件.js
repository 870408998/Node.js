// 1.使用require方法加载fs核心模块
var fs = require('fs')

//2.读取文件
// 第一个参数就是要读取的文件路径，第二个参数是一个回调函数
fs.readFile('./ac.txt',function(err,data){
  if(err){
    console.log("失败")
    return
  }
  console.log(data)
})