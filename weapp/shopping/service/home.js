import request from './network.js'   //request 请求的统一函数
// 向外提供了getMultiData方法
export const getMultiData = () => {
  //如何  返回一个什么东西， 上面由then 方法
  //Promise 解决js 异步的良药
  return request({
    url:"/home/multidata",
  })
}

export const getProduct = (type,page) => {
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}