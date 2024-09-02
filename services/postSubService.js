import request from "../xhr"; // Ensure this path is correct
import apiUrls from "../config/ApiUrls"; // Ensure this path is correct

// Function to fetch Facebook data
const postsubGet = async () => {
    return request({
        method: 'get',
        url: `${apiUrls.postSub}`,
        secure:false
    });
};

const postPlatformCategory = async (platform,category) => {
    return request({
        method: 'get',
        url: `${apiUrls.postCategory}/${platform}/categories/${category}/data`,
        secure:true
    });
};

const postSubService={postsubGet,postPlatformCategory}

export {postSubService};