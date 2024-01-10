alert("hello");

//first challenge
let massMark=78;
let massJohn=92;
let heightMark=1.69;
let heightJohn=1.95;
let BMIMark=(massMark/(heightMark*heightMark));
let BMIJohn=(massJohn/(heightJohn*heightJohn));
let markhigherBMI=(BMIMark>BMIJohn);
console.log(BMIJohn)
console.log(BMIMark)
console.log(markhigherBMI)

//second challenge
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if(BMIMark>BMIMark){
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
else{
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}