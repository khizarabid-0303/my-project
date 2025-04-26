// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });
let moving_dev = document.querySelector(".moving-dev")
let WWD = document.querySelector('.WWD')

WWD.addEventListener('mouseenter',function(){
  gsap.to(moving_dev,{
    scale:1,
    opacity:1
  })
})

WWD.addEventListener('mouseleave', function () {
  gsap.to(moving_dev, {
    scale:0,
    opacity:0
  });
});


WWD.addEventListener('mousemove',function(dets){
  gsap.to(moving_dev,{
    left:dets.x-30,
    top:dets.y-20
  })
})



gsap.from(".solution , .my-1",{
    opacity:0,
    x: -30,
    delay: 0.5,
    stagger: 0.3
})

gsap.from(".text, .res-text ",{
    opacity: 0,
    y: -30,
    delay: 0.5,
    stagger: 0.1
})

gsap.from(".bttn-box",{
    opacity: 0,
    x: 30,
    delay: 0.5,
})

document.querySelectorAll(".moving-box-hover").forEach((box) => {
    // Initially hide the element
    gsap.set(box, { opacity: 0, y: 20 });
  
    // Animate in on hover
    box.addEventListener("mouseenter", () => {
      gsap.to(box, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.2)" // Adds a slight overshoot effect
      });
    });
  
    // Animate out when hover ends
    box.addEventListener("mouseleave", () => {
      gsap.to(box, {
        opacity: 0,
        y: 20,
        duration: 0.3
      });
    });
  });

  gsap.from('.WWD-img1',{
    scale: 0.8,
    opacity: 0,
    duration: .5,
    delay: 1.5
  })

  // ============================= Responsive navbar=================================
 
let menu = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let tl = gsap.timeline();

tl.from(".res-nav", {
  top: -200,
  duration: 0.6,
  display: flex,
});

tl.from(".res-text", {
  x: 150,
  duration: 0.7,
  stagger: 0.3,
  opacity: 0,
});

tl.from(".side-nav i", {
  x: 150,
  duration: 0.7,
  stagger: 0.3,
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
    tl.reverse();
  });