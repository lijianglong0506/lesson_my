<template>
    <div class="login" v-if="state.switch == 'login' ? true : false">
        <div class="login_text">账号密码登录</div>
        <van-field 
            v-model="state.username" 
            @input="input"
            label="账号："
            required
            placeholder="请输入用户名" />
        <van-field 
            v-model="state.password" 
            label="密码："
            @input="input"
            required
            type="password" 
            placeholder="请输入密码" />
        <div class="login_register" @click="handle('register')">立即注册</div>
            <div class="login_button" :class="{ active :state.color }" @click="login">登录</div>
    </div>






    <div class="login" v-if="state.switch == 'register' ? true : false">
        <div class="login_text">账号密码注册</div>
        <van-field 
            v-model="state.username2" 
            @input="isInput"
            label="账号："
            required
            placeholder="请输入用户名" />
        <van-field 
            v-model="state.password2" 
            label="密码："
            @input="isInput"
            required
            type="password" 
            placeholder="请输入密码" />
        <van-field 
            @input="isInput"
            center clearable placeholder="输入验证码" 
            v-model="state.verify">
                <template #button>
                    <vue-img-verify ref="verifyRef"/>
                </template>
        </van-field>
        <div class="login_register" @click="handle('login')">已有帐号登录</div>
            <div class="login_button" :class="{ active :state.color }" @click="register">注册</div>
    </div>
</template>

<script setup>
import VueImgVerify from '@/views/Login/VueImgVerify.vue'
import { reactive, ref} from 'vue';
import { showFailToast } from 'vant';
import router from '../../router';
const state = reactive({
    username:'',
    password:'',
    username2:'',
    password2:'',
    color: false,
    switch:'login',
    verify:''

})
const verifyRef = ref(null)
const input = () =>{
    if(state.username !== '' && state.password !== ''){
        state.color = true
    }else{
        state.color = false
    }
}
const isInput = () =>{
    if(state.username2 !== '' && state.password2 !== '' && state.verify !== ''){
        state.color = true
    }else{
        state.color = false
    }
}
const handle = (e) => {
    state.switch = e
    state.color = false
    state.username = ''
    state.username2 = ''
    state.password = ''
    state.password2 = ''
}
const register = () => {
    state.imgCode = verifyRef.value.state.imgCode || ''
    if (state.verify.toLowerCase() != state.imgCode.toLowerCase()) {
        showFailToast('验证码错误')
        return
    } else {
        if (state.username2 !== '' && state.password2 !== '') {
            localStorage.setItem('username', state.username2)
            localStorage.setItem('password', state.password2)
        }
    }
}
const login = () => {
    if(state.username !== '' && state.password !== ''){
        if(state.username !== localStorage.getItem('username') || state.password !== localStorage.getItem('password')){
            showFailToast('用户名或密码有误')
        }else{
            router.push('/IsLogin')
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin.styl'
.login
    padding .2rem
    .login_text
        font-size 20px
    .login_register
        margin .2rem 0
        width 80px
        border 1px solid white
        font-weight bold
    .login_button
        fc()
        height 40px
        width 100%
        font-size 20px
        background-color gray
        border-radius 5px
        color black
        &.active
            fc()
            height 40px
            width 100%
            font-size 20px
            background-color orange
            border-radius 5px
            color white
</style>