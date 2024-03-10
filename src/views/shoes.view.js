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
import changePassword from './pages/changePassword';
import LoginController from '../controller/login.controller';
import LoginView from './login.view';
import LoginService from '../services/login.service';
import RegisterController from '../controller/register.controller';
import RegisterView from './register.view';
import RegisterService from '../services/register.service';
import ProductsController from '../controller/products.controller';
import ProductsView from './products.view';
import ProductsService from '../services/products.service';
import DetailController from '../controller/detail.controller';
import DetailView from './detail.view';
import DetailService from '../services/detail.service';
import ChangePasswordController from '../controller/change-password.controller';
import ChangePasswordView from './change-password.view';
import ChangePasswordService from '../services/change-password.service';
import AllProductsView from './all-product.view';
import DashboardView from './dashboard.view';

class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');
    this.router = new Router()
    this.initRoute()
    // add toast container
    this.toastList = document.createElement('ul');
    this.toastList.classList.add('notifications');
    this.app.appendChild(this.toastList);
    
    let { controller, service, view } = this.router.findRoute()
    if (view) view = new view()
    if (service) service = new service()
    if (controller) controller = new controller(view, service)
  }

  initRoute() {
    this.router.define('/register', registerForm(), RegisterController, RegisterView, RegisterService)
    this.router.define('/login', loginForm(), LoginController, LoginView, LoginService)
    this.router.define('/product/table', this.ProductTable(), ProductsController, ProductsView, ProductsService)
    this.router.define('/product/detail', this.ProductDetail(), DetailController, DetailView, DetailService, ['productId'])
    this.router.define('/change-password', changePassword(), ChangePasswordController, ChangePasswordView, ChangePasswordService)
    this.router.define('/dashboard', this.Dashboard(), DashboardView)
    this.router.define('/product/all', this.ProductAll(), AllProductsView)
    
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
    bodyFooter.innerHTML += Pagination();
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
    dashboardContent.innerText= 'Coming soon';
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
    addButton.style.cursor = 'pointer';
    dashboardContent.appendChild(addButton);
    bodyFooter.appendChild(dashboardContent);
    bodyFooter.innerHTML += Footer();
    return container;
  }
}

export default ShoesView
