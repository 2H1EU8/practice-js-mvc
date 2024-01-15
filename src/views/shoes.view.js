import registerForm from './components/registerForm';
import loginForm from './components/loginForm';

class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');
    this.app.innerHTML += registerForm();
    this.app.innerHTML += loginForm();
  }
}

export default ShoesView