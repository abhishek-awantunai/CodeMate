// Custom made keyup function

let lastTime = new Date().getTime();

function betterFunction(e, delay) {
    e.preventDefault();
    let currentTime = new Date().getTime();
    const timeDiff = currentTime - lastTime;

    if (timeDiff > delay) {
        console.log('Call The API');
    }
    lastTime = currentTime;
    
};