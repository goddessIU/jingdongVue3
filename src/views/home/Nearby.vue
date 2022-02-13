<template>
    <div class="nearby">
        <h3 class="nearby_title">附近店铺</h3>
        <div class="nearby_item" v-for="item in nearbyList" :key="item.id">
            <div>
                <img src="http://www.dell-lee.com/imgs/vue3/near.png" class="nearby_item_img" />
            </div>
            <div class="nearby_content">
                <div class="nearby_content_title">{{item.title}}</div>
                <div class="nearby_content_tags">
                    <span class="nearby_content_tag" v-for="(innerItem, innerId) in item.tags" :key="innerId">{{innerItem}}</span>
                </div>
                <p class="nearby_content_highlight">{{item.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const nearbyList = [{
    id: 1,
    title: '沃尔玛',
    tags: ['月售1万+', '起送0元', '运费'],
    desc: 'vip享受'
},{
    id: 2,
    title: '沃尔玛',
    tags: ['月售1万+', '起送0元', '运费'],
    desc: 'vip享受'
}]
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
    &_item {
        display: flex;
        padding: 0.12rem 0;
        &_img {
            width: 0.56rem;
            height: 0.56rem;
            margin-right: 0.16rem;
        }
    }
    &_content {
        flex: 1;
        border-bottom: 0.01rem solid #f1f1f1;
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
}
</style>