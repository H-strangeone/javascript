function calcTip(n){
    if(n>=50 && n<=300 ){
        return (n*15/100);
    }
    else{
        return (n*20/100);
    }
}
const bills=[125,555,44];
let tips=[];
let totals=[];
for(let x=0; x<bills.length; x++){
    tips.push(calcTip(bills[x]));
    totals.push(tips[x]+bills[x]);
}