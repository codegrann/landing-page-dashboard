let content=document.querySelector('#content');

content.addEventListener('click', changeColor);

function changeColor(){
    content.style.backgroundColor='red';
}