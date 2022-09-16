import css from '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

new Modal()
let mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"));
new RevealOnScroll(document.querySelectorAll(".testimonial"));

let stickyHeader = new StickyHeader();




if (module.hot) {
    module.hot.accept()
}
