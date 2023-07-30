const mysql = require('mysql'); //引入安装的mysql插件
const config = require('../config/mySqlConfig.js'); //引入抛出的mysql配置

//创建线程池 把配置给到线程池去登录我的mysql软件
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

const allServices = {
    query: function(sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    // console.log('ccccccc');
                    reject(err);
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err);
                        } else {
                            // console.log('hhhh');
                            resolve(rows);
                        }   
                        connection.release();
                    })
                }
            })  
        })
    }
}
// 查询用户是否存在
const findUser = (username) => {
    let _sql = `select * from users where username="${username}";`
    // console.log(_sql, '///////');
    return allServices.query(_sql);
}
// 注册
const userRegister = (values) => {
    let _sql = `insert into users set username=?,password=?;`
    // console.log(_sql);
    return allServices.query(_sql, values);
}

const userLogin = (username, password) => {
    let _sql = `SELECT * FROM users WHERE username="${username}" and password="${password}";`
    return allServices.query(_sql)
}

const cartFind = (id) => {
    let _sql = `select * from cart where id = "${id}";`
    // console.log(_sql,'[[[[[[[');
    return allServices.query(_sql);
}

const cartAdd = (values) => {
    let _sql = `insert into cart set id = ?,username=?,name=?,
    price=?,max=?,min=?,shop=?,address=?,guarantee=?,imgUrl=?,num=?;`
    // console.log('ddddddd');
    return allServices.query(_sql, values);
}

const numAdd = (id) => {
    let _sql = `update cart set num=num+1 where id="${id}";`
    return allServices.query(_sql)
}

const cartList = (username) => {
    let _sql = `select * from cart where username="${username}";`
    return allServices.query(_sql)  
}

const cartModify = (num, id) => {
    let _sql = `update cart set num="${num}" where id="${id}"`;
    return allServices.query(_sql)
}

const cartDelete = (id) => {
    let _sql = `delete from cart where id="${id}";`
    return allServices.query(_sql)
}

const addressAdd = (values) => {
    let _sql = `insert into address set id?,username=?,name=?,tel=?,address=?,isDefault=?;`
    return allServices.query(_sql, values);
}

const addressList = (username) => {
    let _sql = `select * from address where username="${username}";`
    return allServices.query(_sql)
}

const defaultModify = (isDefault, id) => {
    let _sql = `update address set isDefault="${isDefault}" where id="${id}";`
    return allServices.query(_sql)
}

module.exports = {
    findUser,
    userRegister,
    userLogin,
    cartFind,
    cartAdd,
    numAdd,
    cartList,
    cartModify,
    cartDelete,
    addressAdd,
    addressList,
    defaultModify
}