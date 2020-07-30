// function add (a, b, c, d) {
// 	return [
// 	  ...arguments
// 	].reduce((a, b) => a + b)
// }



// let sum = function(...arr) {
//   return arr.reduce((prev, curr) => {
//     return prev + curr
//   })
// }

// let curry = function(fn, ...args) {
//   if (args.length >= fn.length) {
//     fn(...args)
//   } else {
//     (..._args) => curry(fn, ...args, ..._args)
//   }
// }

// let add = function(...args) {
//   let r = sum(args)
//   let fn = function(..._args) {
//     let t = sum(_args)
//     return add(r + t)
//   }
//   fn.toString = function () {
//     return r
//   }
//   return fn
// }


// no bracket
function add(a) {
  function sum(b) { 
    return add(a + b)
  }
  // returns a string representing the source code of the function.
  sum.toString = function() {
    return a
  }
  return sum
}

module.exports = {
  add
}