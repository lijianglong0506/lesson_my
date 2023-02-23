import { createStore } from 'vuex' // 创建一个状态仓库
// 统一管理的好处是 维护成本降低，管理更科学

export default createStore({
    // 组件可以使用它 读
    state:{
        count:1 // 中央状态 count    主键私有状态  data()  reactive  ref  props传参  computed
    },
    // 管理规定，状态不能直接修改， 修改走一定的流程    像公司的 会计 管理公司的金钱一样   写
    // 修改   确保一定是这样修改的， 不会随意改
    mutations:{ 
        // store mutations
        add(state) {  // 默认第一个参数就是state对象
            state.count++; // 只有此处才能修改状态
        }
    }
})