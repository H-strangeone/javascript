const mark={
    fullName: 'Mark Miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        return (this.mass/(this.height*this.height));
    },
}
const john={
    fullName: 'John Smith',
    mass:92,
    height:1.95,
    calcBMI: function(){
        return (this.mass/(this.height*this.height));
    },
}
const BMIjohn=john.calcBMI();
const BMImark=mark.calcBMI();
console.log(BMImark<BMIjohn?`John Smith's BMI ${BMIjohn} is higher than Mark Miller's ${BMImark}`:`Mark Miller's BMI ${BMImark} is higher than John Smith's ${BMIjohn}`);