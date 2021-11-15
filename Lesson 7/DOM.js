const name= document.querySelector(".Ip-name");
const age= document.querySelector(".Ip-age");
const address= document.querySelector(".Ip-address");
const score= document.querySelector(".Ip-score");

const add= document.querySelector(".Add");

const sorted= document.querySelector(".Sorted");
const stHighestAge= document.querySelector(".Search-highest-age");
const stHighestScore= document.querySelector(".Search-highest-score");
const search_name= document.querySelector(".Search-by-name");
const search_age= document.querySelector(".Search-by-age");
const search_address= document.querySelector(".Search-by-address");

const input= document.querySelector(".Ip2");

const table= document.getElementById("stInfo");

// NHẬP TT SINH VIÊN
const student=[];
add.addEventListener('click',function(){
    const stName= name.value;
    const stAge= parseInt(age.value);
    const stAddress= address.value;
    const stScore= parseInt(score.value);

    student.push({
        name: stName,
        age: stAge,
        address: stAddress,
        score: stScore,
    });

    //IN RA BẢNG THÔNG TIN
    let row=table.insertRow();
    let cell1=row.insertCell(0);    
    let cell2=row.insertCell(1);    cell2.innerHTML=stName;
    let cell3=row.insertCell(2);    cell3.innerHTML=stAge;
    let cell4=row.insertCell(3);    cell4.innerHTML=stAddress;
    let cell5=row.insertCell(4);    cell5.innerHTML=stScore;
    console.log({student});
})

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

//SẮP XẾP THEO CHIỀU GIẢM DẦN CỦA TÊN
student.sort(function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
sorted.addEventListener('click',function(){
    
})

// //TÌM NGƯỜI CÓ SỐ TUỔI CAO NHẤT
stHighestAge.addEventListener("click", () => {
    const studentHighestAge = student[0];

    for (let index = 1; index < student.length; index++) {
        const element = student[index];
        if (studentHighestAge.age < element.age) {
            studentHighestAge = element;
        }
    }

})

//TÌM NGƯỜI CÓ SỐ ĐIỂM ĐẦU VÀO CAO NHẤT
stHighestScore.addEventListener("click", () => {
    const studentHighestScore = student[0];

    for (let index = 1; index < student.length; index++) {
        const element = student[index];
        if (studentHighestScore.age < element.score) {
            studentHighestScore = element;
        }
    }
})



//TÌM THEO TÊN
search_name.addEventListener('click',function(){
    for(let i=0;i<student.length;i++){
        if(ip_name.value===student[i].name){
            
        }
    }
})

//TÌM THEO TUỔI
search_age.addEventListener('click',function(){
    for(let i=0;i<student.length;i++){
        if(parseInt(ip_age.value)===student[i].age){
            
        }
    }
})

//TÌM THEO ĐỊA CHỈ
search_address.addEventListener('click',function(){
    for(let i=0;i<student.length;i++){
        if(ip_address.value===student[i].address){
            
        }
    }
})

