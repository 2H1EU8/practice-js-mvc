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




class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');

    // this.app.innerHTML += registerForm();
    // this.app.innerHTML += loginForm();

    this.container = document.createElement('div');
    this.container.className = 'container';

    this.main = document.createElement('main');
    this.main.className = 'main';

    this.bodyFooter = document.createElement('div');
    this.bodyFooter.className = 'body__footer';

    this.app.appendChild(this.container);
    this.container.innerHTML += SideBar();
    this.container.appendChild(this.main);
    this.main.innerHTML += Header();;
    this.main.appendChild(this.bodyFooter);
    // this.bodyFooter.innerHTML += ProductHeader();
    // this.bodyFooter.innerHTML += ShoesTable();
    // this.bodyFooter.innerHTML += Pagination();
    // this.bodyFooter.innerHTML += Footer();
    
    this.bodyFooter.innerHTML += ProductHeader_2();
    this.bodyFooter.innerHTML += ProductDetail()
    this.bodyFooter.innerHTML += Footer();
    
  }
}

export default ShoesView