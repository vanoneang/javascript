function fn() {
  // console.log(Array.from(arguments).slice(-3));
  console.log(arguments.length);

  if (arguments.length >=3) {
    const args = Array.prototype.slice.apply(arguments).slice(-3)
    return () => {

    }
  }
  
  
}


fn(1,2,2,3,4,4)


