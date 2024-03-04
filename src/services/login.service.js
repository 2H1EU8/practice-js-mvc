import config from "../api/config";
import { createToast } from "../views/modules/handleToast";

class LoginService {
    constructor() {
    }

    async getUser(email, password) {
        try {
            const res = await config.get('/users', {
                params: {
                    email,
                    password
                }
            });

            const data = res.data[0];

            if (data && data.email === email && data.password === password) {
                return {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    id: data.id,
                    notifications: data.notifications
                };
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            createToast('error', 'Error fetching user');
        }
    }
}

export default LoginService