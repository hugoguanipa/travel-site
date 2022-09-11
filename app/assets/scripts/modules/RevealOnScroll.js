import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const imgzoom1 = document.querySelectorAll(".feature-item");

imgzoom1.forEach((element) => {

  	gsap.set(element, { scale:0 });
  
    gsap.to(element, {
        duration: 2.3,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none pause none"
        }
    });
})

const imgzoom = document.querySelectorAll(".testimonial");

imgzoom.forEach((element) => {

  	gsap.set(element, { scale:0 });
  
    gsap.to(element, {
        duration: 2.3,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play none pause none"
        }
    });
})