const foods=[
    {
        image: './Photo/Full_Food1.jpg',
        name: 'Sandwich',
        number: 1,
        describe: 'Write something here',
        link: '#',
    },
    {
        image: './Photo/Full_Food1.jpg',
        name: 'Tuna Steak',
        number: 2,
        describe: 'Write something here',
        link: '#',
    },
    {
        image: './Photo/Full_Food1.jpg',
        name: 'Hamburger',
        number: 3,
        describe: 'Write something here',
        link: '#',
    },
    {
        image: './Photo/Full_Food1.jpg',
        name: 'Sandwich',
        describe: 'Write something here',
        link: '#',
    },
    {
        image: './Photo/Full_Food1.jpg',
        name: 'Sandwich',
        describe: 'Write something here',
        link: '#',
    },
]

//TẠO FUNCTION IN RA THÔNG TIN SP
const inform= (array,info) =>{
    for(let i=0; i<array.length;i++){
        const food= array[i];
        const food_info= document.createElement('div');
        food_info.classList.add('.Food_info');
        info.appendChild(food_info);
        food_info.innerHTML=`
            <img src="${food.image}" alt="1">
            <div class="Right">
                <ul>
                    <li value="${food.number}">${food.name}</li>
                    <li>${food.describe}</li>
                </div>
                <button><a style="text-decoration: none;" href="${food.link}">Book a Table</a></button>
            </div>
        `;
    }

    // //STYLE
    // food_info.style.marginTop='100px';
    // food_info.style.marginLeft='400px';
    // food_info.style.marginRight='400px';
    // food_info.style.display='flex';
    // // food_info.style.justifyContent='space between';
    // food_info.style.alignItems='center';

}

//TẠO EVENT IN RA THÔNG TIN SP
const main= document.querySelector('.Main-content')
const food_name= document.querySelector('.Name');
console.log(food_name.value);

list.addEventListener('click',() =>{
    //XÓA MAIN
    let lastchild= main.lastElementChild;
    while(lastchild){
        main.removeChild(lastchild);
        lastchild= main.lastElementChild;
    }
    
    const temp= [...foods];
    for(let i=0; i<temp.length; i++){
        if(temp[i].number===food_name.value){
            inform(temp[i],main);
        }
    }
})