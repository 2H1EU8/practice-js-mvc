class ProductsController {
    constructor(view, service) {
        this.view = view
        this.service = service

        this.showTable()
        this.searchShoes()
    }

    async showTable() {
        this.view.showTable(await this.service.getAllShoes())
    }

    searchShoes() {
        this.view.handleSearch(this.service.searchShoes)
    }
}

export default ProductsController