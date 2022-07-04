const count=document.getElementById('count');
const add=document.getElementById('add');
const sub=document.getElementById('sub');
const reset=document.getElementById('reset');

add.addEventListener('click',() =>{
    count.innerHTML++;
    applyColors()
})
sub.addEventListener('click',() =>{
    count.innerHTML--;
    applyColors()
})
reset.addEventListener('click',() =>{
    count.innerHTML=0;
    applyColors()
})
function applyColors(){
    if (count.innerHTML>0) {
        count.style.color="rgb(51, 118, 232)";
    }
    else if(count.innerHTML<0){
        count.style.color="orange";
    }
    else{
        count.style.color="black";
    }
}