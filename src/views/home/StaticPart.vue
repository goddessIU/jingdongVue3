<template>
    <div class="position">
        <span class="iconfont position_icon">&#xe7f1;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position_notice">&#xe600;</span>
    </div>
    <div class="search">
        <span class="iconfont">&#xe617;</span>
        山姆会员商店优惠商品
    </div>
    <div class="banner">
        <img class="banner_img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
    </div>
    <div class="icons">
        <div class="icons_item" v-for="(item, index) in iconsList" :key="index">
            <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" class="icons_item_img" />
            <p class="icons_item_desc">{{item.desc}}</p>
        </div>
    </div>
    <div class="gap"></div>
</template>

<script setup>
const iconsList = [
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
    { imgName: "超市", desc: "超市便利" },
]
</script>

<style  scoped lang="scss">
@import "../.././style/viriables.scss";
@import "../.././style/mixins.scss";
.position {
    position: relative;
    padding: 0.16rem 0.24rem 0.16rem 0;
    line-height: 0.22rem;
    font-size: 0.16rem;
    @include ellipse;
    .position_icon {
        position: relative;
        top: 0.01rem;
        font-size: 0.2rem;
    }
    .position_notice {
        font-size: 0.2rem;
        position: absolute;
        right: 0;
        top: 0.17rem;
    }
}
.search {
    margin-bottom: 0.12rem;
    line-height: 0.32rem;
    background-color: #f5f5f5;
    color: #b7b7b7;
    border-radius: 0.16rem;
    font-size: 0.14rem;
    .iconfont {
        margin: 0 0.12rem 0 0.16rem;
        display: inline-block;
        font-size: 0.2rem;
    }
}
.banner {
    height: 0;
    overflow: hidden;
    padding-bottom: 25.4%;
    &_img {
        width: 100%;
    }
}
.icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0.16rem;
    &_item {
        width: 20%;
        &_img {
            width: 0.4rem;
            height: 0.4rem;
            display: block;
            margin: 0 auto;
        }
        &_desc {
            text-align: center;
            margin: 0.16rem 0 0.16rem 0;
            color: $content-fontcolor;
        }
    }
}
.gap {
    height: 0.1rem;
    background-color: $content-bgColor;
    margin: 0 -0.18rem;
}
</style>