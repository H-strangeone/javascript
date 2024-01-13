const me={
    name: 'hitesh',
    age: 19,
    birthyear:2004,
    calcage: function(birthyear){
        return 2023-birthyear;//anyfunction attached to an object is called an method and this is the only way to declare it
    }
}
//two ways to call this method 
console.log(me.calcage(2005));
console.log(me['calcage'](2005));//you dont put the 2005 in the[]to pass it to the method here for objects