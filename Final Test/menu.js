const menu=[
    {
        type: 'Breakfast',
        image: './asset/img/1.png',
        name: 'Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: '#',
    },
    {
        type: 'Dinner',
        image: './asset/img/1.png',
        name: 'Tuna Steak',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: '#',
    },
    {
        type: 'Lunches',
        image: './asset/img/1.png',
        name: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: '#',
    },
    {
        type: 'Fastfood',
        image: './asset/img/1.png',
        name: 'Hamburger',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: '#',
    },
    {
        type: 'Breakfast',
        image: './asset/img/1.png',
        name: 'Tuna Sandwich',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: '#',
    },
    {
        type: 'Lunches',
        image: './asset/img/1.png',
        name: 'Cheese Burger',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: '#',
    },
    {
        type: 'Fastfood',
        image: './asset/img/1.png',
        name: 'Hot Dog',
        describe:'Making a reservation at Délicious restaurant is easy and',
        link: '#',
    },
]

//TẠO FUNCTION IN RA DANH SÁCH MỚI
const object=(array,info) => {
    for(let i=0; i<array.length;i++){
        const menus= array[i];
        const menu_info= document.createElement('div');
        menu_info.classList.add('Food');
        info.appendChild(menu_info);

        //IN RA DANH SÁCH MỚI
        menu_info.innerHTML=`
            <img src="${menus.image}" alt="">
            <div class="Name">${menus.name}</div>
            <div class="Describe">${menus.describe}</div>
            <a style="text-decoration: none;" href="${menus.link}">Order Now</a>
        `;
    }

    //STYLE
    const count= list.childElementCount;
    if(count===2){
        list.style.width= '800px';
    }
    else{
        list.style.width= 'auto';
    }
}

//TẠO EVENT TÌM KIẾM
const list= document.querySelector('.Menu');
const input= document.querySelector('.Search')
input.addEventListener('input',(event) => {
    //XÓA DANH SÁCH CŨ
    let lastchild= list.lastElementChild;
    while(lastchild){
        list.removeChild(lastchild);
        lastchild= list.lastElementChild;
    }
    
    //LẤY GIÁ TRỊ INPUT VÀ SO SÁNH VỚI DANH SÁCH
    const value= event.target.value.toLowerCase();
    const temp= [...menu].filter((menus) => menus.name.toLowerCase().includes(value));
    
    //IN RA DANH SÁCH MỚI
    object(temp,list);
})

