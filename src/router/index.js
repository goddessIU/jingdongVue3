import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/Login.vue"),
      beforeEnter: (to, from, next) => {
        const isLogin = localStorage.isLogin;
        if (isLogin) {
          next({name: "home"});
        } else {
          next();
        }
      }
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/register/Register.vue"),
      beforeEnter: (to, from, next) => {
        const isLogin = localStorage.isLogin;
        if (isLogin) {
          next({name: "home"});
        } else {
          next();
        }
      }
    },
    {
      path: "/shop/:id",
      name: "shop",
      component: () => import("../views/shop/Shop.vue")
    },
    {
      path: "/order",
      name: "order",
      component: () => import("../views/order/Order.vue")
    }
  ],
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.isLogin;
  if (isLogin || to.name === "login" || to.name === "register") {
    next();
  } else {
    next({name: 'login'})
  }
})

export default router;
