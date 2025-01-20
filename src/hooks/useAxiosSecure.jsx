import axios from 'axios';

const axiosSecure = axios.create({
   baseURL: 'http://localhost:4000'
})
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {

        const token = localStorage.getItem('access-token')
        console.log("request stop by interceptor", token)
        config.headers.authorization = `Bearer ${localStorage.getItem('access-token')}`
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    //   response 
      axiosSecure.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        // Do something with response error
        const status = error.response.status;
        if(status === 401 || status === 403){
            // navigate 
            // logout
        }
        return Promise.reject(error);
      });

    return axiosSecure
};

export default useAxiosSecure;