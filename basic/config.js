

function freeze(obj) {
  let propNames = Object.getOwnPropertyNames(obj)
  propNames.forEach(name => {
    let property = obj[name]
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      freeze(property)
    }
  })
  return Object.freeze(obj)
}

module.exports = {
  freeze
}