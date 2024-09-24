import request from "../xhr"; // Ensure this path is correct
import apiUrls from "../config/ApiUrls"; // Ensure this path is correct

// Function to fetch Facebook data
const uploadImage = async (payload) => {
    return request({
        method: 'post',
        url: `${apiUrls.uploadImage}`,
        secure: true,
        data:payload,
        files:true
    });
};

const ImageService={
  uploadImage
    }
    
    export {ImageService}