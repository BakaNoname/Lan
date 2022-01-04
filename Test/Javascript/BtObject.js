//CREATE
let Ronaldo={
    name: "Cristiano Ronaldo dos Santos Aveiro",
    yearofbirth: 1985,
    region: "Bồ Đào Nha"
}
console.log(Ronaldo);
do{
    let a=prompt("Bạn có muốn nhập thêm thông tin của cầu thủ không (Y/N)");
    if(a=='Y'||a=='N'){
        if(a=='Y'){
            let b=prompt("Bạn muốn nhập thêm thông tin gì");
            let c=prompt("Giá trị cụ thể của thông tin là gì");
            //Ronaldo(b,c);
            console.log(Ronaldo);
        }
        else if(a=='N'){
            console.log("Good bye");}
        break;}
    else{
        alert("Bạn chỉ được phép nhập Y hoặc N, mời nhập lại");
    }
}while(true)

//UPDATE
let Ronaldo={
    name: "Cristiano Ronaldo dos Santos Aveiro",
    yearofbirth: 1985,
    region: "Bồ Đào Nha"
}
console.log(Ronaldo);
Ronaldo.name="Lionel Andrés Messi Cuccittini";
Ronaldo.yearofbirth=1987;
Ronaldo.region="Tây Ban Nha";
console.log(Ronaldo);

//DELETE
let Ronaldo={
    name: "Cristiano Ronaldo dos Santos Aveiro",
    yearofbirth: 1985,
    region: "Bồ Đào Nha"
}
console.log(Ronaldo);
do{
    let a=prompt("Bạn có muốn xóa thông tin nào của cầu thủ không (Y/N)");
    if(a=='Y'||a=='N'){
        if(a=='Y'){
            let b=prompt("Bạn muốn xóa thông tin nào");
            //
            console.log(Ronaldo);
        }
        else if(a=='N'){
            console.log("Good bye");}
        break;}
    else{
        alert("Bạn chỉ được phép nhập Y hoặc N, mời nhập lại");
    }
}while(true)