let sum = function(arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr
  })
}

// let curry = function(fn, ...args) {
//   if (args.length >= fn.length) {
//     fn(...args)
//   } else {
//     (..._args) => curry(fn, ...args, ..._args)
//   }
// }

let add = function(...args) {
  let r = sum(Array.from(args))
  let fn = function(..._args) {
    let t = sum(Array.from(_args))
    return add(r + t)
  }
  fn.toString = function () {
    return r
  }
  return fn
}
console.log(add(1)(2)(3)())