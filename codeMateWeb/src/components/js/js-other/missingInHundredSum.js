const arr = [];
let total = 0;

// nakli array banaya ja rha 1 to 100 jisme 53 nahi  hoga
for (let i = 1; i <= 100; i++) {
  if (i !== 53) arr.push(i);
  total += i;
}

const totalFor = (100 * (100 + 1)) / 2;

const arrReduce = arr.reduce((accumulator, item) => accumulator + item);
const missing = totalFor - arrReduce;

console.log(missing);
