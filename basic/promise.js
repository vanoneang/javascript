Promise.each = async function(arr, fn) {
  for(const item of arr) await fn(item);
}


var p1 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 1000, 'one'); 
});
var p2 = new Promise(function(resolve, reject) { 
  setTimeout(resolve, 2000, 'two'); 
});


Promise.each([p1, p2], async (res) => {
  console.log(await res);
}).then(res1 => {
  console.log('res1', res1);
})