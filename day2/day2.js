// push function
let mark = [10, 55, 74, 99, "hii"];
console.log(mark);
mark.push("hello");
console.log(mark);
mark.push(15); //add values to the end
console.log(mark);
//-------------------------
//initial array
let marks = [10, 25, 11, 18];
marks.push(24);
console.log("original marks :", marks);
//----------------------------
//push - add element at end
marks.push(22);
console.log("22 added :", marks);
//-----------------------------
//pop() remove from last position
marks.pop();
console.log("last number(22) removed :", marks);
//-------------------------------
//unshift() add at begining
marks.unshift(15);
console.log("after unshift(15 added to the begining) :", marks);
//--------------------------------
//shift() remove  from first
marks.shift();
console.log("removing first position :", marks);
//--------------------------------
//length
console.log("length of the array :", marks.length);
//--------------------------------
// indexof()
console.log("index of 18 :", marks.indexOf(18));
// ----------------------------------
// includes()
console.log("includes 11?", marks.includes(11));
console.log("includes 100?", marks.includes(100));
// --------------------------------------
// slice() does not change the original array
let slicedMark = marks.slice(1, 4);
console.log("slice (1,4):", slicedMark);
console.log("after slice (original):", marks);
//--------------------------------
//concat()
let extraMarks = [7, 8];
let combined = marks.concat(extraMarks);
console.log("after concat :", combined);
//--------------------------------
//join
console.log("join :", marks.join("|"));
// -------------------------------
// reverse()
marks.reverse();
console.log("after sort :", marks);
//-------------------------------------
//sort()
marks.sort((a, b) => a - b);
console.log("After sort:", marks);
//-------------------------------------
//for loop
console.log("using for-loop");
for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}
// ---------------------------------
// for---of loop
console.log("using for-of");
for (let m of marks) {
    console.log(m);
}
// ------------------------------
// forEach()
console.log("using for each");
marks.forEach((m) => console.log(m));
// ------------------------
// map()
let doubled = marks.map(m => m * 2);
console.log("after map(doubled)", doubled);
// -----------------------------
// filter()
let filtered = marks.filter(m => m >= 15);
console.log("after filtering(filtered)", filtered);
// ------------------------------
// reduce()
let total = marks.reduce((sum, m) => sum + m, 0);
console.log("total using reduce :", total);
