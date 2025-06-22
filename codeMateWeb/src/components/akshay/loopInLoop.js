// for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5; j++) {
//         console.log((`${i} - ${j}`));
//     }
// }

// for(let i = 0; i < 3; i++) {
//     for(let j = i; j < 3; j++) {
//         console.log((`${i} - ${j}`));
//     }
// }

/*
5 - 5
4 - 4,5
3 - 3,4,5
2 - 2,3,4,5
1 - 1,2,3,4,5

*/

for (let i = 5; i > 0; i--) {
    for (let j = i; j <= 5; j++) {
        console.log((`${i} - ${j}`));
    }
}