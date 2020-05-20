var fs = require('fs')  

//第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
fs.writeFile('./拜年','大家好，给大家拜个早年吧',function(err){
  console.log("文件写入成功")
})