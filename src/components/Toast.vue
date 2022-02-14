<template>
    <div class="toast">{{message}}</div>
</template>

<script setup>
const props = defineProps(['message']);
</script>

<script>
import { reactive, toRefs } from 'vue';

export const useToastEffect = () => {
    const toastData = reactive({
        show: false,
        toastMessage: ''
    })
    const showToast = (message) => {
        toastData.isToastShow = true;
        toastData.toastMessage = message;
        setTimeout(() => {
            toastData.isToastShow = false;
        }, 2000);
    }
    const { show, toastMessage } = toRefs(toastData);
    return { showToast, show, toastMessage }
}
</script>

<style lang="scss" scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.1rem;
    background: rgba(0, 0, 0, 0.35);
    color: #fff;
    border-radius: 0.05rem;
}
</style>
