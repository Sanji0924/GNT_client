<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <section
      class="container main d-flex flex-column justify-content-center mt-5"
    >
      <div class="row justify-content-center align-items-center">
        <div class="col-10 col-md-5 col-lg-4">
          <h1 class="h2 text-center mb-3">會員登入</h1>
          <form action="#" class="form-signin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                v-model="user.Account"
              />
              <label for="floatingInput">帳號</label>
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
              class="form-floating mb-3 text-center d-flex justify-content-between align-items-center"
            >
              <router-link
                to="/memberSignup"
                class="btn btn-outline-primary btn-lg w-100 me-3"
                >註冊</router-link
              >
              <button
                type="button"
                @click="login"
                class="btn btn-primary btn-lg w-100"
              >
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from "../components/FrontNavbar.vue";
import FrontFooter from "../components/FrontFooter.vue";

export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
  data() {
    return {
      user: {
        Account: "",
        Password: "",
      },
      isMember: false,
      routerFrom: "",
    };
  },
  inject: ["emitter"],
  methods: {
    login() {
      const api = `${process.env.VUE_APP_API}/api/Login/Member`;

      this.$http
        .post(api, this.user)
        .then((res) => {
          console.log(res);
          const { ID } = res.data;
          this.isMember = true;
          document.cookie = `memberToken=${this.isMember}; expires=; path=/`;
          document.cookie = `memberID=${ID}; expires=; path=/`;
          this.$router.back();
          this.emitter.emit("push-message", {
            style: "success",
            title: "登入成功",
          });
        })
        .catch((err) => {
          console.dir(err);
          this.$swal.fire({
            icon: "error",
            title: `${err.response.data.Message}，請再重新登入`,
          });
        });
    },
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
.main {
  height: calc(100vh - 239px);
}
.swal2-styled.swal2-confirm {
  background-color: #1c6e8c;
  &:focus {
    box-shadow: 0 0 0 3px rgba($color: #1c6e8c, $alpha: 0.5);
  }
}
</style>
