function homepage(){
    gsap.set(".slidesm",{scale:3})
var t1=gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:2
    },
})
t1.to(".video-div",{
    '--clip':"0%",
    ease:Power2,
    duration:2
},'a')
.to(".slidesm",{
    scale:1,
    ease:Power2
},'a')
.to(".lft",{
    xPercent:-10,
    stagger:0.03,
    ease:Power4
},'b')
.to(".rgt",{
    xPercent:10,
    stagger:0.03,
    ease:Power4
},'b')

}
function realpage(){
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",  
            end:"bottom bottom",
            //:true,
            scrub:1
        },
        xPercent:-200,
        ease:Power4
    })
}
function teams(){
    document.querySelectorAll(".listitem")
.forEach(function(ele){
    ele.addEventListener("mousemove",function(dets){
        gsap.to(this.querySelector(".picture"),{
            x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),
            opacity:1,
            ease:Power4,
            duration:.5
        })
        gsap.to(this.querySelector(".bluelayer"),{
            opacity:1,
            ease:Power4,
            duration:.5
        })
    })
    ele.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".picture"),{
            opacity:0,
            ease:Power4,
            duration:.5
        })
        gsap.to(this.querySelector(".bluelayer"),{
            opacity:0,
            ease:Power4,
            duration:.5
        })
    })
})

}
function part1Animation(){
    var clutter="";
    document.querySelector(".text-para")
    .textContent.split("")
    .forEach(function(e){
        clutter += `<span>${e}</span>`;
    })
    document.querySelector(".text-para").innerHTML=clutter;
    gsap.set(".text-para span",{opacity:.1})
    gsap.to(".text-para span",{
        scrollTrigger:{
            trigger:".part1",
            start:"top 60%",
            end:"bottom 90%",
            scrub:.2
        },
        opacity:1,
        stagger:0.03,
        ease:Power4
    })
    
}
function part2Animation(){
    var clutter="";
    document.querySelector(".text-para2")
    .textContent.split("")
    .forEach(function(e){
        clutter += `<span>${e}</span>`;
    })
    document.querySelector(".text-para2").innerHTML=clutter;
    gsap.set(".text-para2 span",{opacity:.1})
    gsap.to(".text-para2 span",{
        scrollTrigger:{
            trigger:".part2",
            start:"top 60%",
            end:"bottom 90%",
            scrub:.2
        },
        opacity:1,
        stagger:0.03,
        ease:Power4
    })
    
}
function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
function capsuleAnimation(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1,
            //:true,
        },
        y:0,
        ease:Power4})
}
function bodyColor(){
    document.querySelectorAll(".section")
.forEach
(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 50%",
        end:"bottom 50%",
        //:true,
        onEnter:function(){
            document.body.setAttribute("theme",e.dataset.color);
        },
        onEnterBack:function(){
            document.body.setAttribute("theme",e.dataset.color);
        }
    })
})
}
function btn(){
    gsap.to(".inline-block",{
        triggers: {
            trigger:".masker",
            start:"top 0",
            bottom:"bottom 0",
            scrub:.2,
            markers:true
        },
        ease:Power4
    })
}
bodyColor();
loco();
homepage();
realpage();
teams();
part1Animation();
part2Animation();
capsuleAnimation();
btn();
