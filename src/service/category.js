import axios from './config.js'

export const getCategoryNavSide = () => {
    return axios.get('/categoryNavSide')
}
export const getCategoryContent = () => {
    return axios.get('/categoryContent')
}