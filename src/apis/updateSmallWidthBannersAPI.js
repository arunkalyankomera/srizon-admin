import axios from "axios";

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

const updateSmallWidthBannersAPI = async (values) => {
    return axios.post(`http://localhost:8080/api/admin/updateSmallWidthBanners`,values,axiosConfig)
    .then((result)=>{
        return result;
    })
    .catch((error)=>{
        console.log(error);
        return error;
    })
}

export default updateSmallWidthBannersAPI;