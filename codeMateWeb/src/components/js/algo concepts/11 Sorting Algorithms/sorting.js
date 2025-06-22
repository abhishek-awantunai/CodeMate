/*
    Sorting is the process of rearranging the items in a collection so that the items are in some kind of order.
*/

// Because the default sort order is according to string Unicode Points. 

[6,4,10,12,3,15].sort();
// gives Output [10, 12, 15, 3, 4, 6]

[6,4,10,12,3,15].sort((a, b) => a - b);
// gives Output [3, 4, 6, 10, 12, 15]

[6,4,10,12,3,15].sort((a, b) => b - a);
// gives Output [15, 12, 10, 6, 4, 3]

['Apple', 'Banana', 'Orange', 'Carrot', 'Kiwi'].sort((a,b) => a.length - b.length);
// gives Output ['Kiwi', 'Apple', 'Banana', 'Orange', 'Carrot']