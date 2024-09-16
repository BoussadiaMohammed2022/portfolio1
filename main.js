const body = document.querySelector("body");
nav = document.querySelector("nav");
modeToggle = document.querySelector(".dark-light");
searchToggle = document.querySelector(".searchToggle");
bars = document.querySelector(".bars");
xmark = document.querySelector(".xmark");

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
}

//js code to toggle dark and light mode

modeToggle.addEventListener("click" , () =>{
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    //js code to user selected mode 
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode" , "light-mode");
    }else{
        localStorage.setItem("mode" , "dark-mode");
    }
});

//js code to toggle sidebar

bars.addEventListener("click" , () =>{
    nav.classList.add("active");
});

// js code to toggle close

body.addEventListener("click" , e =>{
    let clickedElm = e.target;
   if(!clickedElm.classList.contains("bars") && !clickedElm.classList.contains("bars")){
        nav.classList.remove("active");
   }
});







