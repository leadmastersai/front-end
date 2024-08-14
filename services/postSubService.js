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

const postSubService={postsubGet}

export {postSubService};