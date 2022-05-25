import axios from "axios";

const getProductlistAPI = async () => {
    return axios.get('http://localhost:8080/api/admin/getProductlist')
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getProductlistAPI;