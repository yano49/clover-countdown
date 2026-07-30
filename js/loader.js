window.addEventListener("load",()=>{

    gsap.to(".loading-progress",{

        width:"100%",

        duration:2,

        ease:"power2.inOut"

    });

    gsap.to("#loader",{

        opacity:0,

        delay:2.2,

        duration:1,

        onComplete(){

            document.getElementById("loader").style.display="none";

        }

    });

});

