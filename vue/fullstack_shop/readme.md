# 全栈项目及 Vue 考点表达

- front + backend
    1. 前后端分离
    2. 前端使用 vue + vite 全家桶单页应用开发
    3. 后端用 node + mysql 提供接口

- 如何介绍 vue 项目架构
    - 使用 vite + vue 全家桶开发单页应用
        - vite 比 webpack 快，不需要全部打包，按需加载，转译，执行
            vite默认启用esm
        - composition api + setup 语法糖 将类式组件 函数化， hooks编程
            更好理解，更好复用，更好 tree-shaking
    - 移动商城使用 lib-flexible rem适配，css 模块化由 assets / main.css 组织了 css 的模块化
        (reset 样式组件 (1px) css 变量 )
        less 是 css 的一个预编译工具
    - 使用 better-scroll 实现移动端滚动 (性能，体验)
    - 使用 axios 封装 http 请求，拦截器，请求错误处理，请求 loading
    - 使用 less 做样式预编译，变量，mixin，嵌套等 css 曾强和模块化能力
    - 使用 lib-flexible rem 适配
    - 使用 vant ui 组件库，按需加载，减少打包体积
    - 使用 three.js 数据可视化，3D看商品，功能的亮点

- 功能细节
    - css 架构
        - css入口文件 main.css 模块化 base.css / theme.css .....
        - css 4 变量 维护更好
        - 移动端 IE 盒模型更好打理宽度
        - app.vue 全局样式，最外层容器水平方向不超出，垂直方向可以一直滚动，通用滑屏阅读模式
    - better-scroll 用法
        - 移动端优化滚动的必备组件，接近原生的 Android / ios
        - 横向/竖向
        - 滚动容器 ref 标记
        - nextTick 实例化，配置方向和容器
        - refresh 一下
    - 路由管理
        - history or hash
            原理
        - 路由的懒加载
            - 加快首页渲染，按需加载
        - useRouter useroute hooks 函数
            router 路由管理对象 跳转
            route 当前路由对象 params
        - 路由守卫
            登录校验跳转
            页面切换特效
    - 状态管理设计
        - 采用 pinia 更简单，函数化，性能更好
        - 分离式状态管理， 而不是全局的
        - pinia 语法老版本 类似于vuex
        - 步骤
            - defineStore pinia composition api
            - 第二个参数如果是对象，vuex 写法，如果是函数呢 setup 写法
    - Vant 组件库使用总结
        使用 van-pull-refresh 实现下拉刷新
    - axios
        - api / axios 统一配置 baseURL
            baseURL 开始的时候可能是 fastmock
            上线阶段切换成线上真实地址
        - 请求响应拦截
            request authorization token
            response 500 vant message
            成功 res.data 解开 data
    - 错误处理设计了 axios 前台错误信息显示/ node 错误处理中间件/ try catch 执行机制



- 组件化介绍
    - 项目封装了 Header / HomeHeader / Footer / AllTypes / GoodsList 等组件，页面由组件构成，而不是标签
        组件树 vue-devtool
    - 组件封装的指导思想是 封装 (隐藏细节，合作调用) 复用
    - UI 组件库 (Vant) 通用组件 (components) 路由组件(pages) 状态组件/无状态组件(函数式组件) 
        父子组件 共享组件 布局组件(Layout) Suspense 组件 Fragment 组件 Portal 组件

- 功能模块设计
    - 登录 注册
    - 搜索
        - 使用 Vant-swiper 垂直滚动搜索热词
        - 使用 lazyload 防抖搜索
        - 搜索记录 localStorage 存储和展示
        - 分成搜索和搜索结果展示页
        - mysql like 查询返回
        - 升级到 openai 接口查询
    - 首页幻灯片使用 vant-swipe
    - 详情页
        - useroute 解构查询参数 :id
        - axios 请求 获取 data
        - 后端是使用 goods.js 模拟的
        - 相似产品的推荐
        - van-action-bar 加入购物车等的底栏
    - 数据库功能
        - 封装 query 方法, sql 走 query 
            - mysql 数据库驱动
            - createPool 连接
            - pool.getConnection
            - query
                处理所有的 sql
                sql 传参的地方 用 ？占位 数组传递
                每条 sql 都去拼接 sql，处理不同的行为，不如封装
        - orm schema 封装 不用写 sql
    - 地址模块
        - 新增 修改 删除
        1. create table
        2. 基于 restful 添加 address 相应路由
        3. 完成 crud 接口开发,默认地址切换
        4. 前端路由及组件开发
        5. pinia useAddress 管理 address 状态
        6. 前后端联调，完成功能模块



- 项目特色
    - 代码风格良好，注意注释编写，提高代码可读性
    - register / login 页面采用 copilot 代码助理编写
        - copilot 分析出 ui 组件库为 Vant，template 一键生成
            略微改改字段， 双向绑定，样式就好
        - script copilot 自动完成 vue / axios / submit / router 业务
        - 开发者新角色 给 copilot 代码助理打辅助

- 项目难点
    - 数据可视化
      在我的项目中，尝试了 three.js 3D 可视化，了解核心概念，并结合 pinia watch，完成 3D 显示和数据分离的店铺显示。
        - three.js 3D
            - 对 web 3D /虚拟现实感兴趣， js 底层可以， 学一下就好
            - 利用 webGL 渲染 3D 图形
            - 利用 canvas 元素
            - camera scene renderer
            - 模型概念 由外部导入
            - 灯光
            - 形状(几何体) + 材质
            - watch + store
                数据分离

        - echart.js 2D
    - 购物车
        结合 pinia，将购物车数据存储到数据库，实现购物数量徽章，详情页添加到购物车，购物车列表，购物车数量调整，以及清空购物车完整功能
        - 购物车状态管理复杂
            - cartData 列表数据
            - result 选中的 id 数组
            - totalPrice 由 carData + result 决定 computed
            - 全选 watch result
            - 全选 -> 每个 checkbox 的选中
        - 购物车数据在后端维护 增删改   

- 项目做了哪些优化
    - vite 减少打包体积 tree-shaking 不用的代码不打包
    - 按需加载 Vant 组件库，减少打包体积
    - 路由的懒加载，按需加载，减少打包体积
        webpack splitChunks
    - iconfont 使用 CDN 加载，未来打包后的静态资源都会发布到 CDN 服务器 
    - 图片懒加载
        - 首页幻灯片
    - html5 语义化标签
        - nav 导航

- 考点
    - computed 和 watch 区别
        计算属性 返回值 pinia state -> setup computed -> ui {{}}
        watch 监听 没有返回值，监听一个或多个，执行复杂业务
        - 如果需要根据其他响应式数据进行复杂的计算，使用 computed。
        - 如果需要监听一个或多个特定的响应式数据的变化，并执行相应的操作，使用 watch
    - vuex 和 pinia 区别？
        状态管理的设计模式
        - vuex  全局共享状态
            state action mutation getters 
            module 
            dispatch commit 
        - vuex 过于复杂，函数式编程hooks 
            pinia 新时代的 vuex 
        - 分离的， vuex 是集中的，是树状的
            提供响应式的状态和修改的方法
    - v-if 和 v-show 的区别
        - v-if 条件渲染指令 动态的编译和渲染， false 不会在 DOM 中创建
        - v-show 切换指令 通过 CSS 的 display 属性来控制元素的显示
        - 性能开销
            频繁切换，v-show适合， 因为 v-if 会有重复的编译挂载
        - 初始渲染延迟
            v-if 比较适合在初始加载时有大量隐藏内容情况
            v-show 适合于需要快速显示的情况
        - v-if PC端登录模态框
        - v-show ajax 搜索列表建议
    - 工程化
        webpack entry output bundle.js
        - 懒加载
            bundle.js（小了） + chunk（n个，异步加载）
            optimization: {
                splitChunks: {
                    chunks: 'all'
                }
            }
    - es6 与项目结合
        - loaclStorage.setItem(), JSON.stringify()
            .getItem  JSON.parse()
        - 深拷贝
            大部分拷贝的都是 JSON 对象
            JSON.parse(JSON.stringify(obj))
            - 缺点 搞不了函数   循环引用
        - 搜索历史记录
            JSON 数组， 交给 new Set() 唯一

    - html5 功能介绍
        - 语义化标签 SEO 对搜索引擎友好
            section 区分
            article 重要
            layout header footer aside nav main
        - canvas video audio 功能标签
        - localStorage sessionStorage IndexDB 本地存储
        - web worker 多线程
        - history pushState popState 单页应用的能力
        - form 表单的支持
            input 的更多类型 number email tel range
            placeholder required 
        - websocket 实时聊天 双向 全双工通信 支持推送消息和实时更新
        - drag and drop 拖拽 github 代码拖拽上传
        - geolocation 地理定位 美团外卖
        - 摄像头和麦克风的支持 getUseMedia 
 

- vant 组件库使用小姐
    - van-swipe / van-swipe-item 轮播图
    - van-tabbar / van-tabbar-item 底栏
    - van-pull-refresh 下拉刷新
    - js toast close
    - van-nav-bar 来做 header 页面

- node 的实战与考点
    - MVC 路由对象
        - MVC
            - view model 不能直接通信
            - controller 作为中间层，通信
            - controller 负责接收用户的需求，调用model层的数据，返回给 view 层显示 (API), 完成用户的需求
        - 逻辑，参数校验交给 controllers 
        - 路由的设计
            - restful 一切皆资源
                名词 + 动词
            - 路由的功能
                - 中间件
                - require('koa-router')()
                - prefix
                    /api/v1 全局前缀
                    /users 模块前缀
            - node js 模块化是 commonjs
                - module.export = {}
                - require('')
                - export.xxx = xxx
                - module.exports = xxx
                es6 模块化
                 - export default xxx
                 - import xxx from ''
                 - export xxx
                 - import { xxx } from ''
    - 错误处理
        - 错误中间件 最后面
            500 403 404 401
        - try catch
            js 是单线程 文件处理 数据库操作等 catch 一下
        - 有些错误是不可避免的 自动重启