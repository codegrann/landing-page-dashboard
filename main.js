let content=document.querySelector('#content');
let sub=document.querySelector("#sub");
let subb=document.querySelectorAll(".subb");

content.addEventListener('click', changeColor);

console.log(subb)

function changeColor(){
    content.style.backgroundColor='red';
    content.innerHTML=sub.innerHTML;
}

subb.forEach((el)=>{
    el.addEventListener('click', ()=>{
        content.innerHTML=el.innerHTML;
    });
})