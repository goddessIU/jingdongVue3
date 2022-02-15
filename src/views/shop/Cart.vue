<template>
    <div class="mask" v-show="cartShow">
    </div>
    <div class="cart">
        <div class="product" v-show="cartShow">
            <div class="product_title" >
                <div 
                    class="product_title_icon iconfont"
                    v-html="allCheck ? '&#xe601;' : '&#xe627;'"
                    @click="chooseAll"
                ></div>
                <div class="product_title_all">全选</div>
                <div class="product_title_clear" @click="clearCart">清空购物车</div>
            </div>
            <div class="product_item" v-for="item in productList" :key="item._id">
                <div 
                    class="product_item_icon iconfont"
                    v-html="item.check ? '&#xe601;' : '&#xe627;'"
                    @click="changeProductCheck(shopId, item._id)"
                ></div>
                <img :src="item.imgUrl" class="product_item_img" />
                <div class="product_item_detail">
                    <h4 class="product_item_title">{{ item.name }}</h4>
                    <p class="product_item_price">
                        <span class="product_item_yen">&yen;{{ item.price }}</span>
                        <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
                    </p>
                </div>
                <div class="product_number">
                    <span
                        class="product_number_minus iconfont"
                        @click="changeCartItemCount(shopId, item._id, item, -1)"
                    >&#xe656;</span>
                    {{ getProductCartCount(shopId, item._id) }}
                    <span
                        class="product_number_plus iconfont"
                        @click="changeCartItemCount(shopId, item._id, item, 1)"
                    >&#xe726;</span>
                </div>
            </div>
        </div>
        <div class="check">
            <div class="check__icon">
                <img src="http://www.dell-lee.com/imgs/vue3/basket.png" class="check__icon__img" @click="changeCartShow"/>
                <div class="check__icon__tag">{{ total }}</div>
            </div>
            <div class="check__info">
                总计：
                <span class="check__info__price">&yen;{{ price }}</span>
            </div>
            <div class="check__btn">去结算</div>
        </div>
    </div>
</template>

<script setup>
import { computed, toRefs, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../../stores/index';

import { useCommonCartEffect } from './useCartEffect';

const useCartEffect = () => {
    const route = useRoute();
    const shopId = route.params.id;
    const store = useStore();
    const cartList = store.cartList;

    const total = computed(() => {
        let num = 0;
        const productList = cartList?.[shopId] || undefined;
        if (productList) {
            for (let i in productList) {
                if (productList[i].count && productList[i].check) {
                    num += productList[i].count;
                }

            }
        }
        return num;
    })
    const price = computed(() => {
        let num = 0;
        const productList = cartList?.[shopId] || undefined;
        if (productList) {
            for (let i in productList) {
                if (productList[i].count && productList[i].price && productList[i].check) {
                    num += productList[i].count * productList[i].price;
                }
            }
        }
        return num.toFixed(2);
    })

    const productList = computed(() => {
        return cartList[shopId] || [];
    })

    const changeProductCheck = (shopId, productId) => {
        store.changeProductCheck(shopId, productId)
    }

    const clearCart = () => {
        store.clearCart();
    }

    const chooseAll = () => {
        store.chooseAll();
    }

    const allCheck = computed(() => {
        for (let key in productList.value) {
            if (!(productList.value[key].check)) {
                return false;
            }
        }
        return true;
    })

    const cartShow = ref(false);

    const changeCartShow = () => {
        cartShow.value = !cartShow.value
    }

    return { total, price, productList, changeProductCheck, clearCart, chooseAll, allCheck, cartShow, changeCartShow }
}

const { total, price, productList, changeProductCheck, clearCart, chooseAll, allCheck, cartShow, changeCartShow } = useCartEffect();
const { getProductCartCount, cartList, shopId, changeCartItemCount,  } = useCommonCartEffect();
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.cart {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
}
.check {
    display: flex;
    background: $bgColor;
    box-shadow: 0 -1px 1px 0 $content-bgColor;
    line-height: 0.49rem;
    height: 0.49rem;
    &__icon {
        width: 0.84rem;
        position: relative;
        &__img {
            width: 0.28rem;
            height: 0.26rem;
            display: block;
            margin: 0.11rem auto 0 auto;
        }
        &__tag {
            position: absolute;
            top: 0;
            left: 0.4rem;
            height: 0.2rem;
            width: 0.2rem;
            background-color: red;
            line-height: 0.2rem;
            text-align: center;
            border-radius: 50%;
            color: $bgColor;
            transform: scale(0.5);
            top: 0.05rem;
            right: 0.1rem;
        }
        
    }
    &__info {
        flex: 1;
        margin-left: 0.32rem;
        font-size: 12px;
        color: #333333;
        &__price {
            font-size: 18px;
            color: #e93b3b;
        }
    }
    &__btn {
        background: #4fb0f9;
        width: 0.98rem;
        height: 0.49rem;
        font-size: 14px;
        color: $bgColor;
        text-align: center;
    }
}
.product {
    height: 1.93rem;
    overflow-y: scroll;
    background-color: $bgColor;
    padding: 0 0.18rem 0 0.16rem;
    flex: 1;
    &_title {
        display: flex;
        height: 0.52rem;
        line-height: 0.52rem;
        padding: 0 0.18rem;
        font-size: 14px;
        color: $isChecked-bgColor;
        &_icon {
            width: 0.19rem;
            height: 0.19rem;
            margin-right: 0.08rem;
        }
        &_all {
            flex: 1;
        }
    }
    &_item {
        display: flex;
        position: relative;
        padding: 0.12rem 0;
        border-bottom: 0.01rem solid $content-bgColor;
        width: 2.83rem;
        &_icon {
            margin: auto 0.16rem auto 0.18rem;
            color: $isChecked-bgColor;
        }
        // line-height: ;
        &_img {
            width: 0.46rem;
            height: 0.46rem;
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
.mask {
    background-color: rgba(0,0,0,0.50);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
</style>