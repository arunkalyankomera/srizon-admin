import axios from "axios";

const getProductDetailsAPI = async (id) => {
    return axios.get(`http://localhost:8080/api/client/getProductDetails/${id}`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getProductDetailsAPI;