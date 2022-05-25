import axios from "axios";

const deleteCategoryAPI = async (id) => {
    return axios.get(`http://localhost:8080/api/admin/deleteCategory/${id}`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default deleteCategoryAPI;