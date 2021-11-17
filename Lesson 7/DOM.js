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
input.style.display="none";

const table= document.getElementById("tbody")

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
// for(let i=0;i<student.length;i++){
//     row=table.insertRow();
//     cell1=row.insertCell(0);    
//     cell2=row.insertCell(1);    cell2.innerHTML=student[i].name;
//     cell3=row.insertCell(2);    cell3.innerHTML=student[i].age;
//     cell4=row.insertCell(3);    cell4.innerHTML=student[i].address;
//     cell5=row.insertCell(4);    cell5.innerHTML=student[i].score;
// }

//SẮP XẾP THEO CHIỀU GIẢM DẦN CỦA TÊN
sorted.addEventListener('click',function(){
    student.sort(function compare(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })
    //XÓA DANH SÁCH CŨ
    let lastChild = table.lastElementChild;
    while (lastChild) {
        table.removeChild(lastChild);
        lastChild = table.lastElementChild;
    }
    //NHẬP LẠI DANH SÁCH MỚI
    for(let i=0;i<student.length;i++){
        row=table.insertRow();
        cell1=row.insertCell(0);    
        cell2=row.insertCell(1);    cell2.innerHTML=student[i].name;
        cell3=row.insertCell(2);    cell3.innerHTML=student[i].age;
        cell4=row.insertCell(3);    cell4.innerHTML=student[i].address;
        cell5=row.insertCell(4);    cell5.innerHTML=student[i].score;
    }
})


//TÌM NGƯỜI CÓ SỐ TUỔI CAO NHẤT
stHighestAge.addEventListener("click", () => {
    //XÓA DANH SÁCH CŨ
    let lastChild = table.lastElementChild;
    while (lastChild) {
        table.removeChild(lastChild);
        lastChild = table.lastElementChild;
    }
    let studentHighestAge = student[0];
    for (let i = 1; i < student.length; i++) {
        if (studentHighestAge.age < student[i].age) {
            studentHighestAge = student[i];
            row=table.insertRow();
            cell1=row.insertCell(0);    
            cell2=row.insertCell(1);    cell2.innerHTML=studentHighestAge.name;
            cell3=row.insertCell(2);    cell3.innerHTML=studentHighestAge.age;
            cell4=row.insertCell(3);    cell4.innerHTML=studentHighestAge.address;
            cell5=row.insertCell(4);    cell5.innerHTML=studentHighestAge.score;
        }                                                                                                     
    }
})

//TÌM NGƯỜI CÓ SỐ ĐIỂM ĐẦU VÀO CAO NHẤT
stHighestScore.addEventListener("click", () => {
    //XÓA DANH SÁCH CŨ
    let lastChild = table.lastElementChild;
    while (lastChild) {
        table.removeChild(lastChild);
        lastChild = table.lastElementChild;
    }
    let studentHighestScore = student[0];
    for (let i = 1; i < student.length; i++) {
        if (studentHighestScore.score < student[i].score) {
            studentHighestScore = student[i];
            row=table.insertRow();
            cell1=row.insertCell(0);    
            cell2=row.insertCell(1);    cell2.innerHTML=studentHighestScore.name;
            cell3=row.insertCell(2);    cell3.innerHTML=studentHighestScore.age;
            cell4=row.insertCell(3);    cell4.innerHTML=studentHighestScore.address;
            cell5=row.insertCell(4);    cell5.innerHTML=studentHighestScore.score;
        }                                                                                                     
    }
})

//TÌM THEO TÊN
search_name.addEventListener('click',function(){
    input.style.display="";
    input.placeholder='Who do you want to find?'
    input.addEventListener('input',function(event){
        //XÓA DANH SÁCH CŨ
        let lastChild = table.lastElementChild;
        while (lastChild) {
            table.removeChild(lastChild);
            lastChild = table.lastElementChild;
        }
        //LẤY GIÁ TRỊ NHẬP VÀO
        const value=event.target.value;
        console.log(value);
        //SO SÁNH VỚI DANH SÁCH
        const temp=[...student].filter((student) => student.name.includes(value))
        console.log(temp);
        for(let i=0;i<temp.length;i++){
            const element=temp[i];
            row=table.insertRow();
            cell1=row.insertCell(0);    
            cell2=row.insertCell(1);    cell2.innerHTML=element.name;
            cell3=row.insertCell(2);    cell3.innerHTML=element.age;
            cell4=row.insertCell(3);    cell4.innerHTML=element.address;
            cell5=row.insertCell(4);    cell5.innerHTML=element.score;
        }
    })
})

//TÌM THEO TUỔI
search_age.addEventListener('click',function(){
    input.style.display="";
    input.placeholder='How old is he/she?'
    input.addEventListener('input',function(event){
        //XÓA DANH SÁCH CŨ
        let lastChild = table.lastElementChild;
        while (lastChild) {
            table.removeChild(lastChild);
            lastChild = table.lastElementChild;
        }
        //LẤY GIÁ TRỊ NHẬP VÀO
        const value=event.target.value;
        console.log(value);
        //SO SÁNH VỚI DANH SÁCH
        const temp=[...student].filter((student) => student.age.includes(value))
        console.log(temp);
        for(let i=0;i<temp.length;i++){
            const element=temp[i];
            row=table.insertRow();
            cell1=row.insertCell(0);    
            cell2=row.insertCell(1);    cell2.innerHTML=element.name;
            cell3=row.insertCell(2);    cell3.innerHTML=element.age;
            cell4=row.insertCell(3);    cell4.innerHTML=element.address;
            cell5=row.insertCell(4);    cell5.innerHTML=element.score;
        }
    })
})

//TÌM THEO ĐỊA CHỈ
search_address.addEventListener('click',function(){
    input.style.display="";
    input.placeholder='Where dose he/she live?'
    input.addEventListener('input',function(event){
        //XÓA DANH SÁCH CŨ
        let lastChild = table.lastElementChild;
        while (lastChild) {
            table.removeChild(lastChild);
            lastChild = table.lastElementChild;
        }
        //LẤY GIÁ TRỊ NHẬP VÀO
        const value=event.target.value;
        console.log(value);
        //SO SÁNH VỚI DANH SÁCH
        const temp=[...student].filter((student) => student.address.includes(value))
        console.log(temp);
        for(let i=0;i<temp.length;i++){
            const element=temp[i];
            row=table.insertRow();
            cell1=row.insertCell(0);    
            cell2=row.insertCell(1);    cell2.innerHTML=element.name;
            cell3=row.insertCell(2);    cell3.innerHTML=element.age;
            cell4=row.insertCell(3);    cell4.innerHTML=element.address;
            cell5=row.insertCell(4);    cell5.innerHTML=element.score;
        }
    })
})

