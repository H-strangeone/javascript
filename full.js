alert("hello");

//first challenge
let massMarK=78;
let massJohN=92;
let heightMarK=1.69;
let heightJohN=1.95;
let BMIMarK=(massMark/(heightMarK*heightMarK));
let BMIJohN=(massJohn/(heightJohN*heightJohN));
let markhigherBMI=(BMIMarK>BMIJohN);
console.log(BMIJohN)
console.log(BMIMarK)
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

//third
let scoreDolphins=((96+108+89)/3);
let scoreKoalas=((91+110+88)/3);
if(scoreDolphins>scoreKoalas){
    console.log("Dolphins win the trophy");
}
else if(scoreDolphins<scoreKoalas){
    console.log("Koalas win the trophy");
}
else{console.log("Both win the trophy");}