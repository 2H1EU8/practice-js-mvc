import registerForm from './components/registerForm';
import loginForm from './components/loginForm';
import Header from './layouts/header';
import BookItem from './modules/ShoesItem';
import SideBar from './layouts/sidebar';
import Footer from './layouts/footer';
import Pagination from './modules/Pagination';
import ShoesTable from './modules/ShoesTable';



class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');

    // this.app.innerHTML += registerForm();
    // this.app.innerHTML += loginForm();

    this.container = document.createElement('div');
    this.container.className = 'container';

    this.main = document.createElement('main');
    this.main.className = 'main';
    

    this.app.appendChild(this.container);
    this.container.innerHTML += SideBar();
    this.container.appendChild(this.main);
    this.main.innerHTML += Header() + Footer();
    this.main.appendChild(this.bodyFooter);
  
  }
}

export default ShoesView