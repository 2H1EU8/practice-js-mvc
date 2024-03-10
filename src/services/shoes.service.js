import config from "../api/config";
import { createToast } from "../views/modules/handleToast";

class ShoesService{
    constructor(){
        this.user = [];
        this.shoes = []
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