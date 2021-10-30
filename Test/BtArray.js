//CREAT
let name=["Ronaldo", "Messi", "Neymar"];
console.log(name);
do{
    let a= prompt("Bạn có muốn nhập thêm cầu thủ không (Y/N)");
    if(a=='Y'|| a=='N'){
        if(a=='Y'){
            let b=prompt("Mời nhập tên cầu thủ muốn thêm vào");
            name.push(b);
            console.log(name);
        }
        else if(a=='N'){
            console.log("Good bye!");
        }
        break;}
    else{
        alert("Bạn chỉ được nhập Y hoặc N, mời nhập lại");
    };
}while(true)

//READ
let car=["Audi", "Bentley", "BMW", "Bugatti", "Ferrari", "Ford"];
for(i=0;i<car.length;i++){
    console.log(i,car[i]);
}

//UPDATE
let name=["Ronaldo", "Messi", "Neymar"];
console.log(name);
do{
    let a= prompt("Bạn có muốn thay đổi tên cầu thủ nào không (Y/N)");
    if(a=='Y'|| a=='N'){
        if(a=='Y'){
                let b=prompt("Mời nhập vị trí cầu thủ muốn thay đổi (0/1/2)");
                let c=prompt("Mời nhập tên cầu thủ mới");
                name[parseInt(b)]=c;
                console.log(name);
        }
        else if(a=='N'){
            console.log("Good bye!");
        }
        break;}
    else{
        alert("Bạn chỉ được nhập Y hoặc N, mời nhập lại");
    };
}while(true)

//DELETE
let name=["Ronaldo", "Messi", "Neymar"];
console.log(name);
do{
    let a= prompt("Bạn có muốn xóa tên cầu thủ nào không (Y/N)");
    if(a=='Y'|| a=='N'){
        if(a=='Y'){
                let b=prompt("Mời nhập vị trí cầu thủ muốn xóa (0/1/2)");
                name.splice(parseInt(b),1);
                console.log(name);
        }
        else if(a=='N'){
            console.log("Good bye!");
        }
        break;}
    else{
        alert("Bạn chỉ được nhập Y hoặc N, mời nhập lại");
    };
}while(true)