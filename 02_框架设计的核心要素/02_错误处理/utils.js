let handleError = null
export default {
  foo(fn) {
    callWithErrorHandling(fn)
  },

  bar(fn) {
    callWithErrorHandling(fn)
  },

  registerErrorHandler(fn) {
    handleError = fn
  }
}

function callWithErrorHandling(fn) {
  try {
    fn && fn()
  } catch (e) {
    handleError && handleError(e)
  }
}
