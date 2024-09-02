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

const facebookDraft = async (platform) => {
    return request({
        method: 'get',
        url: `${apiUrls.draftfb}/${platform}`,
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

 const twitterPost=async(payload)=>{
    return request({
        method:'post',
        url:`${apiUrls.twitterPost}`,
        data:payload,
        secure:true
       })
 }

 const postContactInfo=async(payload)=>{
    return request({
        method:'post',
        url:`${apiUrls.postContact}`,
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

const draftDelete=async(id)=>{
    return request({
        method:'delete',
        url:`${apiUrls.draftCreate}/${id}`,
    
        secure:true
    })
}
// Creating an object with the service functions
const postService = {
    facebookGet,saveToDraft,facebookDraft,publishLinkedin,getUser,postContactInfo,draftDelete,twitterPost
};

// Exporting postService object for use in other modules
export { postService };
