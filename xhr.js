import axios from 'axios';
import apiURLs from "./config/ApiUrls";


export default async function request(httpOptions) {
    const token =  localStorage.getItem("oauthToken");
    console.log(token,"___________________________");

    // console.log('Token:', token);
 httpOptions.url = apiURLs.base_url + httpOptions.url;

    httpOptions.headers = {
        'Content-Type': "application/json",
        Accept: 'application/json',
        // 'Accept-Encoding': 'gzip',
        // ...httpOptions.headers
    };
    //  if (httpOptions.secure) httpOptions.headers.Authorization = `bearer ${token}`
 if (httpOptions.secure) httpOptions.headers.Authorization = `Bearer ${token}`
    const handleRequestErrors = (errorResponse) => {
        const error = errorResponse?.data;
        if (error?.statusCode === 401 && error?.message === 'Invalid or missing JWT token') {
            // store.dispatch(saveAuthenticationUserLogout());
            // window.location.replace('/')
        }
    }

    return axios(httpOptions)
        .then(response => response)
        .catch(error => {
            handleRequestErrors(error.response)
            throw error.response;
        });
}
