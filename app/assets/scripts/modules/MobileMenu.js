class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.navItem1 = document.querySelector(".nav-item1")
        this.navItem2 = document.querySelector(".nav-item2")
        this.navItem3 = document.querySelector(".nav-item3")
        this.navItem4 = document.querySelector(".nav-item4")
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.siteHeader = document.querySelector(".site-header")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
        this.navItem1.addEventListener("click", () => this.closeTheMenu())
        this.navItem2.addEventListener("click", () => this.closeTheMenu())
        this.navItem3.addEventListener("click", () => this.closeTheMenu())
        this.navItem4.addEventListener("click", () => this.closeTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle("site-header__menu-content--is-visible")
        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    }

    closeTheMenu() {
        this.menuContent.classList.remove("site-header__menu-content--is-visible")
        this.siteHeader.classList.remove("site-header--is-expanded")
        this.menuIcon.classList.remove("site-header__menu-icon--close-x")
    }
}

export default MobileMenu