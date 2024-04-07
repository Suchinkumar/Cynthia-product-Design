

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var timeout;
function circlechaptakaro(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){
        this.clearTimeout(timeout);
        xscale=gsap.utils.clamp(0.7,1.3,dets.clientX-xprev);
        yscale=gsap.utils.clamp(0.7,1.3,dets.clientY-yprev);
          xprev=dets.clientX;
          yprev=dets.clientY;
         circlemousefollower(xscale,yscale);
         timeout=setTimeout(function(){
            document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },500);
    });
    
  
}
circlechaptakaro();
function circlemousefollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
circlemousefollower();

function firstPageAnimation(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut
    })
   .to(".boundingelem",{
    y:'0',
    // opacity:1
    duration:2,
    ease:Expo.easeInOut,
    stagger:0.2,
    delay:-1
   })
   .from("#page1_bottom",{
    y:'-10',
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut,
    delay:-1
       })
}

firstPageAnimation();



document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

