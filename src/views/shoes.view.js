import registerForm from './pages/registerForm';
import loginForm from './pages/loginForm';
import Header from './layouts/header';
import SideBar from './layouts/sidebar';
import Footer from './layouts/footer';
import Pagination from './modules/Pagination';
import ShoesTable from './modules/ShoesTable';
import ProductHeader from './modules/ProductHeader';
import ProductDetail from './modules/ProductDetail';
import ProductHeader_2 from './modules/ProductHeader_2';
import Router from '../routes';
import TableBody from './modules/TableRow';
import changePassword from './pages/changePassword';

class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');
    this.router = new Router()  
    this.initRoute()
    // add toast container
    this.toastList = document.createElement('ul');
    this.toastList.classList.add('notifications');
    this.app.appendChild(this.toastList);
  }

  initRoute() {
    this.router.define('/register', registerForm())
    this.router.define('/login', loginForm())
    this.router.define('/product/table', this.ProductTable())
    this.router.define('/product/detail', this.ProductDetail(), ['productId'])
    this.router.define('/change-password', changePassword())
    this.router.define('/dashboard', this.Dashboard())
    this.router.define('/product/all', this.ProductAll())
    
    this.router.listen()
  }

  ProductTable() {
    const container = document.createElement('div');
    container.className = 'container';

    const main = document.createElement('main');
    main.className = 'main';

    const bodyFooter = document.createElement('div');
    bodyFooter.className = 'body__footer';
    
    container.innerHTML += SideBar();
    container.appendChild(main);
    main.innerHTML += Header();
    main.appendChild(bodyFooter);
   
    bodyFooter.innerHTML += ProductHeader();
    bodyFooter.innerHTML += ShoesTable();
    bodyFooter.innerHTML += Pagination()  ;
    bodyFooter.innerHTML += Footer();
    
    return container
  }

  ProductDetail() {
    const container = document.createElement('div');
    container.className = 'container';

    const main = document.createElement('main');
    main.className = 'main';

    const bodyFooter = document.createElement('div');
    bodyFooter.className = 'body__footer';
    
    container.innerHTML += SideBar();
    container.appendChild(main);
    main.innerHTML += Header();
    main.appendChild(bodyFooter);
    
    bodyFooter.innerHTML += ProductHeader_2();
    bodyFooter.innerHTML += ProductDetail();
    bodyFooter.innerHTML += Footer();
    
    return container
  }

  Dashboard() {
    const container = document.createElement('div');
    container.className = 'container';

    const main = document.createElement('main');
    main.className = 'main';

    const bodyFooter = document.createElement('div');
    bodyFooter.className = 'body__footer';

    container.innerHTML += SideBar();
    container.appendChild(main);
    main.innerHTML += Header();
    main.appendChild(bodyFooter);

    const dashboardContent = document.createElement('div');
    dashboardContent.innerText= 'No have dashboard';
    bodyFooter.appendChild(dashboardContent);

    bodyFooter.innerHTML += Footer();

    return container;
  }

  ProductAll() {
    const container = document.createElement('div');
    container.className = 'container';

    const main = document.createElement('main');
    main.className = 'main';

    const bodyFooter = document.createElement('div');
    bodyFooter.className = 'body__footer';

    container.innerHTML += SideBar();
    container.appendChild(main);
    main.innerHTML += Header();
    main.appendChild(bodyFooter);

    const dashboardContent = document.createElement('div');
    const addButton = document.createElement('button');
    addButton.className = 'btn';
    addButton.textContent = 'Add new product';
    addButton.style.backgroundColor = '#4a69e2';
    addButton.style.color = '#ffffff';
    addButton.style.padding = '10px 20px';
    addButton.style.border = 'none';
    addButton.style.borderRadius = '5px';
    addButton.style.fontSize = '16px';
    addButton.style.fontWeight = '600';
    addButton.style.fontFamily = 'Open Sans, sans-serif';
    dashboardContent.appendChild(addButton);
    bodyFooter.appendChild(dashboardContent);
    bodyFooter.innerHTML += Footer();
    
    return container;
  }

  bindTable(shoes) {
    const table = document.querySelector('.table-content table')
    if (!table) return

    const tableBody = table.querySelector('tbody')
    if (shoes && shoes.length) {
      tableBody.innerHTML = TableBody(shoes)
    }
    else {
      tableBody.innerHTML = ''
      const row = document.createElement('tr')
      const cell = document.createElement('td')
      cell.setAttribute('colspan', '8')
      cell.setAttribute('align', 'center')
      cell.innerText = 'No row'
      row.appendChild(cell)
      tableBody.appendChild(row)
    }
  }
}


export default ShoesView
