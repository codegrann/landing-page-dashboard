let display = document.querySelector("#display");
let content = document.querySelectorAll(".content");
let titles = document.querySelectorAll(".title");
let subTitles = document.querySelectorAll(".subTitle");

// display.addEventListener('click', changeColor);
// function changeColor(){
// display.style.backgroundColor='red';
// }

// toggle the dropdown to show
titles.forEach((title) => {
  title.addEventListener("click", () => {
    let dropdown = title.nextElementSibling;
    let isOpen = dropdown.style.display == "block";

    // hide unselected dropwons
    titles.forEach((nonSelectedTitle) => {
      let closedDropdown = nonSelectedTitle.nextElementSibling;
      if (closedDropdown != dropdown) {
        closedDropdown.style.display = "none";
      }
    });

    dropdown.style.display = isOpen ? "none" : "block";
  });
});

// show each section's content
subTitles.forEach((subTitle) => {
  subTitle.addEventListener("click", () => {
    display.innerHTML = subTitle.nextElementSibling.textContent;
  });
});
