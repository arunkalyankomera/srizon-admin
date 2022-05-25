import axios from "axios";

const getSmallBannersAPI = async () => {
    return axios.get(`http://localhost:8080/api/client/getWrappBanners`)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default getSmallBannersAPI;