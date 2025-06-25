console.clear();
console.log('HELLO ABHISHEK KUMAR');

let n = 6;

for(let i = 0; i < 4; i++) {
    let row = '';
    for (let j = 0; j < 4; j++) {
        row += '*';
    }
    console.log(row + '\n');
}

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '  ' + j;
    }
    console.log(row);
}

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}

for (let i = 0; i <= n; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
        row += ' ' + i;
    }
    console.log(row);
}


let toggle = 1;
for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += ' ' + toggle;
        toggle = toggle ? 0 : 1;
    }
    console.log(row);
}

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += ' ' + (j % 2);
//     }
//     console.log(row);
// }

// for (let i = 0; i <= n; i++) {
//     let row = '';
//     for (let j = 0; j <= n; j++) {
//         row += (j >= n - i) ? '*' : '_';
//     }
//     console.log(row);
// }

// for (let i = 0; i < n; i++) {
//     let row = '';
//     for (let j = 0; j < n - i; j++) {
//         row += ' * ';
//         // row += ' ' + (j + 1); 
//     }
//     console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += ' ' + i;
//     }
//     console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//     let row = ''; 
//     for (let j = 1; j <= i; j++) {
//         row += ' ' + j;
//     }
//     console.log(row);
// }

// console.log(' ------------------ ')
// console.log(' ------------------ ')

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = n; j > n - i; j--) {
//         row += ' ' + j;
//     }
//     console.log(row);
// }