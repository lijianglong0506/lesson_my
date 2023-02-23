- 组件 路由 数据管理   vue  router vuex
        vuex 解决了  跨层级  跨页面  共享状态  比如login
        前端工作 分成两种
        1. 组件开发（切页面  实习生）
        2. 数据管理（项目越来越大的时候） 从组件本地（没什么状态 computed）
        抽离到中央（leader）
- 项目架构store
- vuex 共享状态来到本地组件的流程
     1. vuex 提供的useStore hooks api 拿到 store
     2. store.state.count  state 是状态对象 读操作
     3. 作为computed 计算属性的返回值， 作为当前的状态
            依赖于store.state.count  订阅了count
     4. 全局的$store 对象 

- vuex 数据流转过程
     1. 本地组件 data() reactive/ref  将被收到中央  方便共享和管理
     2. 使用 useStore() + computed 计算属性 状态从中央来到地方
     3. 本地不可以直接修改state, store.commit('add') 提交一个mutation 名字一定要在mutations 里 管理好数据 
        

    store   state   mutation集合