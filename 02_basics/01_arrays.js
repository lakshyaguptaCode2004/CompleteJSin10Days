//array
// on creation of copy of arrays in JS --> Shallow Copy is created...

const myArr=[0,1,2,3,4];
console.log(myArr[3]);

const myHeros=["shaktiman","naagraj"]
console.log(myHeros[1]);

const newArray = new Array(1,2,3,4);
console.log(newArray[2]);


//Array methods
myArr.push(6);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(31));

const newArr=myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice,splice
console.log("....Slice And Splice....")
console.log("A ",myArr);
const myn1 =myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr)


const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ",myArr)




