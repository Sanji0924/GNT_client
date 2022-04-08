<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <section class="container mt-7 mb-5">
      <div class="row justify-content-center align-items-center">
        <div class="col-10 col-md-5 col-lg-4">
          <h1 class="h2 text-center mb-3">會員註冊</h1>
          <form action="#" class="text-start">
            <fieldset>
              <legend class="fs-4 text-center">申請帳號密碼</legend>
              <div class="mb-3">
                <label for="email" class="form-label">帳號</label>
                <span class="text-danger ms-2">必填</span>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="account"
                  placeholder="請輸入帳號"
                  v-model="user.Account"
                />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">密碼</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  placeholder="請輸入密碼"
                  v-model="user.Password"
                />
              </div>
              <hr />
              <legend class="fs-4 text-center">基本資料</legend>
              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="請輸入姓名"
                  v-model="user.Name"
                />
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label">性別</label>
                <div>
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="男"
                    v-model="user.Gender"
                  />男性
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="女"
                    class="ms-3"
                    v-model="user.Gender"
                  />女性
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="其他"
                    class="ms-3"
                    v-model="user.Gender"
                  />其他
                </div>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">電話</label>
                <input
                  type="tel"
                  class="form-control"
                  id="tel"
                  name="tel"
                  placeholder="請輸入電話"
                  v-model="user.Phone"
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">地址</label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  placeholder="請輸入地址"
                  v-model="user.Address"
                />
              </div>
              <div class="mb-3">
                <label for="account" class="form-label">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="請輸入 Email"
                  v-model="user.Email"
                />
              </div>
              <div class="mb-3">
                <label for="birth" class="form-label">生日</label>
                <input
                  type="date"
                  class="form-control"
                  id="birth"
                  name="birth"
                  v-model="user.BirthDate"
                />
              </div>
            </fieldset>
            <div class="form-floating mb-3 text-center">
              <!-- <button type="submit" class="btn btn-primary btn-lg w-100">
                送出
              </button> -->
              <button
                type="button"
                class="btn btn-primary btn-lg w-100"
                @click="signUp"
              >
                送出
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
        Name: "",
        Phone: "",
        Address: "",
        Gender: "",
        BirthDate: "",
        Email: "",
        // RegisterDate: "",
        BlackList: false,
        // Image: "",
        Account: "",
        Password: "",
        // Point: "",
      },
    };
  },
  methods: {
    signUp() {
      const api = `https://localhost:44333/api/MemberInfoes1`;

      this.$http
        .post(api, this.user)
        .then((res) => {
          console.log(res);
          alert("註冊成功");
          this.$router.push("/memberlogin");
          // this.reviews = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
};
</script>
