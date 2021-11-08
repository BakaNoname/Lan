//BT 1
let a=parseInt(prompt("Mời nhập A"));
let b=parseInt(prompt("Mời nhập B"));
let c=parseInt(prompt("Mời nhập C"));
if(a===0){
    if(b===0){
        if(c===0){
            console.log("Phương trình có vô số nghiệm");
        }
        else{
        console.log("Phương trình vô nghiệm");
        };}
    else{
        console.log("Phương trình có nghiệm duy nhất x= "+-c/b);
    }
}
else{
    let delta=b*b-4*a*c;
    if(delta===0){
        console.log("Phương trình có nghiệm kép x= "+-b/(2*a));
    }
    else if(delta>0){
        let x1=(-b+Math.sqrt(delta))/(2*a);
        let x2=(-b-Math.sqrt(delta))/(2*a);
        console.log("Phương trình có hai nghiệm phân biệt x1,x2= "+x1,x2);
    }
    else{
        console.log("Phương trình vô nghiệm");
    }
}

//BT 2
let Tong=0;
let i=0;
do{
    Tong=Tong+i;
    i++;
}while(i<100);
let TBC=Tong/i;
console.log(TBC);