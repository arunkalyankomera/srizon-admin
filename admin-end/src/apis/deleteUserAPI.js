import axios from "axios";

const deleteUserApI = async (id) => {
    return axios.get(`http://localhost:8080/api/admin/deleteUser/${id}`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default deleteUserApI;