let content=document.querySelector('#content');
let sub=document.querySelector("#sub");

content.addEventListener('click', changeColor);

function changeColor(){
    content.style.backgroundColor='red';
    content.innerHTML=sub;
}