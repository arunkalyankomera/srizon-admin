import axios from "axios";

const getCategorylistAPI = async () => {
    return axios.get('http://localhost:8080/api/client/getCategoryList')
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getCategorylistAPI;