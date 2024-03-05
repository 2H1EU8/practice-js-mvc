class AllProductsView {
    constructor() {
        document.querySelector('.sidebar__menu--item:nth-child(2)').classList.add('active');
        this.ProductAll();
    }

    ProductAll(){
        const btn = document.querySelector('.btn');
        btn?.addEventListener('click', () => {
            window.location.pathname = 'product/detail';
        });
    }
}

export default AllProductsView