console.clear();
const API_URL = 'https://api.github.com/users/abhishek-awantunai';

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1 success');
        // reject('p1 fail');
    }, 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 success');
        // reject('p2 fail');
    }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p3 success');
        // reject('p3 fail');
    }, 3000)
})

const demonstratePromise = async () => {
    try {
        // saare ke saare resolved ya ek failed
        // const data = await Promise.all([promise1, promise2, promise3]);

        // saare ke saare settled
        // const data = await Promise.allSettled([promise1, promise2, promise3]);

        // Jo sabse pehle settle ho success ya fail se matlb nahi 
        // const data = await Promise.race([promise1, promise2, promise3]);

        // Sala koi to resolve ho ja bhai nahi to fir last me error dikhao 
        const data = await Promise.any([promise1, promise2, promise3]);
        console.log(data);
    } catch (error) {
        console.warn(error)
    }
}

demonstratePromise();

const demoApiSequence = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    console.log(data);
    
    if (data) {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    }
}

// In case of promise.any all the aggregate errors are in err.errors array

demoApiSequence();