const name= document.querySelector(".Ip-name");
const age= document.querySelector(".Ip-age");
const address= document.querySelector(".Ip-address");

const add= document.querySelector(".Add");
const menu= document.querySelector(".Menu");

const ip_name= document.querySelector(".Find-name");
const ip_age= document.querySelector(".Find-age");
const ip_address= document.querySelector(".Find-address");

const find_name= document.querySelector(".Find-by-name");
const find_age= document.querySelector(".Find-by-age");
const find_address= document.querySelector(".Find-by-address");

const list= document.querySelector(".stInfo");

// NHẬP TT SINH VIÊN
const student=[];
add.addEventListener('click',function(){
    const stName= name.value;
    const stAge= parseInt(age.value);
    const stAddress= address.value;

    student.push({
        name: stName,
        age: stAge,
        address: stAddress,
    });

    console.log(student)
})

menu.addEventListener('click',function(){
    list.innerHTML='Result:\n';
    list.insertAdjacentHTML('beforeend',JSON.stringify(student,null,0));
});

// const student = [
//     {
//         name: 'a',
//         age: 20,
//         address: 'Hà Nội',
//         location: 'North',
//         score: 25.5,
//     },
//     {
//         name: 'b',
//         age: 20,
//         address: 'Kiên Giang',
//         location: 'South',
//         score: 30,
//     }, {
//         name: 'c',
//         age: 25,
//         address: 'Đà Nẵng',
//         location: 'Central',
//         score: 20,
//     }, {
//         name: 'a',
//         age: 18,
//         address: 'Hà Nội',
//         location: 'North',
//         score: 27,
//     },
// ]

//TÌM THEO TÊN
find_name.addEventListener('click',function(){
    list.innerHTML='Result:\n';
    for(let i=0;i<student.length;i++){
        if(ip_name.value===student[i].name){
            list.insertAdjacentHTML('beforeend',JSON.stringify(student[i],null,0));
        }
    }
})

//TÌM THEO TUỔI
find_age.addEventListener('click',function(){
    list.innerHTML='Result:\n';
    for(let i=0;i<student.length;i++){
        if(parseInt(ip_age.value)===student[i].age){
            list.insertAdjacentHTML('beforeend',JSON.stringify(student[i],null,0));
        }
    }
})

//TÌM THEO ĐỊA CHỈ
find_address.addEventListener('click',function(){
    list.innerHTML='Result:\n';
    for(let i=0;i<student.length;i++){
        if(ip_address.value===student[i].address){
            list.insertAdjacentHTML('beforeend',JSON.stringify(student[i],null,0));
        }
    }
})