let display=document.querySelector('#display');
let content=document.querySelectorAll(".content");
let titles=document.querySelectorAll(".title");
let subTitles=document.querySelectorAll(".subTitle");

display.addEventListener('click', changeColor);
console.log(subTitles.nextElementSibling)

function changeColor(){
    display.style.backgroundColor='red';
}

subTitles.forEach((subTitle)=>{
    subTitle.addEventListener('click', ()=>{
        // console.log(subTitle.nextElementSibling)
        display.innerHTML=subTitle.nextElementSibling.textContent;
    })
})

content.forEach((el)=>{
    el.addEventListener('click', ()=>{
        // display.innerHTML=el.innerHTML;
    });
})

titles.forEach((title)=>{
    title.addEventListener('click', ()=>{
        title.nextElementSibling.style.display='block';
        // title.nextElementSibling.classList.add('hide');
    })
})