gsap.to(".fade-up",{

    opacity:1,

    y:0,

    stagger:.25,

    duration:1,

    ease:"power3.out",

    delay:2.3

});

gsap.from(".loader-logo",{
    y:-20,
    opacity:0,
    duration:.8
});

gsap.from(".loader-content h1",{
    y:20,
    opacity:0,
    duration:.8,
    delay:.3
});

gsap.from(".loader-content p",{
    opacity:0,
    duration:.8,
    delay:.6
});