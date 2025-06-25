/**
 * Async / Await
 * 
 * Async is a keyword that is used to declare an asynchronous function.
 * Await is a keyword that is used to pause the execution of an asynchronous function until a promise is resolved.
 * Async / Await is a more elegant way to handle asynchronous operations in JavaScript.
 * 
 * Async function always returns a promise.
 * Await is only valid inside an async function.
 * 
 * Async / Await is a more readable way to handle asynchronous operations in JavaScript.and we have to avoid using callbacks and promises and promise chains
 * 
 */


// Async function always returns a promise. so even if we don't return a promise, it will return a promise.It will wrap the return value in a promise with a resolved value.So in any case it will return a promise.
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise Resolved Value');
//     }, 10000);
// })

// const delayByPromiseDemo = () => {
//     // Js engine will not wait for the promise to be resolved, it will execute the code line by line Hello Developers will be printed first and then the promise will be resolved and the data will be printed.
//     p.then(data => console.log(data));
//     console.log('Hello Developers');
// }

// delayByPromiseDemo();


// const showCasePromiseWaitDemo = async () => {
//     const data = await p;
//     console.log('Hello Developers');
//     console.log(data);
// }

// showCasePromiseWaitDemo();

// async function getMessage() {
//     return p;
// }

// const dataPromise = getMessage();
// dataPromise.then(data => console.log(data));


// // Await is a keyword that is used to pause the execution of an asynchronous function until a promise is resolved and can only be used inside an async function.
// async function getData() {
//     const data = await p;
//     console.log(data);
// }

// getData();


// console.clear();
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 1 Resolved Value');
//     }, 8000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2 Resolved Value');
//     }, 5000);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise 2 Resolved Value');
//     }, 2000);
// })

// const showCasePromiseWaitDemo = async () => {
//     const startTime = Date.now();
//     console.log('Hello world');

//     const promise1StartTime = Date.now();
//     const data1 = await promise1;
//     const promise1EndTime = Date.now();
//     console.log('Step 1: Done');
//     console.log(data1);
//     console.log(`Time taken for Promise 1: ${(promise1EndTime - promise1StartTime) / 1000} seconds`);

//     const promise2StartTime = Date.now();
//     const data2 = await promise2;
//     const promise2EndTime = Date.now();
//     console.log('Step 2: Done');
//     console.log(data2);
//     console.log(`Time taken for Promise 2: ${(promise2EndTime - promise2StartTime) / 1000} seconds`);

//     const promise3StartTime = Date.now();
//     const data3 = await promise3;
//     const promise3EndTime = Date.now();
//     console.log('Step 3: Done');
//     console.log(data3);
//     console.log(`Time taken for Promise 3: ${(promise3EndTime - promise3StartTime) / 1000} seconds`);

//     const totalTime = Date.now() - startTime;
//     console.log('Bye Bye');
//     console.log(`Total time taken: ${totalTime / 1000} seconds`);
// }

// showCasePromiseWaitDemo();


// const showCasePromiseWaitDemo2 = async () => {
//     const startTime = Date.now();
//     console.log('Hello world');

//     const promise1StartTime = Date.now();
//     const data1 = await new Promise(resolve => setTimeout(() => resolve('Promise 1 Resolved Value'), 8000));
//     const promise1EndTime = Date.now();
//     console.log('Step 1: Done');
//     console.log(data1);
//     console.log(`Time taken for Promise 1: ${(promise1EndTime - promise1StartTime) / 1000} seconds`);

//     const promise2StartTime = Date.now();
//     const data2 = await new Promise(resolve => setTimeout(() => resolve('Promise 2 Resolved Value'), 5000));
//     const promise2EndTime = Date.now();
//     console.log('Step 2: Done');
//     console.log(data2);
//     console.log(`Time taken for Promise 2: ${(promise2EndTime - promise2StartTime) / 1000} seconds`);

//     const promise3StartTime = Date.now();
//     const data3 = await new Promise(resolve => setTimeout(() => resolve('Promise 3 Resolved Value'), 2000));
//     const promise3EndTime = Date.now();
//     console.log('Step 3: Done');
//     console.log(data3);
//     console.log(`Time taken for Promise 3: ${(promise3EndTime - promise3StartTime) / 1000} seconds`);

//     const totalTime = Date.now() - startTime;
//     console.log('Bye Bye');
//     console.log(`Total time taken: ${totalTime / 1000} seconds`);
// };

// showCasePromiseWaitDemo2();


// const dummy1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('case 1 solved');
//     }, 3000)
// });
// const dummy2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('case 2 solved');
//     }, 6000)
// });
// const dummy3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('case 3 solved');
//     }, 9000)
// });

// const resolveAllPromises = async () => {
//     console.log('hello');
//     const val1 = await new Promise(resolve => setTimeout(() => resolve('Promise 1 Resolved Value'), 3000));
//     console.log('heyyyy1');
//     console.log(val1);
//     const val2 = await new Promise(resolve => setTimeout(() => resolve('Promise 2 Resolved Value'), 6000));
//     console.log('heyyyy2');
//     console.log(val2);
//     const val3 = await new Promise(resolve => setTimeout(() => resolve('Promise 3 Resolved Value'), 9000));
//     console.log('heyyyy3');
//     console.log(val3);
//     console.log('bye');
// }

// resolveAllPromises();



// These three promises (promise1 and promise2) are created outside your async function, so they start immediately and in parallel.

/* 
✅ What’s Happening, Step-by-Step
Time	What happens

0s	            promise1 and promise2 are created and both start their 5s timer.
0s	            handleAllPromises() starts running.
0–5s	        await promise1 — waits 5 seconds.
5s	            promise1 resolves → logs "promise 1 is resolved"
5s	            promise2 is already resolved → logs "promise 2 is resolved" instantly
5s–10s	        val3 is awaited — starts a new 5s timer
10s	            "promise 3 is resolved" is printed
10s–15s	        val4 is awaited — starts another 5s timer
15s	            "promise 4 is resolved" is printed
*/
// const promise1 = new Promise((resolve, reject) => setTimeout(() => resolve('promise 1 is resolved'), 5000));
// const promise2 = new Promise((resolve, reject) => {
//     console.log('i am called baby');
//     setTimeout(() => resolve('promise 2 is resolved'), 5000);
// });

// const handleAllPromises = async () => {
//     const val1 = await promise1;
//     console.log(val1);
//     const val2 = await promise2;
//     console.log(val2);
//     const val3 = await new Promise(resolve => setTimeout(() => resolve('promise 3 is resolved'), 5000));
//     console.log(val3);
//     const val4 = await new Promise(resolve => setTimeout(() => resolve('promise 4 is resolved'), 5000));
//     console.log(val4);
// }

// handleAllPromises();

