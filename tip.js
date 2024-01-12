function calctip(n){
    if(n>=50 && n<=300 ){
        return (n*15/100)
    }
    else{
        return (n*20/100)
    }
}
let tip=calctip(105);
console.log(tip);