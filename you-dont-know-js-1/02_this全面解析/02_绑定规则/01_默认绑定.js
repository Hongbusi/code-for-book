// 1. 严格模式, 不能将全局对象用于默认对象
// function foo() {
//   'use strict'
//   console.log(this) // undefined
// }

// foo()

// 2. 在严格模式下调用 foo 则不影响默认绑定
function foo() {
  console.log(this)
}

(function() {
  'use strict'
  foo()
})()
