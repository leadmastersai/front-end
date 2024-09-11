import request from "../xhr"; // Ensure this path is correct
import apiUrls from "../config/ApiUrls"; // Ensure this path is correct

// Function to fetch Facebook data
const twitterDisconnect = async () => {
    return request({
        method: 'post',
        url: `${apiUrls.twitterD}`,
        secure: true
    });
};

const linkedinDisconnect = async () => {
    return request({
        method: 'post',
        url: `${apiUrls.linkedinD}`,
        secure: true
    });
};

const googleDisconnect = async () => {
    return request({
        method: 'post',
        url: `${apiUrls.googleD}`,
        secure: true
    });
};

const disconnectService={
twitterDisconnect,googleDisconnect,linkedinDisconnect
}

export {disconnectService}