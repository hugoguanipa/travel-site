import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header")
        this.pageSections = document.querySelectorAll(".page-section")
        this.events()
    }

    events() {
        ScrollTrigger.create({
            start: 'top -70',
            end: 99999,
            toggleClass: {className: 'site-header--scrolled', targets: '.site-header '}
          });
    }
    
}

export default StickyHeader