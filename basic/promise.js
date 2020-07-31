// Promise.each = async function(arr) {
//   for(const item of arr) {
//     const res = await item.then()
//     console.log(res);
//   }
// }


let p1 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 1000, 'one'); 
});
let p2 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 2000, 'two'); 
});
let p3 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 1500, 'three'); 
});
let p4 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 1000, 'four'); 
});
let p5 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 2000, 'five'); 
});
let p6 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 1500, 'six'); 
});


Promise.each = async function(arr, fn) {
  for(const item of arr) await fn(item);
}



Promise.each([p1, p2, p3], async (res) => {
  console.log(await res);
}).then(res1 => {
  console.log('res1', res1);
})

// Promise.dispatch = function(groups) {
//   var results = []
//   return (function () {
//       var fun = arguments.callee, group = groups.shift()
//       if (!group) {
//           return Promise.resolve(results)
//       }

//       var promises = []
//       group.forEach(function (task) {
//           promises.push(
//               Promise.resolve(task)
//           )
//       })

//       return Promise.all(promises).then(function (rets) {
//           results.push(rets)
//           return fun()
//       })
//   }())
// }

// Promise.dispatch([[P1, p2], [p3, p4], [p5, p6]]).then(res) => {
//   console.log(res)
// }