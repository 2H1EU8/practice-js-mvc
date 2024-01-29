import config from "../api/config";

class UserService{
    constructor(){
        this.user =[];
    }

    async getUser(email, password) {
        try {
            const res = await config.get('/users', {
                params: {
                    email, password
                }
            })
            const data = res.data[0]
            console.log(data);
            console.log(data.email, data.password);
            return data.email === email && password === password
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

    async addUser(firstName, lastName, email, password) {
        try {
            config.post('/users', {firstName, lastName, email, password})
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }
}

export default UserService