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
            <router-link class="nav-item nav-link text-white mx-2" to="/"
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
              >意見回饋</router-link
            >
            <router-link
              class="nav-item nav-link text-white mx-2"
              to="/admin/shopreviews"
              >商家評論</router-link
            >
            <a
              href="#"
              class="nav-item nav-link text-white mx-2"
              @click.prevent="logout"
              >登出</a
            >
            <!-- <router-link
              class="nav-item nav-link text-white mx-2"
              to="/admin/data"
              >後台數據</router-link
            > -->
          </div>
        </div>
      </div>
    </nav>
    <router-view v-if="isAdmin"></router-view>
    <!-- <footer class="footer w-100">
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
    </footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  inject: ["emitter"],
  updated() {
    this.checkToken();
  },
  methods: {
    checkToken() {
      let token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (!token) {
        this.showAlert();
        this.$router.push("/adminlogin");
      } else {
        this.isAdmin = true;
        // this.$router.push("/admin/shops");
      }
    },
    showAlert() {
      this.$swal.fire({
        icon: "error",
        title: "請先登入",
      });
    },
    logout() {
      document.cookie = `token=; expires=; path=/`;
      this.$http.defaults.headers.common["Authorization"] = "";
      this.emitter.emit("push-message", {
        style: "primary",
        title: "token 已清除",
      });
      this.checkToken();
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
.swal2-styled.swal2-confirm {
  background-color: #1c6e8c;
  &:focus {
    box-shadow: 0 0 0 3px rgba($color: #1c6e8c, $alpha: 0.5);
  }
}
</style>
