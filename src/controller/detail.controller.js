class DetailController {
    constructor(view, service) {
        this.view = view
        this.service = service

        this.loadSelectedProduct()
        this.addShoes()
        this.deleteShoes()
        this.updateShoes()

        this.view.cancelShoes()
        this.view.uploadImage()
    }
    
    loadSelectedProduct() {
        this.view.loadShoesSelected(this.service.getShoes)
    }

    addShoes() {
        this.view.bindAddShoes(this.service.addShoes, this.service.addNoti)
    }

    deleteShoes() {
        this.view.bindDeleteShoes(this.service.deleteShoes)
    }

    updateShoes() {
        this.view.updateShoes(this.service.updateShoes)
    }
}

export default DetailController
