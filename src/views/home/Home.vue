<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <Docker />
</template>

<script setup>
import Nearby from './Nearby.vue';
import StaticPart from './StaticPart.vue';
import Docker from './Docker.vue';
</script>

<style lang="scss" scoped>
@import "../.././style/viriables.scss";
@import "../.././style/mixins.scss";
.wrapper {
  overflow-y: scroll;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.01rem 0.18rem;
  color: $content-fontcolor;
}
</style>
