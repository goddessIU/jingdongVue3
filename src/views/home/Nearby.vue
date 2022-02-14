<template>
    <div class="nearby">
        <h3 class="nearby_title">附近店铺</h3>
        <div class="nearby_item" v-for="item in nearbyList" :key="item._id">
            <ShopInfo :item="item" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { get } from '../../utils/request';

import ShopInfo from '../../components/ShopInfo.vue';


const useNearbyListEffect = () => {
    const nearbyList = ref([]);
    const getNearbyList = async () => {
        try {
            const result = await get('/api/shop/hot-list');
            nearbyList.value = result.data;
            console.log(nearbyList.value)
        } catch (e) {
            console.log('bug')
        }
    }
    return { nearbyList, getNearbyList };
}

const { nearbyList, getNearbyList } = useNearbyListEffect();
getNearbyList();

</script>

<style lang="scss" scoped>
@import "../.././style/viriables.scss";
@import "../.././style/mixins.scss";
.nearby {
    &_title {
        margin: 0.16rem 0 0.02rem 0;
        font-size: 0.18rem;
        font-weight: normal;
        color: $content-fontcolor;
    }
}
</style>