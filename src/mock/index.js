import Mock from 'mockjs'


Mock.mock(/\/login/, 'post', (options) => {
    console.log(options, '//////////////////////')
    // 账号 密码的正确性？ 
    const { body } = options
    // console.log(typeof body)
    const { name, password} = JSON.parse(body)
    console.log(name, password, '???')
    if (name === 'admin' && password === '123456') {
        return {
            code: 0,
            status: 200,
            token: 'xxvcvdvcvcvdfdfddddddd',
            msg: 'hello'
        }
    } else {
        return {
            code: 1,
            status: 400,
            msg: '账号或密码有误， 请重新登录'
        }
        
    }
    
})

Mock.mock(/\/second/, 'get', (options) => {
    console.log(options);
    return {
        code: 200,
        msg: 'ok'
    }
})
