<template>
    <div class="docker">
        <router-link
            :class="{'docker_item': true, 'docker_item--active': index === 0}"
            v-for="(item, index) in dockerList" 
            :key="index"
            :to="item.to"
        >
            <div class="iconfont" v-html="item.icon"></div>
            <div class="docker_title">{{item.text}}</div>
        </router-link>
    </div>
</template>

<script setup>
const dockerList = [
    {icon: '&#xe696;', text: '首页',   to: '/'},
    {icon: '&#xe698;', text: '购物车', to: '/cart'},
    {icon: '&#xe645;', text: '订单',   to: '/order'},
    {icon: '&#xe7ae;', text: '我的',   to: '/user'},
]
</script>

<style lang="scss" scoped>
@import "../.././style/viriables.scss";
@import "../.././style/mixins.scss";
.docker {
    color: $content-fontcolor;
    width: 100%;
    height: 0.49rem;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 0.01rem solid $content-bgColor;
    display: flex;
    padding: 0 0.18rem 0 0.18rem;
    box-sizing: border-box;
    &_item {
        flex: 1;
        text-align: center;
        text-decoration: none;
        color: #333333;
        .iconfont {
            margin: 0.07rem 0 0.02rem 0;
            font-size: 0.2rem;
        }
        &--active {
            color: #1fa4fc;
        }
    }
    &_title {
        transform: scale(0.5, 0.5);
        font-size: 0.2rem;
        transform-origin: center top;
    }
}
</style>