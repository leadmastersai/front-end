import request from "../xhr"; // Ensure this path is correct
import apiUrls from "../config/ApiUrls"; // Ensure this path is correct

// Function to fetch Facebook data
const generateAiPosts = async (payload) => {
    return request({
        method: 'post',
        url: `${apiUrls.generateAiPost}`,
        secure: true,
        data:payload
    });
};

const AIService={
  generateAiPosts
    }
    
    export {AIService}