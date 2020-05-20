//require是一个方法，它的作用就是用来加载模块的
//在node中，模块有三种
//  具名的核心模块，如fs，http
//  用户自己编写的文件模块，
//  相对路径必须加./
//  在node中，没有全局作用域。只有模块作用域
//    外部访问不到内部，内部也访问不到外部,默认都是封闭的
//   既然都是模块作用域，那如何让模块之间相互通信
//  有时候，我们加载文件模块不是为了简单的执行里面的代码，
//  更重要的是为了使用里面的某个成员

var foo = 'aaa'

function add(x,y){
  return x + y
}

console.log("a start")
require('./b.js')
console.log("b start")

console.log('foo的值是' + foo)