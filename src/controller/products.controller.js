class ProductsController {
    constructor(view, service) {
        this.view = view
        this.service = service

        this.showTable()
        this.searchShoes()

        this.view.logout()
    }

    async showTable() {
        this.view.showTable(await this.service.getAllShoes(), this.service.updateStatus)
    }

    searchShoes() {
        this.view.handleSearch(this.service.searchShoes)
    }
}

export default ProductsController