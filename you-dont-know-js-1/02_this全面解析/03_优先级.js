Function.prototype._bind = function(oThis) {
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
  }

  var aArgs = Array.prototype.slice.call(arguments, 1)
  var fToBind = this
  var fNOP = function() {}
  var fBound = function() {
    return fToBind.apply(
      (this instanceof fNOP && oThis ? this : oThis),
      aArgs.concat(Array.prototype.slice.call(arguments))
    )
  }

  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()

  return fBound
}

function foo(something) {
  this.name = something
  console.log(this.name)
}

var obj = {
  name: 'obj'
}

var bar = foo._bind(obj)
bar(2)
