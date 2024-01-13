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

const me={
    name: 'hitesh',
    age: 19,
    birthyear:2004,
    calcage: function(){
        console.log(this)//this will basically print everything in thee object because of the keyword this can just use me too
        return 2023-this.birthyear;//here this will  access the birthyear given  in the object so we wont have to pass some input to this method any time now we call it, can use me.birthyear too
    }
}
//two ways to call this method 
console.log(me.calcage());
console.log(me['calcage']);

const me = {
    name: 'hitesh',
    age: 19,
    birthyear: 2004,
    hasdrivers: false,
    calcage: function () {
        this.age = 2023 - this.birthyear;
        return this.age;
    },
    getsummary: function () {
        if (this.hasdrivers) {
            console.log(`${this.name} is ${this.calcage()} years old and he was born in ${this.birthyear} and he has a drivers license`);
        }
        else {
            console.log(`${this.name} is ${this.calcage()} years old and he was born in ${this.birthyear} and he has no drivers license`);
        }

    }
}
console.log(me.getsummary())
//two ways to call this method 
console.log(me.calcage());
console.log(me['calcage']);
// windows+d selects all the same words to the  word where the cursor is pointing now like agar abhi cursor me par hai aur maine ye command dabaya to saare me select ho jaayenge