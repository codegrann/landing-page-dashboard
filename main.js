let display=document.querySelector('#display');
let sub=document.querySelector("#sub");
let subb=document.querySelectorAll(".subb");

display.addEventListener('click', changeColor);

function changeColor(){
    display.style.backgroundColor='red';
    display.innerHTML=sub.innerHTML;
}

subb.forEach((el)=>{
    el.addEventListener('click', ()=>{
        display.innerHTML=el.innerHTML;
    });
})