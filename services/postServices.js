// Importing necessary modules
import request from "../xhr"; // Ensure this path is correct
import apiUrls from "../config/ApiUrls"; // Ensure this path is correct

// Function to fetch Facebook data
const facebookGet = async () => {
    return request({
        method: 'get',
        url: `${apiUrls.getfb}`,
        secure: true
    });
};

const saveToDraft=async (payload)=>{
   return request({
    method:'post',
    url:`${apiUrls.draftCreate}`,
    data:payload,
    secure:true
   })
}

const facebookDraft = async () => {
    return request({
        method: 'get',
        url: `${apiUrls.draftfb}`,
        secure: true
    });
};

const publishLinkedin=async (payload)=>{
    return request({
     method:'post',
     url:`${apiUrls.publishlinkedin}`,
     data:payload,
     secure:true
    })
 }

 const getUser = async () => {
    return request({
        method: 'get',
        url: `${apiUrls.getUsers}`,
        secure: true
    });
};
// Creating an object with the service functions
const postService = {
    facebookGet,saveToDraft,facebookDraft,publishLinkedin,getUser
};

// Exporting postService object for use in other modules
export { postService };
