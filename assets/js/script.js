(()=>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");
    


    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        bodyScrollingToggle();
        fadeOutEffect();
    }

    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(()=>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }

    document.addEventListener("click", (e)=> {
        if (e.target.classList.contains('link-item')) {

            if (e.target.hash !=="") {
                e.preventDefault();

                const hash = e.target.hash;

                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");

                navMenu.querySelector(".active").classList.add("outer-shadow", "hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active", "inner-shadow");

                if (navMenu.classList.contains("open")) {
                    
                    e.target.classList.add("active", "inner-shadow");
                    e.target.classList.add("outer-shadow", "hover-in-shadow");

                    hideNavMenu();
                }else {
                    let navItem = navMenu.querySelectorAll(".link-item");
                    navItem.forEach((item)=>{
                        if (hash === item.hash) {
                            item.classList.add("active", "inner-shadow");
                            item.classList.remove("outer-shadow", "hover-in-shadow");
                        }
                    })

                    fadeOutEffect();
                }

                window.location.hash = hash;

            }
            
        }
    })
    
})();

// COUNTER

$(document).ready(function(){
    $(".counting").counterUp({
        delay:10,
        time:1200
    });
});


// SCROLL-UP

$(document).ready(function(){
    $(window).scroll(function(){

        if (this.scrollY > 500) {
            $(".scroll-up-btn").addClass("show");
        }else {
            $(".scroll-up-btn").removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop:0});
        $("html").css("scrollBehavior","auto");
    });
});


// SIGN-IN

function validate() {
    var box1 = document.getElementById("name");

    if (box1.value=="") {
        document.getElementById("para-1").innerHTML ="! please fill out this field.";
        box1.focus();
        return false;
    }

    var box2 = document.getElementById("mail");

    if (box2.value=="") {
        document.getElementById("para-2").innerHTML ="! please fill out this field.";
        box2.focus();
        return false;
    }

    var box3 = document.getElementById("pass");

    if (box3.value=="") {
        document.getElementById("para-3").innerHTML ="! please fill out this field.";
        box3.focus();
        return false;
    }
    if (box3.value.length<=5) {
        document.getElementById("para-3").innerHTML ="! Enter the maxmium 6 character";
        box3.focus();
        return false;
    }
    // if (box3.value != box1.value) {
    //     document.getElementById("para-3").innerHTML ="! Enter the name";
    //     box3.focus();
    //     return false;
    // }

    var box4 = document.getElementById("c-pass");

    if (box4.value=="") {
        document.getElementById("para-4").innerHTML ="! please fill out this field.";
        box4.focus();
        return false;
    }
    if (box4.value != box3.value) {
        document.getElementById("para-4").innerHTML ="! Enter same password";
        box4.focus();
        return false;
    }

    alert("Welcome"+" "+box1.value);
}


// ACCORDIAN

const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }else {
            accordionItemBody.style.maxHeight = 0;

        }

    });
})


// PRELOADER

