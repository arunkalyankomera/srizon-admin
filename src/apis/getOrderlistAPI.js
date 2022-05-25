import axios from "axios";

const getOrderlistAPI = async () => {
    return axios.get('http://localhost:8080/api/admin/getOrderlist')
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getOrderlistAPI;