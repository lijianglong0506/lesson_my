import axios from './config.js'

export const getSwiperList = () => {
    return axios.get('./swiperList')
}
export const getProducts = () => {
    return axios.get('/products')
}

