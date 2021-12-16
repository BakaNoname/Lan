const colors=[
    {
        color:'black',
        value: 1, 
    },
    {
        color:'white',
        value: 2, 
    },
    {
        color:'red',
        value: 3, 
    },
    {
        color:'blue',
        value: 4, 
    },
    {
        color:'yellow',
        value: 5, 
    },
    {
        color:'green',
        value: 6, 
    },
]

const changed= document.getElementById('change-color');
const copy= document.querySelector('.action');
const body= document.querySelector('body');

//COPY MÃ MÀU
copy.addEventListener('click',() => {
    
})

//ĐỔI MÀU BACKGROUND
changed.addEventListener('change', () => {
    for(let i=0; i<colors.length; i++){
        if(changed.value==colors[i].value){
            body.style.backgroundColor= colors[i].color;
        }
    }
})