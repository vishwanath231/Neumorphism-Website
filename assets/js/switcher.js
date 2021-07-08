const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// scroll 

window.addEventListener("scroll",()=>{
    if (document.querySelector(".style-switcher").classList.contains("open")) {
       document.querySelector(".style-switcher").classList.remove("open");  
    }
})

// CHANGE THEME

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){
    localStorage.setItem("color",color);
    changeColor();
}

function changeColor(){
    alternateStyles.forEach((style)=>{
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.setAttribute("disabled","true");
        }
    })
}

if (localStorage.getItem("color") != null) {
    changeColor();
}


// LIGHT AND DARK

const dayNight  = document.querySelector(".day-night");

dayNight.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme","dark");
    }else {
        localStorage.setItem("theme","light");
    }

    updataIcon();
})

function themeMode(){
    if (localStorage.getItem("theme") !== null) {
        if (localStorage.getItem("theme") === "light") {
            document.body.classList.remove("dark");
        }else{
            document.body.classList.add("dark");
        }
    }
    updataIcon();
}

themeMode();

function updataIcon() {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
    }else {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");

    }
}

// REGISTER

const signSwitcherToggle = document.querySelector(".sign-switcher-toggler");

signSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".sign-switcher").classList.toggle("open");
})


// scroll 

window.addEventListener("scroll",()=>{
    if (document.querySelector(".sign-switcher").classList.contains("open")) {
       document.querySelector(".sign-switcher").classList.remove("open");  
    }
})
