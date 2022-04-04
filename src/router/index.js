import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/shops",
    component: () => import("../views/Front.vue"),
    children: [
      {
        path: "all",
        component: () => import("../views/Shop.vue"),
      },
      {
        path: "bars",
        component: () => import("../views/Bars.vue"),
      },
      {
        path: "snacks",
        component: () => import("../views/Snacks.vue"),
      },
      {
        path: "desserts",
        component: () => import("../views/Desserts.vue"),
      },
      {
        path: "nightviews",
        component: () => import("../views/NightViews.vue"),
      },
      {
        path: "shop/:id",
        component: () => import("../views/ShopInfo.vue"),
      },
    ],
  },

  {
    path: "/memberLogin",
    component: () => import("../views/MemberLogin.vue"),
  },
  {
    path: "/memberSignUp",
    component: () => import("../views/MemberSignUp.vue"),
  },
  {
    path: "/member",
    component: () => import("../views/member/Member.vue"),
    children: [
      {
        path: "memberInfo",
        component: () => import("../views/member/MemberInfo.vue"),
      },
      {
        path: "favorites",
        component: () => import("../views/member/Favorites.vue"),
      },
      {
        path: "routes",
        component: () => import("../views/member/Routes.vue"),
      },
      {
        path: "reviews",
        component: () => import("../views/member/Reviews.vue"),
      },
    ],
  },
  {
    path: "/adminLogin",
    component: () => import("../views/admin/AdminLogin.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/admin/Dashboard.vue"),
    children: [
      {
        path: "shops",
        component: () => import("../views/admin/AdminShops.vue"),
      },
      {
        path: "members",
        component: () => import("../views/admin/AdminMembers.vue"),
      },
      {
        path: "forms",
        component: () => import("../views/admin/AdminForms.vue"),
      },
      {
        path: "shopreviews",
        component: () => import("../views/admin/AdminShopReviews.vue"),
      },
      {
        path: "data",
        component: () => import("../views/admin/AdminData.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  // linkActiveClass: "active",
  routes,
  // scrollBehavior() {
  //   return { x: 0, y: 0, behavior: "smooth" };
  // },
});

export default router;
