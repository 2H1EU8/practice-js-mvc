import ShoesView from './views/shoes.view';
import ShoesController from './controller/shoes.controller';
import ShoesService from './services/shoes.service';


new ShoesController(new ShoesView(), new ShoesService())