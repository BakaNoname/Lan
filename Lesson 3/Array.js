//BT1
let array=[1,2,'hai',3,'năm'];
let a=prompt("Mời nhập 1 giá trị bất kỳ"); 
for(let i=0;i<array.length;i++){
    if(a===array[i]){
        console.log(true);
        break;
    }
    else{
        console.log(false);
    }
}

//BT2
let array=[];
for(let i=0;i<5;i++){
    let a=prompt("Mời nhập 1 giá trị bất kỳ");
    array.push(a);
}
for(let i=0;i<array.length;i++){
    i++;
    if(array[i]>array[i++]){
        array[i]=array[i++];
    }
}
console.log(array)