import ShoesView from './views/shoes.view';
import UserController from './controller/user.controller';
import UserService from './services/user.service';


new UserController(new ShoesView(), new UserService())