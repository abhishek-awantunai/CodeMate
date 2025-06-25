const cleanRoom = () => new Promise((resolve, reject) => {
    const isClean = true;
    setTimeout(() => {
        if (isClean) {
            resolve('room is cleaned');
        } else {
            reject('err aaya');
        }
    }, 1000);
})


const throwGarbage = () => new Promise((resolve, reject) => {
    const garbageThrown = true;
    setTimeout(() => {
        if (garbageThrown) {
            resolve('Garbage is thrown');
        } else {
            reject('err aaya');
        }
    }, 5000);
})


const winIceCream = () => new Promise((resolve, reject) => {
    const iceCreamShopOpen = true;
    setTimeout(() => {
        if (iceCreamShopOpen) {
            resolve('Bought Ice Cream');
        } else {
            reject('err aaya');
        }
    }, 10000);
})


// cleanRoom().then(res => {
//     console.log(res);
//     return throwGarbage();
// }).then(res => {
//     console.log(res);
//     return winIceCream();
// }).then(res => {
//     console.log(res);
//     console.log('all tasks finished');
// }).catch(err => {
//     console.log(err);
// })

Promise.all([cleanRoom(), throwGarbage(), winIceCream()]).then(() => {
    console.log('all of them is finished');
}).catch(err => {
    console.log(err);
});