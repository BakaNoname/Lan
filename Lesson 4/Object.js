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

//BT VỀ SINH VIÊN
const sinhvien=[
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
    },{
        name: 'Minh',
        age: 22,
        address: 'Ninh Bình',
        score: 20,
    },{
        name: 'Kiên',
        age: 18,
        address: 'Hà Nội',
        score: 27,
    },
]
//TÌM NGƯỜI CÓ SỐ TUỔI LỚN NHẤT
//TÌM NGƯỜI CÓ ĐỊA CHỈ Ở HÀ NỘI
//TÌM NGƯỜI CÓ SỐ ĐIỂM ĐẦU VÀO CAO NHẤT
//SẮP XẾP THEO TÊN GIẢM DẦN