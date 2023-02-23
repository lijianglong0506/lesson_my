import { createStore } from 'vuex'
// 离开组件 设计状态

const state = {
    count: 0  // 共享状态
}
const mutations = {
    // 修改， 而且是同步的， 简单   规则 有利于状态的正确
    // 怎么修改它才科学？
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}
const actions = {  // 通过store 上面的  dispatch
    // count 0 -> 1 commit('increment')
    // -> action -> commit('increment')   异步或者一些其他操作
    // 适合做各种各样的事 干事的
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                commit('increment')
                resolve()
            },1000)
        })
    }
}
const getters = { // computed 计算属性
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'    // even 表示偶数   odd 表示奇数
}

// 状态仓库设计好
// 没有搞modules 分模块

// 单一状态树 root
export default createStore({
    state,
    getters,
    actions,
    mutations
})