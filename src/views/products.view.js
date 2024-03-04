import TableBody from "./modules/TableRow";

class ProductsView {
    constructor() {
        this.itemsPerPage = 8
        this.updateURLParameter()
        this.bindNotification()
        document.querySelector('.sidebar__menu--item:last-child').classList.add('active');
    }

    bindTable(shoes) {
        const table = document.querySelector('.table-content table')
        if (!table) return

        const tableBody = table.querySelector('tbody')
        if (shoes && shoes.length) {
            tableBody.innerHTML = TableBody(shoes)
        } else {
            tableBody.innerHTML = ''
            const row = document.createElement('tr')
            const cell = document.createElement('td')
            cell.setAttribute('colspan', '8')
            cell.setAttribute('align', 'center')
            cell.innerText = 'No row'
            row.appendChild(cell)
            tableBody.appendChild(row)
        }

        const tableRows = document.querySelectorAll('.product-row');
        tableRows.forEach(row => {
            row.addEventListener('click', e => {
                const productId = e.target.closest('.product-row').id;
                const {target} = e
                if(target.closest('.stock-wrapper')){
                    e.stopPropagation();
                    this.switchStatus(productId, target)
                    return
                }

                if (target.closest('.product-checkbox')) return
                window.location.href = `/product/detail?productId=${productId}`;
            })
        })
    }

    async showTable(shoes) {
        this.allShoes = shoes
        this.updatePage()
        this.handlePagination()
    }

    getCurrentPageFromURL() {
        const params = new URLSearchParams(window.location.search);
        const currentPage = parseInt(params.get('currentPage')) || 1;
        return currentPage;
    }

    updateURLParameter(currentPage = 1) {
        const params = new URLSearchParams(window.location.search);
        params.set('currentPage', currentPage);
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
    }

    updatePage = (shoes) => {
        const currentPage = this.getCurrentPageFromURL()
        const startIndex = (currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        const shoesToShow = shoes ? shoes.slice(startIndex, endIndex) : this.allShoes.slice(startIndex, endIndex);
        this.bindTable(shoesToShow)
    };

    bindPaginationButtons = () => {
        const paginationButtons = document.querySelectorAll('.pagination-btn');
        let currentPage = this.getCurrentPageFromURL()
        paginationButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                const buttonText = button.innerText.toLowerCase();
                if (buttonText === 'next') {
                    const currentButton = [...paginationButtons].findIndex(btn => btn.id === 'current')
                    paginationButtons[currentButton + 1].id = 'current';
                    paginationButtons[currentButton].id = null;

                    if (currentPage < this.totalPages) {
                        currentPage++;
                    }
                } else {
                    paginationButtons.forEach(btn => {
                        if (btn.id === 'current') btn.removeAttribute('id');
                    })
                    button.id = 'current';
                    currentPage = parseInt(button.innerText);
                }
                this.updateURLParameter(currentPage);
                this.updatePage();
                this.toggleNextButtonVisibility(currentPage, this.totalPages);
            });
        });


    };

    toggleNextButtonVisibility = (currentPage, totalPages) => {
        const nextButton = document.getElementById('next');
        if (currentPage === totalPages) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'flex';
        }
    };

    async handlePagination() {
        let currentPage = this.getCurrentPageFromURL();
        this.totalPages = Math.ceil(this.allShoes.length / this.itemsPerPage);

        this.updatePage();
        this.bindPaginationButtons();
        this.toggleNextButtonVisibility(currentPage, this.totalPages);
    }

    switchStatus(productId, target, updateStatus) {
        const dot = target.querySelector('span')
        const status = target.querySelector('p')
        if(status.innerText === 'Sold out'){
            status.innerText = 'Stock';
            dot.className = 'stock';
            updateStatus(productId, true);
        } else{
            status.innerText = 'Sold out';
            dot.className = 'sold-out';
            updateStatus(productId, false);
        }
    }

    bindNotification(){
        const updateNoti = document.querySelector(".noti-list");
        const notifications = JSON.parse(localStorage.getItem('users')).notifications;
        const notiList = notifications.map(noti =>{
            return `<p class="noti-para">${noti}</p>`
        }).join('')
        updateNoti.innerHTML = notiList;
    }

    handleSearch(searchShoes) {
        const searchIcon = document.getElementById("searchIcon");
        const searchBoxLayout = document.querySelector(".header__search--input");
        const searchInput = document.getElementById("searchInput");

        searchIcon.addEventListener('click', () => {
            searchBoxLayout.classList.toggle('show');
        });

        const debounceSearch = this.debounce(async (event) =>{
                const searchTerm = event.target.value.trim();
                const data = await searchShoes(searchTerm);
                this.updatePage(data);
        }, 500);
        searchInput.addEventListener('input', debounceSearch);
    }

    debounce(func, delay) {
        let timeoutId;
        return function(...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }
}

export default ProductsView