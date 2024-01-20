import registerForm from './components/registerForm';
import loginForm from './components/loginForm';
import Header from './layouts/header';
import SideBar from './layouts/sidebar';
import Footer from './layouts/footer';
import Pagination from './modules/Pagination';
import ShoesTable from './modules/ShoesTable';
import HeaderTable from './modules/HeaderTable';
import TableBody from './modules/TableRow';




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
    this.bodyFooter.innerHTML += HeaderTable();
    this.bodyFooter.innerHTML += ShoesTable();
    this.bodyFooter.innerHTML += Pagination();
    this.bodyFooter.innerHTML += Footer();
    
    // this.app.innerHTML += BookItem({id:1, title: "abc",author: "hi", category: "da", status: true,  number: 12,  price: 23});
  }
}

export default ShoesView