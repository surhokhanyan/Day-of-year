let month = document.querySelector("#main input:nth-child(1)");
let days = document.querySelector("#main input:nth-child(2)");
let year = document.querySelector("#main input:nth-child(3)");
let inpAll = document.querySelectorAll("#main input");
let btn = document.querySelector("#main button");
let text = document.querySelector("#main p");

const dayOfYear = date =>
    Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

dayOfYear(new Date());
btn.addEventListener("click", ()=>{
    text.innerHTML = dayOfYear(new Date(`${year.value}-${month.value}-${days.value}`));
    inpAll.forEach(item =>{
        item.value = null;
    })
});
