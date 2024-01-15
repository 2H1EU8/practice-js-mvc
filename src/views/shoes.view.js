import registerForm from './components/registerForm';


class ShoesView {
  constructor() {
    this.app = document.querySelector('#root');
    this.app.innerHTML += registerForm();
  }
}

export default ShoesView