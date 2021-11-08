//BT1
let array1=[1,2,'hai',3,'năm'];
let a=prompt("Mời nhập 1 giá trị bất kỳ"); 
for(let i=0;i<array1.length;i++){
    if(a===array1[i]){
        console.log(true);
        break;
    }
    else{
        console.log(false);
    }
}

//BT2
let array2=[];
for(let i=0;i<5;i++){
    let a=prompt("Mời nhập 1 giá trị bất kỳ");
    array2.push(a);
}
console.log("---Mảng trước khi sắp xếp---");
console.log(array2);
for(let i=0;i<array2.length;i++)
    for(let j=0;j<array2.length-1;j++){
    if(array2[i]>array2[j]){
        let temp=array2[i];
        array2[i]=array2[j];
        array2[j]=temp;
    }
}
console.log("---Mảng sau khi sắp xếp---");
console.log(array2)