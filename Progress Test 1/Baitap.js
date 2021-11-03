//BÀI 1
const input=prompt("Mời nhập chuỗi ký tự bất kỳ");
console.log("Chuỗi trước khi sắp xếp: ",input);
[...input];
for(let i=0;i<input.length;i++)
    for(let j=0;j<input.length-1;j++){
        
}
console.log("Chuỗi sau khi sắp xếp: ",input);

//BÀI 2

//BÀI 3
const array=prompt("Mời nhập chuỗi ký tự bất kỳ");
[...array];
console.log("Mảng trước khi sắp xếp: ",array);
for(let i=0;i<array.length;i++)
    for(let j=0;j<array.length-1;j++){
        if(array[i]===array[j]){
            array[j].slice(0,1)
        }
}
console.log("Mảng sau khi sắp xếp: ",array);
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
if(nv_MindX.name==='b'){
    nv_MindX.age= 30;
}
console.log({nv_MindX});
console.log('--- DELETE ---');
if(nv_MindX.name==='a'){
    delete nv_MindX[0];
}
console.log({nv_MindX});
//BÀI 5