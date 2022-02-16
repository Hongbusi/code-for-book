import utils from './utils.js'

utils.registerErrorHandler((e) => {
  console.log(e)
})

utils.foo(() => {

})

utils.bar(() => {
  throw 'error'
})
