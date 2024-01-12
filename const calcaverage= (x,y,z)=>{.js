const calcaverage= (x,y,z)=>{
    return (x+y+z)/3
}
const scoreDolphins=calcaverage(44,23,71)
const scoreKoalas=calcaverage(65,54,49)
function checkWinner(x,y){
    if(x>y){
        console.log('Dolphins win (${x} vs ${y}');
    }
    else if(y>x){
        console.log("Koalas win (${y} vs ${x}");
    }
    else{console.log("no team wins...")}
}
checkWinner(scoreDolphins,scoreKoalas);
