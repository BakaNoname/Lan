const sinhvien = [
    {
        name: 'Nam',
        age: 20,
        address: 'Hà Nội',
        score: 25.5,
    },
    {
        name: 'Hà',
        age: 19,
        address: 'Kiên Giang',
        score: 30,
    }, {
        name: 'Minh',
        age: 25,
        address: 'Ninh Bình',
        score: 20,
    }, {
        name: 'Kiên',
        age: 18,
        address: 'Hà Nội',
        score: 27,
    },
]

// TÌM NGƯỜI CÓ SỐ TUỔI CAO NHẤT
let max_age=null;
for(let i=0;i<sinhvien.length-1;i++){
    max_age=sinhvien[i];
    if(max_age.age<sinhvien[i+1].age){
        max_age=sinhvien[i+1];
    }
}
console.log(max_age)

// TÌM NGƯỜI CÓ ĐỊA CHỈ Ở HÀ NỘI
for (let i = 0; i < sinhvien.length; i++) {
    if (sinhvien[i].address === 'Hà Nội') {
        console.log(sinhvien[i]);
    }
}

// TÌM NGƯỜI CÓ ĐIỂM ĐẦU VÀO CAO NHẤT
let max_score=null;
for(let i=0;i<sinhvien.length-1;i++){
    max_score=sinhvien[i];
    if(max_score.score<sinhvien[i+1].score){
        max_score=sinhvien[i+1];
    }
}
console.log(max_score)


// SẮP XẾP CÁC HỌC VIÊN THEO CHIỀU GIẢM DẦN CỦA TÊN
for(let i=0;i<sinhvien.length;i++)
    for(let j=0;j<sinhvien.length-1;j++){
        if(sinhvien[i].name>sinhvien[j].name){
            let min=sinhvien[i];
            sinhvien[i]=sinhvien[j];
            sinhvien[j]=min;
        }
    }
console.log(sinhvien)
// TÌM RA NGƯỜI CÓ SỐ TUỔI LỚN THỨ 2
let first_age=sinhvien[0];
let second_age=null;
for(let i=1;i<sinhvien.length-1;i++){
    if(sinhvien[i].age>first_age.age){
        second_age=first_age;
        first_age=sinhvien[i];
    }
    else if(sinhvien[i].age<first_age.age){
        second_age=sinhvien[i];
    }
}
console.log(second_age)

// TÌM RA CÁC BẠN CÓ ADDRESS TẠI MIỀN BẮC

// TÌM RA CÁC BẠN CÓ AGE>24
for(let i=0;i<sinhvien.length;i++){
    if(sinhvien[i].age>24){
        console.log(sinhvien[i]);
    }
}