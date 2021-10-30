let menu=["T-shirt","Sweater"];
let a=prompt("Welcome to our shop, what do you want ( C,R,U,D)?");
if(a==String('R')){alert(menu);
    b=prompt("Welcome to our shop, what do you want ( C,R,U,D)?");
    if(b==String('C')){
        menu.push("Jeans");
        alert(menu);
        c=prompt("Welcome to our shop, what do you want ( C,R,U,D)?");
        if(c==String('U')){menu[1]="Skirt";alert(menu);
            d=prompt("Welcome to our shop, what do you want ( C,R,U,D)?");
            if(d==String('D')){menu.splice(2,1);alert(menu);};};};}