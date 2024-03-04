import config from "../api/config";
import { createToast } from "../views/modules/handleToast";

class ShoesService{
    constructor(){
        this.user = [];
        this.shoes = []
    }

    async changePassword(firstName,lastName, password, email, id){
        try{
            config.patch(`/users/${id}`, {firstName, lastName, password, email})
        }catch(err){
            createToast('error', 'Error fetching password again');
        }
    }

    async updateStatus(id, status){
        try {
            await config.patch(`/shoes/${id}`, {status});
        } catch(err){
            createToast('error', 'Error updating status');
        }
    }
}

export default ShoesService