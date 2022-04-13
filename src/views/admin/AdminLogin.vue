<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gray w-100">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img class="logoImg" src="../../assets/images/logo.png" alt="" />
        </router-link>
      </div>
    </nav>
    <section class="main container d-flex flex-column justify-content-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-5 col-lg-4">
          <h1 class="h2 text-center mb-3">請先登入</h1>
          <form action="#" class="form-signin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="user.Account"
              />
              <label for="floatingInput">管理員帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="請輸入密碼"
                v-model="user.Password"
              />
              <label for="floatingPassword">密碼</label>
            </div>
            <div
              class="form-floating mb-3 text-center d-flex justify-content-center align-items-center"
            >
              <button type="button" class="btn btn-gray btn-lg" @click="login">
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <footer class="footer w-100 align-self-end">
      <div class="container-fuild bg-gray py-5">
        <div class="container text-center">
          <router-link
            class="text-white h4 link-hover-opacity mb-3"
            to="./index.html"
          >
            <img class="logoImg" src="../../assets/images/logo.png" alt="" />
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
      user: {
        Account: "",
        Password: "",
      },
    };
  },
  inject: ["emitter"],
  methods: {
    checkToken() {
      let token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      if (token) {
        this.isAdmin = true;
        this.$router.push("/admin/shops");
      }
    },
    login() {
      const api = `${process.env.VUE_APP_API}/api/Login/AD`;

      this.$http
        .post(api, this.user)
        .then((res) => {
          const { token, expiretime } = res.data;

          document.cookie = `token=${token}; expires=${new Date(
            expiretime
          )}}; path=/`;
          this.$http.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;
          this.emitter.emit("push-message", {
            style: "success",
            title: "登入成功",
          });
          this.checkToken();
        })
        .catch((err) => {
          console.dir(err);
          this.$swal.fire({
            icon: "error",
            title: `${err.response.data.Message}`,
          });
        });
    },
  },
  mounted() {
    this.checkToken();
  },
};
</script>

<style lang="scss">
html,
body {
  box-sizing: content-box;
  height: 100%;
  text-align: center;
}
.logoImg {
  height: 45px;
  z-index: 1000;
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
