<template>
    <div class="wrapper">
        <div class="search">
            <div class="search_back iconfont" @click="handleBackClick">&#xe660;</div>
            <div class="search_content">
                <span class="search_content_icon iconfont">&#xe617;</span>
                <input class="search_content_input" placeholder="请输入商品名称" />
            </div>
        </div>
        <ShopInfo :item="item" :hideBorder="false" />
        <Content />
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { reactive, toRefs } from 'vue';

import { get } from '../../utils/request'

import ShopInfo from '../../components/ShopInfo.vue';
import Content from './Content.vue';

const useBackEffect = () => {
    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    }
    return { handleBackClick }
}

const useGetShopInfoEffect = () => {
    const route = useRoute();
    const result = reactive({ item: {} })
    const getShopInfo = async () => {
        try {
            const data = await get(`/api/shop/${route.params.id}`);
            result.item = data.data;
        } catch (e) {
            console.log(e)
        }
    }
    const { item } = toRefs(result);
    return { getShopInfo, item };
}

const { getShopInfo, item } = useGetShopInfoEffect();
getShopInfo();
const { handleBackClick } = useBackEffect();
</script>

<style scoped lang="scss">
@import "../../style/viriables.scss";
.wrapper {
    padding: 0 0.18rem;
    box-sizing: border-box;

    .search {
        margin: 0.16rem 0;
        display: flex;
        height: 0.32rem;
        line-height: 0.32rem;
        &_back {
            color: #b6b6b6;
            width: 0.3rem;
            font-size: 0.24rem;
        }
        &_content {
            background: $search-bgColor;
            border-radius: 0.16rem;
            height: 0.32rem;
            line-height: 0.32rem;
            margin-left: 0.16rem;
            width: 3.1rem;
            display: flex;
            &_icon {
                width: 0.44rem;
                text-align: center;
                color: $search-fontColor;
            }
            &_input {
                display: block;
                width: 100%;
                padding-right: 0.2rem;
                border: none;
                outline: none;
                background: none;
                height: 0.32rem;
                font-size: 0.14rem;
                color: $search-fontColor;
            }
        }
    }
}
</style>