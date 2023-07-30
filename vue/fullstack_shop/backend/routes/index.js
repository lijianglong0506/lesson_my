const router = require('koa-router')();
const allTypeGoods = require('../data/allTypesGoods.js');
const goods = require('../data/goods.js');
const userService = require('../services/user.js');
const addressController = require('../controllers/address.js')

router.get('/type', async (ctx, next) => {
    ctx.body = {
        code: '80000',
        message: '获取商品数据成功',
        data: allTypeGoods
    }
})

router.post('/goodsFind/:title', async (ctx, next) => {
    const searchTitle = ctx.params.title;
    let result = []
    let result1 = []

    allTypeGoods.forEach((type, index) => {
        type.goods.forEach(goods => {
            if (goods.name.includes(searchTitle)) {
                result.push(goods)
                goods.typeId = index
            }
        })
        type.goods1.forEach(goods1 => {
            if (goods1.name.includes(searchTitle)) {
                result.push(goods1)
                goods1.typeId = index
            }
        })
    })

    result1 = result.slice(0, result.length / 2)
    result.splice(0, result.length / 2)
    ctx.body = {
        code: '80000',
        message: '获取商品数据成功',
        data: [result, result1]
    }
})

router.post('/productDetail/:typeId/:id', async (ctx, next) => {
    let { id: idx, typeId: typeidx } = ctx.params
    // console.log(idx, typeidx, '////')
    idx = parseInt(idx)
    typeidx = parseInt(typeidx);
    console.log(idx, typeidx);
    const product = goods.goodsList.find(item => item.id === idx)
    const product1 = goods.goodsList1.find(item => item.id === idx)
    const product2 = (allTypeGoods.find(item => item.id === typeidx)).goods.filter(items => items.id === idx)
    const product3 = (allTypeGoods.find(item => item.id === typeidx)).goods1.filter(items => items.id === idx)

    ctx.body = {
        code: '80000',
        message: '获取单条商品数据成功',
        data: product || product1 || product2[0] || product3[0]
    }
})

router.get('/goodsList', async (ctx, next) => {
    ctx.body = {
        code: '80000',
        message: '获取商品数据成功',
        data: goods
    }
})

router.post('/cartAdd', async (ctx, next) => {
    let { id, username, name, price,
        max, min, shop, address, guarantee, imgUrl, num } = ctx.request.body
    // console.log(id, username, '//////////////');
    try {
        // console.log('???????????????????????????')
        let findres = await userService.cartFind(id)
        // console.log(findres, '???????????????????????????')
        if (findres.length) {

            await userService.numAdd(id).then(res => {
                if (res.affectedRows !== 0) {
                    ctx.body = {
                        code: '80000',
                        data: 'success',
                        msg: '商品已在购物车'
                    }
                } else {
                    ctx.body = {
                        code: '80004',
                        data: 'error',
                        msg: '添加失败!'
                    }
                }
            })
        } else {
            await userService.cartAdd([id, username, name, price, max, min, shop,
                address, guarantee, imgUrl, num = min])
                .then(res => {
                    console.log('lllllllll');
                    if (res.affectedRows !== 0) {
                        ctx.body = {
                            code: '80000',
                            data: 'success',
                            msg: '添加成功!'
                        }
                    } else {
                        ctx.body = {
                            code: '80004',
                            data: 'error',
                            msg: '添加失败!'
                        }
                    }
                })
        }
    } catch (err) {
        ctx.body = {
            code: '80002',
            data: err,
            msg: '服务器异常'
        }
    }
})

router.post('/cartList', async (ctx, next) => {
    const { username } = ctx.request.body
    try {
        const result = await userService.cartList(username)
        // console.log(result);
        if (result.length) {
            ctx.body = {
                code: '80000',
                data: result,
                msg: '购物车数据获取成功'
            }
        } else {
            ctx.body = {
                code: '80004',
                data: 'null',
                msg: '购物车是空的，去逛逛吧'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '80002',
            data: error,
            msg: '服务器异常'
        }
    }
})

router.post('cartModify', async (ctx) => {
    console.log('ttt');
    const { num, id } = ctx.request.body;
    const res = await userService.cartModify(num, id)
    if (res.affectedRows !== 0) {
        // console.log('ddd');
        ctx.body = {
            code: '80000',
            data: 'success',
            msg: '修改成功！'
        }
    } else {
        ctx.body = {
            code: '80004',
            data: 'error',
            msg: '修改失败'
        }
    }
})

router.post('/cartDelete', async (ctx) => {
    const { id } = ctx.request.body;
    const res = await userService.cartDelete(id);
    if (res.affectedRows !== 0) {
        ctx.body = {
            code: '80000',
            data: 'success',
            msg: '删除成功'
        }
    } else {
        ctx.body = {
            code: '80004',
            data: 'error',
            msg: '删除失败'
        }
    }
})

router.get('/address/:username', addressController.list);
router.post('/address', addressController.add);
router.post('/address/search', addressController.search);
router.put('/address/:id', addressController.modifyAddressById);
router.delete('/address/:id', addressController.removeAddress);

module.exports = router