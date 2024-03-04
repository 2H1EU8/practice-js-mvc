import config from "../api/config";
import { createToast } from "../views/modules/handleToast";
import User from "../model/user.model";

class RegisterService {
    constructor() {

    }

    async addUser(firstName, lastName, email, password) {
        try {
            const newUser =  new User({firstName, lastName, email, password});
            console.log(newUser);
            config.post('/users', newUser);
        } catch (error) {
            createToast('error', 'Error fetching user');
            console.log(error);
        }
    }
}

export default RegisterService