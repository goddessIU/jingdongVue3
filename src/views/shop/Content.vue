<template>
    <div class="content">
        <div class="category">
            <div
                :class="{ 'category_item': true, 'category_item-active': currentTab === item.tab }"
                v-for="(item, index) in categories"
                :key="index"
                @click="changeTab(item.tab)"
            >{{ item.name }}</div>
        </div>
        <div class="product">
            <div class="product_item" v-for="item in list" :key="list._id">
                <img :src="item.imgUrl" class="product_item_img" />
                <div class="product_item_detail">
                    <h4 class="product_item_title">{{ item.name }}</h4>
                    <p class="product_item_sales">月售{{ item.sales }} 件</p>
                    <p class="product_item_price">
                        <span class="product_item_yen">&yen;{{ item.price }}</span>
                        <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
                    </p>
                </div>
                <div class="product_number">
                    <span class="product_number_minus iconfont"
                    @click="changeCartItemCount(shopId, item._id, item, -1)"
                    >&#xe656;</span>
                    {{ getProductCartCount(shopId, item._id) }}
                    <span class="product_number_plus iconfont"
                    @click="changeCartItemCount(shopId, item._id, item, 1)">&#xe726;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, watchEffect, toRefs } from 'vue';
import { useCommonCartEffect } from './useCartEffect';
import { get } from '../../utils/request';

const categories = [
    { name: '全部商品', tab: 'all' },
    { name: '秒杀', tab: 'seckill' },
    { name: '新鲜水果', tab: 'fruit' }
]

const useTabEffect = () => {
    const currentTab = ref(categories[0].tab)
    const changeTab = (tab) => {
        currentTab.value = tab;
    }
    return { currentTab, changeTab };
}

const useCurrentListEffect = (currentTab, shopId) => {
    const content = reactive({ list: {} })
    const getContentData = async () => {
        const result = await get(`/api/shop/${shopId}/products`, {
            tab: currentTab.value
        })
        if (result.errno === 0 && result.data.length) {
            content.list = result.data;
        }
    }
    watchEffect(() => getContentData())
    const { list } = toRefs(content);
    return { list }
}



const { currentTab, changeTab } = useTabEffect();
const { list } = useCurrentListEffect(currentTab);
const { getProductCartCount, cartList, shopId, changeCartItemCount } = useCommonCartEffect();
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.content {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 1.5rem;
    bottom: 0.5rem;
    .category {
        overflow-y: scroll;
        height: 100%;
        width: 0.76rem;
        background-color: $search-bgColor;
        &_item {
            border-radius: 2px;
            height: 0.4rem;
            line-height: 0.4rem;
            text-align: center;
            font-size: 0.14rem;
            color: #333333;
            &-active {
                background-color: $bgColor;
            }
        }
    }
    .product {
        height: 100%;
        overflow-y: scroll;
        background-color: $bgColor;
        padding: 0 0.18rem 0 0.16rem;
        flex: 1;
        &_item {
            display: flex;
            position: relative;
            padding: 0.12rem 0;
            border-bottom: 0.01rem solid $content-bgColor;
            width: 2.83rem;
            &_img {
                width: 0.68rem;
                height: 0.68rem;
                margin-right: 0.16rem;
            }
            &_detail {
                overflow: hidden;
            }
            &_title {
                @include ellipse;
                margin: 0;
                line-height: 0.2rem;
                font-size: 0.14rem;
                color: $content-fontcolor;
            }
            &_sales {
                margin: 0.06rem 0;
                font-size: 0.12rem;
                color: $content-fontcolor;
            }
            &_price {
                margin: 0;
                line-height: 0.2rem;
                font-size: 0.14rem;
                color: $highlight-fontColor;
            }
            &_yen {
                font-size: 0.12rem;
            }
            &_origin {
                margin-left: 0.06rem;
                line-height: 0.2rem;
                font-size: 0.12rem;
                color: $light-fontColor;
                text-decoration: line-through;
            }
        }
        &_number {
            position: absolute;
            right: 0;
            bottom: 0.12rem;
            line-height: 0.18rem;
            &_minus {
                position: relative;
                top: 0.02rem;
                font-size: 0.16rem;
                color: $medium-fontColor;
                margin-right: 0.05rem;
            }
            &_plus {
                position: relative;
                top: 0.02rem;
                font-size: 0.18rem;
                color: $btn-bgColor;
                margin-left: 0.05rem;
            }
        }
    }
}
</style>