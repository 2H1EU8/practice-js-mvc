import registerForm from './pages/registerForm';
import loginForm from './pages/loginForm';
import Header from './layouts/header';
import SideBar from './layouts/sidebar';
import Footer from './layouts/footer';
import Pagination from './modules/Pagination';
import ShoesTable from './modules/ShoesTable';
import ProductHeader from './modules/ProductHeader';
import TableBody from './modules/TableRow';
import ProductDetail from './modules/ProductDetail';
import ProductHeader_2 from './modules/ProductHeader_2';
import Router from '../utils/routes';
import { validateForm } from '../helper/validateForm';
import changePassword from './pages/changePassword';

class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');
    this.router = new Router()
    this.initRoute()
  }

  initRoute() {
    this.router.define('/register', registerForm())
    this.router.define('/login', loginForm())
    this.router.define('/product/table', this.ProductTable())
    this.router.define('/product/detail', this.ProductDetail())
    this.router.define('/change-password', changePassword())
    
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
    bodyFooter.innerHTML   += ProductDetail();
    bodyFooter.innerHTML += Footer();
    
    return container
  }
}


export default ShoesView