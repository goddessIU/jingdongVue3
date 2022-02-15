<template>
    <div class="shop">
        <div>
            <img src="../assets/banner.png" class="shop_img" />
        </div>
        <div :class="{'shop_border-bottom': hideBorder, shop_content: true}">
            <div class="shop_content_title">{{ item.name }}</div>
            <div class="shop_content_tags">
                <span class="shop__content__tag">月售: {{ item.sales }}</span>
                <span class="shop__content__tag">起送: {{ item.expressLimit }}</span>
                <span class="shop__content__tag">基础运费: {{ item.expressPrice }}</span>
            </div>
            <p class="shop_content_highlight">{{ item.slogan }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['item', 'hideBorder'])
const item = props.item;
const hideBorder = props.hideBorder;
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
.shop {
    display: flex;
    padding: 0.12rem 0;
    &_img {
        width: 0.56rem;
        height: 0.56rem;
        margin-right: 0.16rem;
    }
    &_content {
        flex: 1;
        &_title {
            line-height: 0.22rem;
            font-size: 0.16rem;
            color: $content-fontcolor;
        }
        &_tags {
            margin-top: 0.08rem;
            line-height: 0.18rem;
            font-size: 0.13rem;
            color: $content-fontcolor;
        }
        &_tag {
            margin-right: 0.16rem;
        }
        &_highlight {
            color: #e93b3b;
            font-size: 0.13rem;
            height: 0.18rem;
            line-height: 0.18rem;
        }
    }
    &_border-bottom {
        border-bottom: 0.01rem solid #f1f1f1;
    } 
}
</style>