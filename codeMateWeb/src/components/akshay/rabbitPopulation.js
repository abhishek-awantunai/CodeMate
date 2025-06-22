/*

You start with 2 rabbits.

Each rabbit doubles (multiplies by 2) every month.

You want to know how many rabbits you'll have after 6 months.

*/

console.clear();

const rabbitPopulation = (month) => {
    if (month < 1) return 2;

    return 2 * rabbitPopulation(month - 1);

}

console.log(rabbitPopulation(12));

// 0 1 1 2 3 5 8 13 21 34 55