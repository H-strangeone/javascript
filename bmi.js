const mark={
    fullName: 'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.BMI = (this.mass/(this.height*this.height));
        return this.BMI;
    },
}
const john={
    fullName: 'John Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        this.BMI= (this.mass/(this.height*this.height));
        return this.BMI;
    },
}
mark.calcBMI();
john.calcBMI();
console.log(mark.BMI<john.BMI?`John Smith's BMI ${john.BMI} is higher than Mark Miller's ${mark.BMI}`:`Mark Miller's BMI ${mark.BMI} is higher than John Smith's ${john.BMI}`);