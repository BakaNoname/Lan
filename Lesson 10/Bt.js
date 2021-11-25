const search=[
    {
        image: './Your image here 2.png',
        tag: 'TOURISM',
        description: 'Hello',
        date: 'June 6, 2019',
        author: 'Rickie Baroch',
    },
    {
        image: './Your image here 2.png',
        tag: 'SPORT',
        description: 'Hi',
        date: 'June 6, 2019',
        author: 'Rickie Baroch',
    },
    {
        image: './Your image here 2.png',
        tag: 'FASHION',
        description: 'Good morning',
        date: 'June 6, 2019',
        author: 'Rickie Baroch',
    },
    {
        image: './Your image here 2.png',
        tag: 'CLOTHES',
        description: 'Good bye',
        date: 'June 6, 2019',
        author: 'Rickie Baroch',
    },
    {
        image: './Your image here 2.png',
        tag: 'CLOTHES',
        description: 'Good night',
        date: 'June 6, 2019',
        author: 'Rickie Baroch',
    },
    {
        image: './Your image here 2.png',
        tag: 'FASHION',
        description: 'Bye',
        date: 'June 6, 2019',
        author: 'Rickie Baroch',
    }
]

const right_container= document.querySelector('.Post1');
//KHỞI TẠO FUNCTION IN DANH SÁCH RA HTML
const object = (array,container) => {
    for (let index = 0; index < array.length; index++) {
        const post = array[index];
    
        const postcontainer = document.createElement("div");
        postcontainer.classList.add("Post-container");
        container.appendChild(postcontainer);
        postcontainer.innerHTML = `
          <img src="${post.image}" alt="bg" />
          <div class="Post-tag">${post.tag}</div>
          <div class="Post-des">${post.description}</div>
          <div class="Post-date">${post.date} By ${post.author}</div>
        `;
      }
};
object(search,right_container)

//TẠO EVENT TÌM KIẾM CHỌN LỌC
const input= document.querySelector('.Search');
input.addEventListener('input',(event)=>{
    //XÓA DANH SÁCH CŨ
    let searchLastchild= right_container.lastElementChild;
    while(searchLastchild){
        right_container.removeChild(searchLastchild);
        searchLastchild= right_container.lastElementChild;
    }
    //LẤY GIÁ TRỊ INPUT VÀ SO SÁNH VỚI DANH SÁCH
    const value= event.target.value;
    console.log(value);
    const temp= [...search].filter((post)=>post.tag.includes(value));
    //IN RA DANH SÁCH MỚI
    object(temp,right_container)
})