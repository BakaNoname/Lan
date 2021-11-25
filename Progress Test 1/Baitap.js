//BÀI 1
let input1=prompt("Mời nhập chuỗi ký tự bất kỳ");
console.log("Chuỗi trước khi sắp xếp: ",input1);
const arr1=[...input1];
for(let i=0;i<arr1.length/2;i++){
    let temp=arr1[i];
    arr1[i]=arr1[arr1.length-(i+1)];
    arr1[arr1.length-(i+1)]=temp;
}
console.log("Chuỗi sau khi sắp xếp: ",arr1.join(''));

//BÀI 2
let input2=prompt("Mời nhập chuỗi ký tự bất kỳ");
// const arr2=input2[0].toUpperCase() + input2.substring(1,input2.length);
const arr2= [...input2];
for(let i= 0;i< arr2.length; i++){
    if (arr2[i]==='\n'){
        let changed=arr2[i+1].toUpperCase();
        arr2.splice(i+1,1);
        arr2.splice(i+1,0,changed);
    }
}
console.log(arr2.join(''));

//BÀI 3
let input3=prompt("Mời nhập chuỗi ký tự bất kỳ");
console.log("Mảng trước khi sắp xếp: ",input3);
const arr3=[...input3];
for(let i=0;i<arr3.length;i++)
    for(let j=i+1;j<arr3.length;j++){
        if(arr3[i]===arr3[j]){
            delete arr3[j];
        }
}
console.log("Mảng sau khi sắp xếp: ",arr3.join(''));

//BÀI 4
const nv_MindX=[
    {
        name: 'a',
        age: 24,
        salary: '1600$',
        position: 'Manager'
    },
    {
        name: 'b',
        age: 27,
        salary: '2000$',
        position: 'Boss'
    },
    {
        name: 'c',
        age: 20,
        salary: '800$',
        position: 'Employee'
    }
]
console.log('--- READ ---');
console.log({nv_MindX});
console.log('--- CREATE ---');
nv_MindX.push({
    name: 'd',
    age: 25,
    salary: '1000$',
    position: 'Employee'
})
console.log({nv_MindX});
console.log('--- UPDATE ---');
for (let index = 0; index < nv_MindX.length; index++) {
    if(nv_MindX[index].name==='b'){
        nv_MindX[index].age= 30;
    }
}
console.log({nv_MindX});
console.log('--- DELETE ---');
for (let index = 0; index < nv_MindX.length; index++) {
    if(nv_MindX[index].name==='a'){
        delete nv_MindX[index];
    }
}
console.log({nv_MindX});

//BÀI 5
let a=parseInt(prompt("Mời nhập ngày"));
let b=parseInt(prompt("Mời nhập tháng"));
let c=parseInt(prompt("Mời nhập năm"));
if(b===1||b===3||b===5||b===7||b===8||b===10||b===12){
    if(1<=a<=31){
        console.log(`${a}/${b}/${c} là ngày hợp lệ`);
        let date= new Date(c,b,a);
        console.log('Ngày tiếp theo là: '+(date.getDate()+1)+'/'+date.getMonth()+'/'+date.getFullYear());
    }
}
else if(b===4||b===6||b===9||b===11){
    if(1<=a<=30){
        console.log(`${a}/${b}/${c} là ngày hợp lệ`);
        console.log('Ngày tiếp theo là: '+(date.getDate()+1)+'/'+date.getMonth()+'/'+date.getFullYear());
    }
}
else if(b===2){
    if(1<=a<=29){
        if(c%400===0){
            console.log(`${a}/${b}/${c} là ngày hợp lệ`);
            console.log('Ngày tiếp theo là: '+(date.getDate()+1)+'/'+date.getMonth()+'/'+date.getFullYear());
        }
        else if(1<=a<=28){
            console.log(`${a}/${b}/${c} là ngày hợp lệ`);
            console.log('Ngày tiếp theo là: '+(date.getDate()+1)+'/'+date.getMonth()+'/'+date.getFullYear());
        }
        else{
            console.log(`${a}/${b}/${c} là ngày không hợp lệ`);
        }
    }
}
else{
    console.log(`${a}/${b}/${c} là ngày không hợp lệ`);
}