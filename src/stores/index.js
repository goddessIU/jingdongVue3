import { defineStore } from "pinia";

const setCartList = (cartList) => {
  localStorage.cartList = JSON.stringify(cartList)
}

const getCartList = () => {
  if (localStorage.cartList) {
    return JSON.parse(localStorage.cartList)
  } else {
    return {}
  }
}

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    cartList: getCartList()
    // cartList: {}
  }),
  getters: {
  },
  actions: {
    changeCartItemCount(shopId, productId, product, num) {
      let shopInfo = this.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let productInfo = shopInfo[productId];
      if (!productInfo) {
        productInfo = product
        productInfo.count = 0;
        productInfo.check = true;
      }
      productInfo.count += num;
      if (productInfo.count <= 0) {
        productInfo.count = 0;
        productInfo.check = false;
      }
      this.cartList[shopId] = shopInfo;
      this.cartList[shopId][productId] = productInfo
      setCartList(this.cartList)
    },
    changeProductCheck(shopId, productId) {
      let shopInfo = this.cartList[shopId]
      if (!shopInfo) {
        shopInfo = {}
      }
      let productInfo = shopInfo[productId];
      if (productInfo) {
        productInfo.check = !productInfo.check
      }
      setCartList(this.cartList)
    },
    clearCart() {
      for (let key in this.cartList) {
        this.cartList[key] = {};
      }
      setCartList(this.cartList)
    },
    chooseAll() {
      for (let key in this.cartList) {
        if (this.cartList[key]) {
          for (let i in this.cartList[key]) {
            this.cartList[key][i].check = true;
          }
        }
      }
      setCartList(this.cartList)
    }
  },
});
