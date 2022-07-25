import axios from 'axios';

const URL = "http://localhost:8081/u";

class UserUtil {

    getU(){
        return axios.get(URL);
    }

    getAll(){
        return axios.get(URL + "/all");
    }

    createU(u){
        return axios.post(URL, u);
    }

    getUById(uId){
        return axios.get(URL + '?id=' + uId);
    }

    updateU(u){
        return axios.put(URL , u);
    }

    deleteU(uId){
        return axios.delete(URL + '?id=' + uId);
    }
}

export default new UserUtil()