<script setup>

</script>

<template>
  <div class="docker">
    <span class="docker_item docker_item--active">
      <div class="iconfont">&#xe696;</div>
      <div class="docker_title">首页</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe698;</div>
      <div class="docker_title">购物车</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe645;</div>
      <div class="docker_title">订单</div>
    </span>
    <span class="docker_item">
      <div class="iconfont">&#xe7ae;</div>
      <div class="docker_title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
.docker {
  width: 100%;
  height: 0.49rem;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #f1f1f1;
  display: flex;
  padding: 0 0.18rem 0 0.18rem;
  box-sizing: border-box;
  &_item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
      font-size: 0.2rem;
    }
    &--active {
      color: #1fa4fc;
    }
  }
  &_title {
    transform: scale(0.5 0.5);
    font-size: 20px;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
