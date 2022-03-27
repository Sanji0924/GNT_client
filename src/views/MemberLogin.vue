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

              <!-- <button type="submit" class="btn btn-primary btn-lg w-100">登入</button> -->
            </div>
          </form>
        </div>
      </div>
    </section>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import { EventBus } from "../assets/methods/eventBus";
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
      isMember: true,
    };
  },
  methods: {
    login() {
      const api = `https://localhost:44333/api/Login/Member`;

      this.$http
        .post(api, this.user)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          console.log(EventBus.$emit("send-member", res.data.name));
          EventBus.$emit("send", res.data.name);
          this.$router.push("/");
        })
        .catch((err) => {
          console.dir(err);
          alert(`${err.response.data.Message}，請再重新登入`);
        });
    },
  },
  beforeDestroy() {
    this.$off("send", this.isMember);
  },
};
</script>

<style lang="css">
html,
body {
  height: 100%;
}
.main {
  height: calc(100vh - 239px);
}
</style>
