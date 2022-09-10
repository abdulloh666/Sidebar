let sideBar = document.querySelector(".side-bar")
let btn = document.querySelector(".btn")
let body = document.querySelector("body")
let a = true
btn.addEventListener('click' , () => {
    a =! a
    if(a == true){
        sideBar.classList.toggle("side-bar-active-minus");
    }
    else{
        sideBar.classList.toggle("side-bar-active");      
    } 
})


