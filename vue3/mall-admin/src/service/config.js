import axios from 'axios'

axios.defaults.baseURL = 'http://backend-api-02.newbee.ltd/manage-api/v1/'


axios.interceptors.response.use(res => {
    
    return res.data
})
export default axios
