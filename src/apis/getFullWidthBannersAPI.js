import axios from "axios";

const getFullWidthBannersAPI = async () => {
    return axios.get(`http://localhost:8080/api/client/getHomeSliders`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getFullWidthBannersAPI;