# vue3 商城管理后台  Admin

- mall 移动商城
    用户用的   移动端
    vant  + asiox + 全家桶
    PDD pv 10亿+  uv 用户数

- mall admin
    同事用（小编，运营）
    上架商品
    上架活动
    swiper 幻灯片的内容
    权限
    同事

- 全家桶开发理解
 npm i vue-router@next pinia element-plus axios stylus js-md5 loadash

-  vite 是如何启动项目的    npm run dev 运行的流程
    1. package.json script 脚本
         dev development  开发阶段   src/
         build 开发完了， 打包上线做准备   dist/
    2. vite 工程化最快的工程化的工具
         index.html  首页  3000  http-server
         启动起来
    3. src/main.js 作为单点入口文件  引入
         vite 特别之处， script type="module" js 支持es6 的模块化   默认的js是不支持模块化的
        实例化 vue  app
        并把App 组件挂载到 #app 节点上
    4. 基于模块依赖 代码组织起来

- redirect 细节
    1. locahost:3000/
          HTTP 请求响应式的
          - index.html 已发送到浏览器并显示 
          - App.vue 已挂载
    2. router
         /   redirect   跳转
         302     /introduce


    header     +    main.content
    导航栏 nav App.vue + router-view    页面级别组件

- 路由守卫
    1. 鉴权
        to + token + login meta
    2. document.title + name 匹配的标题 utils config.js
    3. layout 布局状态  login  不需要侧边栏 
    4. 用户直接从非/ 进入, 链接点进去 分享点击
         state.currentPath = to.path

- 表单组件
    el-form 
    el-form-item
    el-input
    容器组件
    子组件也叫做受控组件 
    - label-position
    - :rules="state.relus" 数据类型要是数组 在el-form 容器组件中统一设置
        数组 每个input 的输入规则
    - :model="state.formData" 表单就为收集数据而来
        {
            "username":,
            "password":
        }
        el-form-item prop="username"
              el-input v-model="state.formData.username"
    - ref="loginForm"
       el-form 组件也是对象    跟DOM里面的id一样  唯一地获取你在组件树中声明地这个组件对象 调用这个对象上的方法
    



