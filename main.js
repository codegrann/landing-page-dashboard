let display=document.querySelector('#display');
let content=document.querySelectorAll(".content");
let titles=document.querySelectorAll(".title");
let subTitles=document.querySelectorAll(".subTitle");

// display.addEventListener('click', changeColor);
// function changeColor(){
    // display.style.backgroundColor='red';
// }

// toggle the dropdown to show
titles.forEach((title)=>{
    title.addEventListener('click', ()=>{
        let dropdown=title.nextElementSibling;
        if(dropdown.style.display=='block'){
            dropdown.style.display='none';
        } else{
            dropdown.style.display='block';
        }
    })
})


// show each section's content
subTitles.forEach((subTitle)=>{
    subTitle.addEventListener('click', ()=>{
        // console.log(subTitle.nextElementSibling)
        display.innerHTML=subTitle.nextElementSibling.textContent;
    })
})