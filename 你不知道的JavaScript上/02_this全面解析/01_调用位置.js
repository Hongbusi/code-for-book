function baz() {
  console.log('baz')
  bar()
}

function bar() {
  console.log('bar')
  foo()
}

function foo() {
  console.log('foo')
}

baz()
