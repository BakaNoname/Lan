//BÀI 1
function allLongestStrings(inputArray) {
    const arr= inputArray;
    let longest= arr[0];
    let temp=[];
    for(let i=0; i<arr.length; i++){
        if(longest.length <= arr[i].length){
            longest= arr[i];
            temp.splice(0,0,longest);
            console.log(temp);
        }
    }
}

const input1=['quang','BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];
allLongestStrings(input1);

//BÀI 2
const input2=[
    {
        number: 1,
        weight: 60,
    },
    {
        number: 2,
        weight: 40,
    },
    {
        number: 3,
        weight: 55,
    },
    {
        number: 4,
        weight: 75,
    },
    {
        number: 5,
        weight: 64,
    },
    
];

function alternatingSums(a) {
    const arr= a;
    // let temp= [];
    let sumteam1= 0;
    let sumteam2= 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].number%2!==0){
            sumteam1 += arr[i].weight;
        }
        else{
            sumteam2 += arr[i].weight;
        }
        
    }
    let temp= [sumteam1,sumteam2];
    console.log(temp);
}

alternatingSums(input2);