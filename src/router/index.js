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
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
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
