# 组件通信必考题

- 组件树
    App.vue #root 挂载在根节点上

    父子组件  props + emit   父组件负责数据通信和管理
                            子组件负责展示
    兄弟组件 需要共享状态时 通过emit 由父组件来控制他们的共享
    跨层级组件  爷孙辈  传递麻烦  provide + inject
    页面级别组件 router-view 地址的切换 unmount mount 全局 localStorage、pinia、vuex
    无任何关系但要共享状态的组件

- vue 2.0 类式组件   老项目
      setup()  vue3.0  composition api  过渡阶段
      setup 语法糖  完全抛弃类式组件  全新
      统一编程风格


- props   父亲向孩子传递
- emit    孩子向父亲报告
- expose/ref    expose  向外暴露  + ref  父组件 去调用子组件属性和方法
- attrs   props之外  父组件向子组件传递的数据
- v-model 双向数据绑定
- localStorage
- vuex
- provide/inject