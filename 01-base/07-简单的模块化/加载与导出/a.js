//require方法有两个作用
//  1.加载文件模块并执行里面的代码
//  2.拿到被加载文件模块导出的接口对象
//    在每个文件中都提供了一个接口对象:exports
//    exports 默认是一个空对象
//    要做的就是把所有需要被外部访问的成员挂载到exports对象中
var ret = require('./b.js')

var fs = require('fs')
fs.readFile('./b.js',function(err,data){
  if(err){
    console.log("读取文件失败")
  }else{
    console.log(data.toString())
  }
})

console.log(ret.add(10,30))