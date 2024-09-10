import request from "../xhr"; // Ensure this path is correct
import apiUrls from "../config/ApiUrls"; // Ensure this path is correct

// Function to fetch Facebook data
const schedulePost = async (payload) => {
    return request({
        method: 'post',
        url: `${apiUrls.schedulePosts}`,
        secure: true,
        data:payload

    });
};

const deleteSchedulePost = async (id) => {
    return request({
        method: 'delete',
        url: `${apiUrls.deleteSPost}/${id}`,
        secure: true,
    

    });
};

const getScheduledPosts = async () => {
    return request({
        method: 'get',
        url: `${apiUrls.getAllSchedule}`,
        secure: true,
        

    });
};

const scheduleService = {
    schedulePost,getScheduledPosts,deleteSchedulePost
};

// Exporting postService object for use in other modules
export { scheduleService };
