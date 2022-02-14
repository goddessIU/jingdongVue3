<template>
    <div class="icon">
        <img src="../../assets/banner.png" class="icon_img" />
    </div>
    <div class="form">
        <input class="form_phone" placeholder="请输入手机号" v-model="username" />
        <input type="password" class="form_password" placeholder="请输入密码" v-model="password" />
        <input type="password" class="form_password" placeholder="确认密码" v-model="password1" />
        <button class="form_subbmit" @click="handleRegister">注册</button>
    </div>
    <div class="login" @click="handleLoginClick">已有账号去登录</div>
    <Toast :message="toastMessage" v-show="show" />
</template>

<script setup>
import { useRouter } from 'vue-router';
import { reactive, toRefs } from 'vue';
import { post } from '../../utils/request';
import Toast, { useToastEffect } from '../../components/Toast.vue';

const useleLoginEffect = () => {
    const router = useRouter();
    const handleLoginClick = () => {
        router.push({ name: "login" });
    }
    return { handleLoginClick }
}

const useRegisterEffect = () => {
    const router = useRouter();
    const data = reactive({
        username: "",
        password: "",
        password1: ""
    })
    const handleRegister = async () => {
        try {
            const result = await post("/api/user/register", {
                username: data.username,
                password: data.password,
                password1: data.password1
            })
            if (result.errno === 0) {
                localStorage.isLogin = true;
                router.push({ name: "home" });
            } else {
                showToast("登录失败")
            }
        } catch (e) {
            showToast("请求失败")
        }
    }
    const { username, password, password1 } = toRefs(data);
    return { username, password, handleRegister, password1 };
}

const { show, toastMessage, showToast } = useToastEffect();
const { handleLoginClick } = useleLoginEffect();
const { username, password, handleRegister, password1 } = useRegisterEffect();
</script>
<style lang="scss" scoped>
.icon {
    margin: 1.55rem 0 0.4rem 1.4rem;
    &_img {
        width: 0.66rem;
        height: 0.66rem;
    }
}
.form {
    text-align: center;
    &_phone {
        width: 2.95rem;
        height: 0.48rem;
        background-color: #f9f9f9;
        border: 0.01rem solid rgba(0, 0, 0, 0.1);
        outline: none;
        border-radius: 0.06rem;
        padding-left: 0.16rem;
        font-size: 0.16rem;
        color: rgba(0, 0, 0, 0.5);
        box-sizing: border-box;
    }
    &_password {
        box-sizing: border-box;
        width: 2.95rem;
        height: 0.48rem;
        background-color: #f9f9f9;
        border: 0.01rem solid rgba(0, 0, 0, 0.1);
        outline: none;
        border-radius: 0.06rem;
        margin-top: 0.16rem;
        padding-left: 0.16rem;
        font-size: 0.16rem;
        color: rgba(0, 0, 0, 0.5);
    }
    &_subbmit {
        // background-color: rgba(0,145,255,0.32);
        margin-top: 0.32rem;
        box-sizing: border-box;
        background: #0091ff;
        box-shadow: 0 0.05rem 0.1rem 0 rgba(0, 145, 255, 0.32);
        outline: none;
        border: none;
        border-radius: 0.04rem;
        width: 2.95rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        font-size: 16px;
        color: #ffffff;
        letter-spacing: 0;
    }
}
.login {
    margin-top: 0.16rem;
    margin-left: 1.18rem;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0;
}
</style>