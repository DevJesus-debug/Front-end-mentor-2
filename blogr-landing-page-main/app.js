const dropContainer = document.querySelector(".drop-down-list")
const dropListBtn = document.querySelectorAll(" .list-cont h4");
const dropMenu = document.querySelector(".menu-cont");
const dropList = document.querySelectorAll(".list-cont .drop");
const whiteArrows = document.querySelectorAll(".white-arrow");
const redArrows = document.querySelectorAll(".red-arrow");
const burger = document.querySelector(".hamburger");
const closeBurger = document.querySelector(".close");






//MENU TOGGLE
for (let i = 0; i < dropListBtn.length ; i++){
    dropListBtn[i].addEventListener("click", (e)=>{

        if(e.target === dropListBtn[0] || e.target === whiteArrows[0] || e.target === redArrows[0]){
            whiteArrows[i].classList.toggle("arrow");
            redArrows[i].classList.toggle("arrow2");
            whiteArrows[1].classList.remove("arrow");
            whiteArrows[2].classList.remove("arrow");
            redArrows[1].classList.remove("arrow2");
            redArrows[2].classList.remove("arrow2");
            dropList[0].classList.toggle("clicked")
            dropList[1].classList.remove("clicked")
            dropList[2].classList.remove("clicked")
        }

        

        
       

        if(e.target === dropListBtn[1] || e.target === whiteArrows[1] || e.target === redArrows[1]){
            whiteArrows[i].classList.toggle("arrow");
            redArrows[i].classList.toggle("arrow2");
            whiteArrows[0].classList.remove("arrow");
            whiteArrows[2].classList.remove("arrow");
            redArrows[0].classList.remove("arrow2");
            redArrows[2].classList.remove("arrow2");
            dropList[1].classList.toggle("clicked")
            dropList[0].classList.remove("clicked")
            dropList[2].classList.remove("clicked")
        }

        if(e.target === dropListBtn[2] || e.target === whiteArrows[2] || e.target === redArrows[2]){
            whiteArrows[i].classList.toggle("arrow");
            redArrows[i].classList.toggle("arrow2");
            whiteArrows[1].classList.remove("arrow");
            whiteArrows[0].classList.remove("arrow");
            redArrows[1].classList.remove("arrow2");
            redArrows[0].classList.remove("arrow2");
            dropList[2].classList.toggle("clicked")
            dropList[1].classList.remove("clicked")
            dropList[0].classList.remove("clicked")
        }

       

       

       
        
  
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
