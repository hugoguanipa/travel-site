import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector(".site-header")
        this.pageSections = document.querySelectorAll(".page-section")
        this.linksActivation()
        this.events()
        
    }

    events() {
        ScrollTrigger.create({
            start: 'top -70',
            end: 99999,
            toggleClass: {className: 'site-header--scrolled', targets: '.site-header '}
          });
    }

    linksActivation() {
        let links = gsap.utils.toArray("nav a");
        links.forEach(a => {
          let element = document.querySelector(a.getAttribute("href")),
              linkST = ScrollTrigger.create({
                    trigger: element,
                    start: "top top"
                  });
          ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: self => self.isActive && setActive(a)
          });
          a.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
          });
        });
        
        function setActive(link) {
          links.forEach(el => el.classList.remove("active"));
          link.classList.add("active");
        }
    }
}

export default StickyHeader