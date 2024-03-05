import config from "../api/config";
import { createToast } from "../views/modules/handleToast";

class ChangePasswordService {
    constructor() {

    }
    async changePassword(firstName,lastName, password, email, id){
        try{
            config.patch(`/users/${id}`, {firstName, lastName, password, email})
        }catch(err){
            createToast('error', 'Error fetching password again');
        }
    }
}

export default ChangePasswordService