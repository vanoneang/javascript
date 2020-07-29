/**
 * 先发出请求后接受到响应
 */

const fakeHTTPRequest = (() => {
  let i = 0;
  return () => {
      i += 1
      console.log(`it will response in ${3 - i % 4}s`)
      const value = `It's the ${i}th result`
      return new Promise((r) => { setTimeout(() => r(value), (3 - i % 4) * 1000) })
  }
})();

let response
let counter = 0

const request = async () => {
  let c = ++counter
  return new Promise((r) => {
    fakeHTTPRequest().then(res => {
      if (c !== counter) return r(response)
      response = res
      return r(response)
    })
  })
}

(async () => { console.log(await request()) })();
(async () => { console.log(await request()) })();
(async () => { console.log(await request()) })();