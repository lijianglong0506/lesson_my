import axios from './config.js'

export const login = (params) => {
    return axios.post('/addminUser/login',params)
}