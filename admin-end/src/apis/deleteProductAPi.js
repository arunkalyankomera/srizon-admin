import axios from "axios";

const deleteProductAPI = async (id) => {
    return axios.get(`http://localhost:8080/api/admin/deleteProduct/${id}`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default deleteProductAPI;