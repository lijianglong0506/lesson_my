import axios from './config.js'

export const getShopping = () => {
    return axios.get('./shopping')
}