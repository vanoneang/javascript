function b() { 
  console.log(arguments) 
}

function fn() {
  // console.log(Array.from(arguments).slice(-3));
  if (arguments.length >=3) {
    const args = Array.prototype.slice.apply(arguments).slice(-3)
    b.apply(null, args)
  }
}


fn(1,2,2,3,4,4)


