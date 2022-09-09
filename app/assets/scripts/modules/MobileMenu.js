class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__mobile-menu")
        this.navContent = document.querySelector(".site-header__nav-content")
        this.ctaContent = document.querySelector("a.btn")
        this.siteHeader = document.querySelector(".site-header")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.navContent.classList.toggle("sm-db")
        this.ctaContent.classList.toggle("sm-db")
        this.siteHeader.classList.toggle("site-header__expanded")
        this.menuIcon.classList.toggle("active")
    }
}

export default MobileMenu;