import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

class LazyLoading {
    constructor () {
        this.imageClass = gsap.utils.toArray(".lazy")
        this.events()
    }

    events() {
      ScrollTrigger.config({ limitCallbacks: true });
      this.imageClass.forEach(image => {
        let newSRC = image.dataset.src,
        newImage = document.createElement("img"),
     
      loadImage = () => {
        newImage.onload = () => {
          newImage.onload = null; // avoid recursion
          newImage.src = image.src; // swap the src
          image.src = newSRC;
          // place the low-res version on TOP and then fade it out.
          gsap.set(newImage, {
            position: "absolute", 
            top: image.offsetTop, 
            left: image.offsetLeft, 
            width: image.offsetWidth, 
            height: image.offsetHeight
          });
          image.parentNode.appendChild(newImage);
          gsap.to(newImage, {
            opacity: 0, 
            onComplete: () => {
              newImage.parentNode.removeChild(newImage);
              image.removeAttribute("data-src"); // remove "data-src" attribute if image is loaded
            }
          });
          st && st.kill();
        }
        newImage.src = newSRC;
      }, 
          
      st = ScrollTrigger.create({
        trigger: image,
        start: "-50% bottom",
        onEnter: loadImage,
        onEnterBack: loadImage // make sure it works in either direction
      });
    });
    }

}

export default LazyLoading;
  





