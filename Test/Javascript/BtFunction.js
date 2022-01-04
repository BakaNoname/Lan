let myNumber=[];
function test(){
    let a=prompt("Mời nhập 1 số bất kỳ");
    if(a%2==0){
        console.log("Even Number");
    }
    else{
        console.log("Odd Number");
    }
    myNumber.push(a);
}

//FUNCTION PARAMETER
function Tong(c1,c2){
    let tong= parseInt(c1)+parseInt(c2);
    console.log(tong);
}
let a=prompt("Mời nhập một số bất kỳ thứ nhất");
let b=prompt("Mời nhập một số bất kỳ thứ hai");
Tong(a,b)

//FUNCTION RETURN
function remove_dollar_sign(a){
    a.replace("$","");
    return;
}
let a=prompt("Mời nhập câu bất kỳ");
console.log(remove_dollar_sign(a))