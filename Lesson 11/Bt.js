const characters=[
    {
        name: 'Harry Potter',
        house: 'House: Gryffindor',
        image: './harry.jpg',
        link: './Harry Potter.html',
    },
    {
        name: 'Hermione Granger',
        house: 'House: Gryffindor',
        image: './hermione.jpeg',
        link: './Hermione Granger.html',
    },
    {
        name: 'Ron Weasley',
        house: 'House: Gryffindor',
        image: './ron.jpg',
        link: './Ron Weasley.html',
    },
    {
        name: 'Draco Malfoy',
        house: 'House: Slytherin',
        image: './draco.jpg',
        link: './Draco Malfoy.html',
    },
    {
        name: 'Minerva McGonagall',
        house: 'House: Gryffindor',
        image: './mcgonagall.jpg',
        link: './Minerva McGonagall.html',
    },
    {
        name: 'Cedric Diggory',
        house: 'House: Hufflepuff',
        image: './cedric.png',
        link: './Cedric Diggory.html',
    },
    {
        name: 'Cho Chang',
        house: 'House: Ravenclaw',
        image: './cho.jpg',
        link: './Cho Chang.html',
    },
    {
        name: 'Severus Snape',
        house: 'House: Slytherin',
        image: './snape.jpg',
        link: './Severus Snape.html',
    },
    {
        name: 'Rubeus Hagrid',
        house: 'House: Gryffindor',
        image: './hagrid.png',
        link: './Rubeus Hagrid.html',
    },
    {
        name: 'Neville Longbottom',
        house: 'House: Gryffindor',
        image: './neville.jpg',
        link: './Neville Longbottom.html',
    },
    {
        name: 'Luna Lovegood',
        house: 'House: Ravenclaw',
        image: './luna.jpg',
        link: './Luna Lovegood.html',
    },
    {
        name: 'Ginny Weasley',
        house: 'House: Gryffindor',
        image: './ginny.jpg',
        link: './Ginny Weasley.html',
    },
    {
        name: 'Sirius Black',
        house: 'House: Gryffindor',
        image: './sirius.jpg',
        link: './Sirius Black.html',
    },
    {
        name: 'Remus Lupin',
        house: 'House: Gryffindor',
        image: './lupin.jpg',
        link: './Remus Lupin.html',
    },
    {
        name: 'Arthur Weasley',
        house: 'House: Gryffindor',
        image: './arthur.jpg',
        link: './Arthur Weasley.html',
    },
    {
        name: 'Bellatrix Lestrange',
        house: 'House: Slytherin',
        image: './bellatrix.jpg',
        link: './Bellatrix Lestrange.html',
    },
    {
        name: 'Lord Voldemort',
        house: 'House: Slytherin',
        image: './voldemort.jpg',
        link: './Lord Voldemort.html',
    },
    {
        name: 'Horace Slughorn',
        house: 'House: Slytherin',
        image: './slughorn.jpg',
        link: './Horace Slughorn.html',
    },
    {
        name: 'Kingsley Shacklebolt',
        house: 'House: Unknown',
        image: './kingsley.jpg',
        link: './Kingsley Shacklebolt.html',
    },
    {
        name: 'Dolores Umbridge',
        house: 'House: Slytherin',
        image: './umbridge.jpg',
        link: './Dolores Umbridge.html',
    },
    {
        name: 'Lucius Malfoy',
        house: 'House: Slytherin',
        image: './lucius.jpg',
        link: './Lucius Malfoy.html',
    },
    {
        name: 'Vincent Crabbe',
        house: 'House: Slytherin',
        image: './crabbe.jpg',
        link: './Vincent Crabbe.html',
    },
    {
        name: 'Gregory Goyle',
        house: 'House: Slytherin',
        image: './goyle.jpg',
        link: './Gregory Goyle.html',
    },
    {
        name: 'Mrs Norris',
        house: 'House: Unknown',
        image: './norris.jpg',
        link: './Mrs Norris.html',
    },
    {
        name: 'Argus Filch',
        house: 'House: Unknown',
        image: './filch.jpg',
        link: './Argus Filch.html',
    },
]

//TẠO FUNCTION IN RA DANH SÁCH MỚI CHO SEARCH
const main_content= document.querySelector('.Main-content');
const object= (array,info) => {
    for(let i=0; i<array.length; i++){
        const character= array[i];

        const character_info_list= document.createElement('div');
        character_info_list.classList.add('Character-info');
        info.appendChild(character_info_list);
        character_info_list.innerHTML=`
            <div>
                <div class= 'Name'>${character.name}</div>
                <div class= 'House'>${character.house}</div>
            </div>
            <a href="${character.link}"><img src='${character.image}' alt=""></a>
        `; 
    }

    //STYLE CHO 1 PHẦN TỬ TRONG DANH SÁCH
    const count= document.querySelector('.Main-content').childElementCount;
    const main_content= document.querySelector('.Main-content');
    const character_info= document.querySelector('.Character-info');
    const name= document.querySelector('.Name');
    const house= document.querySelector('.House');
    const image= document.querySelector('img');
    if(count===1){
        //STYLE BOX
        character_info.style.width= '700px';
        character_info.style.height= '200px';
        character_info.style.display= 'flex';
        character_info.style.justifyContent= 'space-around';
        character_info.style.alignItems= 'center';
        character_info.style.color= 'red';
        
        //STYLE TEXT
        name.style.fontSize= '40px';
        house.style.fontSize= '30px';

        //STYLE IMG
        image.style.height= '150px';
        image.style.width= 'auto';
    }

    //STYLE CHO 2 PHẦN TỬ
    if(count===2){
        main_content.style.width= '950px';
        main_content.style.display= 'flex';
        main_content.style.justifyContent= 'space-between';
    }
}

//TẠO EVENT TÌM KIẾM CHỌN LỌC
const input= document.querySelector('.Search');
input.addEventListener('input',(event) => {
    //XÓA DANH SÁCH CŨ
    let lastchild= main_content.lastElementChild;
    while(lastchild){
        main_content.removeChild(lastchild);
        lastchild= main_content.lastElementChild;
    }
    
    //LẤY GIÁ TRỊ INPUT VÀ SO SÁNH VỚI DANH SÁCH CŨ
    const value= event.target.value.toLowerCase();
    const temp= [...characters].filter((character) => character.name.toLowerCase().includes(value)||character.house.toLowerCase().includes(value));
    
    //IN RA DANH SÁCH MỚI
    object(temp,main_content)
})