import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


class RevealOnScroll {
    constructor(els) {
        this.itemsToReveal = els
        this.revealAll()
    }
    
    revealAll() {
        this.itemsToReveal.forEach((el) => {

            gsap.set(el, { opacity:0, scale: 1.1 });
        
            gsap.to(el, {
              duration: 1.8,
              scale:1,
              opacity: 1,
              ease: "circ",
              scrollTrigger: {
                  trigger: el,
                  start: "top bottom-=100",
                  end: "bottom top+=100",
                  toggleActions: "play none pause none"
                }
             });
      })
    }
}

export default RevealOnScroll;