// webpack 工程化的配置文件
const path = require('path')  // 引入path node 内置路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader/dist/index')
// html + js 结合起来
// console.log(__dirname,  path.resolve(__dirname, './src/main.js'))
module.exports = { // commonjs 模块化输出 
    entry: path.resolve(__dirname, './src/main.js'), // 异步的，IO操作 所以用resolve
    // 工艺流程
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // 尾部匹配，以.vue结尾
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '手搭 vue 开发环境'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        port:8888,
    }
    //App.vue  .js 
    // tempalte
    // script     .vue 格式   -> vite webpack 工程化  .vue -> .js 
    // style 
}