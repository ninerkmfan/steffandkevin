class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeModal = document.querySelector(".modal__close")
        this.events()
    }

    events() {

        //listen for close modal button being clicked
        this.closeModal.addEventListener("click", () => this.closeTheModal())

        //pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal()
            
        }
    }
    
    openTheModal() {
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="modal">
        <div class="modal__inner">
        <h2 class="section-title section-title--less-margin">Get in <strong>Touch</strong></h2>
        <div class="wrapper wrapper--narrow">
        <p class="modal__description">Got a question? Want to drop us a quick line? <a href="mailto:wedding@steffandkevin.com">Send us a message</a></p>
        <div class="modal__close">X</div>
        `)
    }
}

export default Modal