import axios from "axios";

const getOrderDetailsAPI = async (id) => {
    return axios.get(`http://localhost:8080/api/admin/getOrderDetails/${id}`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getOrderDetailsAPI;