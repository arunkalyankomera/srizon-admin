import axios from "axios";

const getuserslistAPI = async () => {
    return axios.get('http://localhost:8080/api/admin/getUserlist')
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getuserslistAPI;