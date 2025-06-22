/*

Mergemap :-

It is a flattening operator i.e just like other operators it tries to extract values returned from observables

map + mergeAll = mergeMap 

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

let obs1 = Observable.fromEvent(input1, 'input');
let obs2 = Observable.fromEvent(input2, 'input');

obs1.mergeMap(
  event1 => {
    return obs2.map(
      event2 => event1.target.value + ' ' + event2.target.value;
    )
  }
).subscribe(combinedValue => {
  console.log(combinedValue);
})

This will trigger only if the inner Observable will emit the value.
Mergemap is handy when you have multiple data source and you want to merge them into one where one of the data sources is the one basically telling when the event emission happens.

*/