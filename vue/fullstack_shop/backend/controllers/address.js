const userService = require('../services/user.js');

const add = async (ctx) => {
    let { id, username, name, tel, address, isDefault } = ctx.request.body
    console.log(id, username, name, tel, address, isDefault);
    try {
        await userService.addressAdd([id, username, name, tel, address, isDefault])
        if(res.affectedRows !== 0){
            ctx.body = {
                code:'80000',
                data:'success',
                msg:'添加成功'
            }
        } else{
            ctx.body = {
                code:'80004',
                data:'error',
                msg:'添加失败'
            }
        }
    }catch(err){    
        ctx.body = {
            code:'80002',
            data:err,
            msg:'服务器异常'
        }
    }
    
}
const list = async () => {
    const { username } = ctx.request.params;
    // console.log(username,'/////');
    try {
        const resault = await userService.addressList(username);
        // console.log(res);
        if(res.affectedRows !== 0){
            ctx.body = {
                code:'80000',
                data:'success',
                msg:'地址数据获取成功'
            }
        } else{
            ctx.body = {
                code:'80004',
                data:'error',
                msg:'去设置一个地址吧'
            }
        }
    }catch(err) {
        ctx.body = {
            code:'80002',
            data:err,
            msg:'服务器异常'
        }
    }
}
const search = () => {

}
const modifyAddressById = () => {

}
const removeAddress = () => {

}
module.exports = {
    add,
    list,
    search,
    modifyAddressById,
    removeAddress
} 