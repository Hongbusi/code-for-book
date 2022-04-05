function reactive(params) {
  return new Proxy(params, {
    get(target, key) {
      console.log(`get ${key}`)
      return target[key]
    },
    set(target, key, value) {
      console.log(`set ${key}`)
      target[key] = value
      return true
    }
  })
}

const obj = {}
const proto = { bar: 1 }
const child = reactive(obj)
const parent = reactive(proto)

Object.setPrototypeOf(child, parent)

console.log(child.bar)
child.bar = 2
