gsap.to('.crousel_content',{
    delay:1,
    duration:2,
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:".Journey_crousel",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }

})