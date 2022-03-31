<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gray header">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img class="logoImg" src="../../assets/images/logo_full.svg" alt="" />
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
            <router-link class="nav-item nav-link text-white mx-2" to="/index"
              >前台首頁</router-link
            >
            <router-link
              class="nav-item nav-link text-white mx-2"
              to="/admin/shops"
              >店家管理</router-link
            >
            <router-link
              class="nav-item nav-link text-white mx-2"
              to="/admin/members"
              >會員管理</router-link
            >
            <router-link
              class="nav-item nav-link text-white mx-2"
              to="/admin/forms"
              >表單管理</router-link
            >
            <router-link
              class="nav-item nav-link text-white mx-2"
              to="/admin/shopreviews"
              >商家評論</router-link
            >
            <router-link
              class="nav-item nav-link text-white mx-2"
              to="/admin/data"
              >後台數據</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <!-- <section class="main pt-7">
      <h1>請選擇要前往的頁面</h1>
    </section> -->
    <router-view v-if="isAdmin"></router-view>
    <footer class="footer w-100">
      <div class="container-fuild bg-gray py-5">
        <div class="container text-center">
          <router-link class="text-white h4 link-hover-opacity mb-3" to="/">
            <img class="logoImg" src="../../assets/images/logo.svg" alt="" />
          </router-link>
          <ul class="d-flex justify-content-center list-unstyled">
            <li>
              <router-link
                to="/admin"
                class="link-hover-opacity text-white px-3 pt-1 pb-2 border-1 border-end"
                >facebook</router-link
              >
            </li>
            <li>
              <router-link
                to="/admin"
                class="link-hover-opacity text-white px-3 pt-1 pb-2"
                >instagram</router-link
              >
            </li>
          </ul>
          <p class="text-white mb-0 mt-3">© 2022 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  methods: {
    checkToken() {
      // this.isAdmin = false;
      let token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (!token) {
        alert("請先登入");
        this.$router.push("/adminlogin");
      } else {
        this.isAdmin = true;
      }
    },
  },
  mounted() {
    this.checkToken();
  },
};
</script>

<style lang="scss">
@import "../../assets/stylesheet/layout/sidebar";
.logoImg {
  height: 45px;
  z-index: 1000;
}
.link-hover-opacity {
  &:hover {
    opacity: 0.7;
    transition: all 0.3s;
  }
}
.header {
  background-color: rgba($color: #000002, $alpha: 0.8);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
}
.main {
  height: calc(100vh - 272px);
}
</style>
