let content=document.querySelector('#content');
let sub=document.querySelector("#sub");
let subb=document.querySelectorAll(".subb");

content.addEventListener('click', changeColor);

console.log(subb)

function changeColor(){
    content.style.backgroundColor='red';
    content.innerHTML=sub.innerHTML;
}
function adjust(){
    content.innerHTML=el;
}

subb.forEach((el)=>{
    el.addEventListener('click', adjust);
})