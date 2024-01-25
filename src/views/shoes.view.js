import registerForm from './components/registerForm';
import loginForm from './components/loginForm';
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

class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');
    this.router = new Router()
    this.initRoute()
    this.validate()
  }

  initRoute() {
    this.router.define('/register', registerForm())
    this.router.define('/login', loginForm())
    this.router.define('/product/table', this.ProductTable())
    this.router.define('/product/detail', this.ProductDetail())
    
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
  
  validate() {
    this.form = document.querySelector('form')
    this.form.addEventListener('submit', e => {
      e.preventDefault()
      const firstName = document.getElementById('firstName').value
      const lastName = document.getElementById('lastName').value
      const password = document.getElementById('password').value
      const email = document.getElementById('email').value

      const accepts = document.querySelectorAll('input[type]:checked')
      if (accepts?.length < 2) {
        alert('You need to agree policy')
        return
      }

      validateForm(firstName, lastName, password, email)
    })
  }
}


export default ShoesView