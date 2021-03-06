const Rx = require('rxjs/Rx')
const { concatMap, switchMap, map, last } = require('rxjs/operators')
var Observable = Rx.Observable;


const fakeHTTPRequest = (() => {
  let i = 0;
  return () => {
      i += 1
      console.log(`it will response in ${3 - i % 4}s`)
      const value = `It's the ${i}th result`
      return new Promise((r) => { setTimeout(() => r(value), (3 - i % 4) * 1000) })
  }
})();

// const subject = new Rx.BehaviorSubject(1);

// subject.value().then(console.log)

// const obs = Observable.fromPromise(fakeHTTPRequest)

// subject.pipe(
  //   map(() => fakeHTTPRequest()),
  // ).subscribe(async res => {
    //   console.log('Fin', res)
// })
let result
let counter = 0
const subject = new Rx.BehaviorSubject();

const request = async () => {
  subject.next({
    counter,
    key: ++counter,
    value: await fakeHTTPRequest()
  })
  subject.subscribe(res => {
    if (res.key === counter) result = res.value
  })
  return result
}
  
(async () => { console.log(await request()) })();
(async () => { console.log(await request()) })();
(async () => { console.log(await request()) })();

// subject.next()
// subject.next()
// const observable$ = Rx.Observable.create((observer) => {
//   fakeHTTPRequest()
//     .then(response => {
//       observer.next( response )
//       observer.complete();
//     } )
//     .catch( ( error ) => {
//         observer.error( error );
//     } );
// })

// // observable$.pipe(concatMap(fakeHTTPRequest ))

// observable$.subscribe( {
//   next: data => console.log( '[data] => ', data ),
//   complete: data => console.log( '[complete]' ),
// } );

// fakeHTTPRequest()()


// function mockHTTPRequest(url) {
//     return Observable.of(`Response from ${url}`)
//       .delay(1000);
// }

// function timestamp() {
//   return (new Date()).getTime() - start;
// }

// var start = (new Date()).getTime();

// Observable.of('url-1') 
//   // first request
//   .concatMap(url => {
//     console.log(timestamp() + ': Sending request to ' + url);
//     return fakeHTTPRequest(url);
//   })
//   .do(response => console.log(timestamp() + ': ' + response))

//   // second request
//   .concatMap(response => {
//     console.log(timestamp() + ': Sending request to ' + response);
//     let newUrl = 'url-' + response.length; // create new requests url
//     return fakeHTTPRequest(newUrl);
//   })
//   .do(response => console.log(timestamp() + ': ' + response))

//   // third request
//   .concatMap(response => {
//     console.log(timestamp() + ': Sending request to ' + response);
//     let newUrl = 'url-' + response.length; // create another requests url
//     return fakeHTTPRequest(newUrl);
//   })
//   .subscribe(response => console.log(timestamp() + ': ' + response));