const newobject={
    firstname:'hitesh',
    lastname:'kumar',
    age: 19,
    friends: ['yash', 'mannu', 'dhairya', 'pratush']
}
//prompt is input in js
const interestedin = prompt('what do you want know , choose between firstname, lastname, age, friends');
console.log(newobject[interestedin]);
alert(newobject[interestedin])
newobject.location='peace';
newobject.github='hiteshgitman';
console.log(newobject);
console.log(`${newobject.firstname} has ${(newobject.friends).length} friends and his best friend is ${newobject.friends[0]}`);