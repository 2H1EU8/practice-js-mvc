import config from "../api/config";
import { createToast } from "../views/modules/handleToast";

class DetailService {
    constructor() {
    }

    async getShoes(id) {
        try {
            const { data } = await config.get(`/shoes`, { params: { id } });
            return data[0];
        } catch (error) {
            createToast('error', 'Error fetching shoes by id');
        }
    }

    async addShoes(shoes){
        try {
            await config.post('/shoes', shoes);
        } catch (error) {
            createToast('error', 'Error adding shoes');
            console.log(error);
        }
    }

    async addNoti(id, notifications){
        try {
            config.patch(`/users/${id}`, {notifications})
        } catch (error) {
            createToast('error', 'Error fetching user to notification');
        }
    }

    async deleteShoes(id){
        try {
            await config.delete(`/shoes/${id}`,{
                params:{
                    id
                }
            })
        } catch(error){
            createToast('error', 'Error deleting shoes')
        }
    }

    async updateShoes(id, newShoes){
        try {
            await config.patch(`/shoes/${id}`, newShoes)
        } catch (error) {
            createToast('error', 'Error updating shoes');
            console.log(error);
        }
    }
}

export default DetailService