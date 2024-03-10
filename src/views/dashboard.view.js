import { toggleMenu } from "../helper/menu";

class DashboardView {
    constructor() {
        document.querySelector('.sidebar__menu--item:first-child').classList.add('active');
        toggleMenu()
    }
}

export default DashboardView