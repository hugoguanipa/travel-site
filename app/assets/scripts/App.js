import css from '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import LazyLoading from './modules/LazyLoading'

new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"));
new RevealOnScroll(document.querySelectorAll(".testimonial"));
new StickyHeader();
new LazyLoading();
let modal


// Modal Call
document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
             }).catch(() => console.log("There was a problem"))
        } else {
            modal.openTheModal()
        }
    })
});

if (module.hot) {
    module.hot.accept()
}
