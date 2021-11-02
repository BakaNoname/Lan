//TÌM KIẾM TUYẾN TÍNH
const object=[
    {
        name:'a',
        age:23,
    },
    {
        name:'b',
        age:20,
    },
    {
        name:'c',
        age:18,
    },
    {
        name:'d',
        age:27,
    },
]
for(let i=0;i<object.length;i++){
    let x=object[i];
    if(x.age===20){
        console.log(x);
    }
}

//SẮP XẾP NỔI BỌT
// let swapped=false;
// do{
//     swapped=false;
//     for(let i=0;i<object.length-1;i++){
//         if(object[i].age>object[i+1].age){
//             let min=object[i];
//             object[i]=object[i+1];
//             object[i+1]=min;
//         swapped=true;
//         }
//     }
// }while(swapped)
// console.log(object)
for(let i=0;i<object.length;i++)
    for(let j=0;j<object.length-1;j++){
    if(object[i].age<object[j].age){
        let max=object[i];
        object[i]=object[j];
        object[j]=max;
    }
}
console.log(object)

//GIẢI PT BẬC HAI
const PT={
    a: parseInt(prompt("Mời nhập a:")),
    b: parseInt(prompt("Mời nhập b:")),
    c: parseInt(prompt("Mời nhập c:")),
}
if(PT.a===0){
    if(PT.b===0){
        if(PT.c===0){
           console.log("Phương trình có vô số nghiệm"); 
        }
        else{
            console.log("Phương trình vô nghiệm");
        }
    }
    else{
        console.log("Phương trình có nghiệm duy nhất x= ",-PT.c/PT.b);
    }
}
else{
    let delta=PT.b*PT.b-4*PT.a*PT.c;
    if(delta<0){
        console.log("Phương trình vô nghiệm");
    }
    else if(delta===0){
        console.log("Phương trình có nghiệm kép x= ",-PT.b/(2*PT.a));
    }
    else{
        let x1=(-PT.b+Math.sqrt(delta))/(2*PT.a);
        let x2=(-PT.b-Math.sqrt(delta))/(2*PT.a);
        console.log("Phương trình có 2 nghiệm phân biệt x1,x2= ",x1,x2);
    }
}