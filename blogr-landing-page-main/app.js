const dropListBtn = document.querySelectorAll(".drop-down-list .list-cont");
const dropMenu = document.querySelector(".menu-cont");
const dropList = document.querySelectorAll(".list-cont .drop");
const whiteArrows = document.querySelectorAll(".white-arrow");
const redArrows = document.querySelectorAll(".red-arrow");
const burger = document.querySelector(".hamburger");
const closeBurger = document.querySelector(".close");




//MENU TOGGLE
for (let i = 0; i < dropListBtn.length ; i++){
    dropListBtn[i].addEventListener("click", ()=>{
        dropList[i].classList.toggle("clicked");
        whiteArrows[i].classList.toggle("arrow");
        redArrows[i].classList.toggle("arrow2");
    })
}


//HAMBURGER 
burger.addEventListener('click', function(){
    dropMenu.classList.add("open");
    burger.classList.add("close");
    closeBurger.classList.add("open");
})

closeBurger.addEventListener('click', function(){
    dropMenu.classList.remove("open");
    burger.classList.remove("close");
    closeBurger.classList.remove("open");
})
