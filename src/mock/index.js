import Mock from 'mockjs'
import swiperList from './data/swiperList.js'
import products from './data/products.js'
import categoryNavSide from './data/categoryNavSide.js'
import categoryContent from './data/categoryContent.js'
import shopping from './data/shopping.js'
Mock.setup({
    timeout: '50-1000'  // 随机的延迟时间，模式请求耗时
})
// 轮播图 url 请求里面才有  地址：/swiperList
// 拦截App中的xhr  请求  正则 匹配路径 
Mock.mock(/\/swiperList/, 'get', () => {
    return{
        code: 0,
        result: swiperList
    }
}) 

Mock.mock(/\/products/, 'get', () => {
    return{
        code: 0,
        result: products
    }
})

Mock.mock(/\/categoryNavSide/, 'get', () => {
    return{
        code: 0,
        result: categoryNavSide
    }
})

Mock.mock(/\/categoryContent/, 'get', () => {
    return{
        code: 0,
        result: categoryContent
    }
})

Mock.mock(/\/shopping/, 'get', () => {
    return{
        code: 0,
        result: shopping
    }
})
