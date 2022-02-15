import { toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../../stores/index';

export const useCommonCartEffect = () => {
    const store = useStore();
    const route = useRoute();
    const shopId = route.params.id;
    const { cartList } = toRefs(store)
    const changeCartItemCount = (shopId, productId, productInfo, num) => {
        store.changeCartItemCount(shopId, productId, productInfo, num);
    }
    const getProductCartCount = (shopId, productId) => {
        return cartList.value?.[shopId]?.[productId]?.count || 0
    }
    return { getProductCartCount, cartList, shopId, changeCartItemCount }
}