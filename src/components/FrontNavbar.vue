<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark header">
      <div class="container">
        <router-link class="navbar-brand" to="/index">
          <img class="logoImg" src="../assets/images/logo_full.svg" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div class="navbar-nav text-sm-center">
            <router-link class="nav-item nav-link mx-2" to="/index"
              >首頁</router-link
            >
            <router-link
              class="nav-item nav-link mx-2"
              v-if="!isMember"
              to="/memberSignUp"
              >會員註冊</router-link
            >
            <router-link
              class="nav-item nav-link mx-2"
              v-if="!isMember"
              to="/memberLogin"
              >會員登入</router-link
            >
            <router-link
              class="nav-item nav-link mx-2"
              v-if="isMember"
              to="/memberLogin"
              >會員登出</router-link
            >
            <div class="dropdown">
              <a
                class="nav-link dropdown d-flex justify-content-center align-items-center mx-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                主題頁面<span class="material-icons"> expand_more </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end py-0 right-0 bg-dark text-sm-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/shops/bars"
                    >酒吧</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/shops/desserts"
                    >咖啡甜點</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/shops/snacks"
                    >小吃宵夜</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/shops/nightviews"
                    >夜間景點</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown" v-if="isMember">
              <a
                class="nav-link dropdown d-flex justify-content-center align-items-center mx-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                功能選單<span class="material-icons"> expand_more </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end py-0 right-0 bg-dark text-sm-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/member/memberInfo"
                    >會員資料</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/member/favorites"
                    >我的最愛</router-link
                  >
                </li>
                <!-- <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/member/reviews"
                    >意見回饋</router-link
                  >
                </li> -->
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/member/reviews"
                    >分享紀錄</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/member/routes"
                    >行程規劃</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMember: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.logoImg {
  height: 45px;
  z-index: 1000;
}

.header {
  background-color: rgba($color: #000002, $alpha: 0.8);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
}

.dropdown-menu {
  min-width: 7.5rem;
}

.dropdown-item:hover {
  background: #e98830;
  // color: #000;
  transition: all 0.3s;
}
</style>
