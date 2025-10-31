const marvel_heros = ["thor","Ironman","Spiderman"];
const dc_heros=["superman","flash","batman"];
// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// newArray=marvel_heros.concat(dc_heros);
// console.log(newArray)
 

// const allNewHeros=[...marvel_heros,...dc_heros];
// console.log(allNewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[8,9,[10,11]],12];
const realAnotherArray=anotherArray.flat(Infinity );
console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score3,score2))