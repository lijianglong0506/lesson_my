const userService = require('../services/user');

exports.handleRegister = async (ctx) => {
    const { username, password } = ctx.request.body;
    console.log(username, password )
    if (!username || !password) {
        ctx.body = {
            code: '80001',
            msg: '用户名或密码不能为空'
        }
        return
    }
    try {
        // console.log('///////////ddddd')
        let findres = await userService.findUser(username);
        if (findres.length) {
            ctx.body = {
                code: '80003',
                data: 'error',
                msg: '用户已存在'
            }
        } else {
           const res = await userService.userRegister([username, password]);
           console.log(res, '???||') 
           if (res.affectedRows !== 0) {
                ctx.body = {
                    code: '80000',
                    data: 'success',
                    msg: '注册成功'
                }
            } else {
                ctx.body = {
                    code: '80002',
                    data: 'error',
                    msg: '注册失败'
                }
            }
        }
    } catch(err) {
        ctx.body = {
            code: '80002',
            data: err,
            msg: '服务器错误'
        }
    }
}

exports.handleLogin = async (ctx) => {
    const { username, password } = ctx.request.body
    try {
    const result = await userService.userLogin(username, password)
    // console.log(result);
    if (result.length) {
      let data = {
        id: result[0].id,
        username: result[0].username
      }
      ctx.body = {
        code: '80000',
        data: data,
        msg: '登陆成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '账号或密码错误'
      }
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
}

