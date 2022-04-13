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
                <label for="帳號" class="form-label">帳號</label>
                <span class="text-danger ms-2">必填</span>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  name="帳號"
                  placeholder="請輸入帳號"
                  v-model="user.Account"
                  v-validate="'required'"
                />
                <span class="text-danger" v-if="errors.has('帳號')">{{
                  errors.first("帳號")
                }}</span>
              </div>
              <div class="mb-4">
                <label for="密碼" class="form-label">密碼</label>
                <span class="text-danger ms-2">必填</span>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="密碼"
                  placeholder="請輸入密碼"
                  v-model="user.Password"
                  v-validate="'required'"
                />
                <span class="text-danger" v-if="errors.has('密碼')">{{
                  errors.first("密碼")
                }}</span>
              </div>
              <hr />
              <legend class="fs-4 text-center">基本資料</legend>
              <div class="mb-3">
                <label for="姓名" class="form-label">姓名</label>
                <span class="text-danger ms-2">必填</span>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="姓名"
                  placeholder="請輸入姓名"
                  v-model="user.Name"
                  v-validate="'required'"
                />
                <span class="text-danger" v-if="errors.has('姓名')">{{
                  errors.first("姓名")
                }}</span>
              </div>
              <div class="mb-3">
                <label for="性別" class="form-label">性別</label>
                <span class="text-danger ms-2">必填</span>
                <div>
                  <input
                    type="radio"
                    id="gender"
                    name="性別"
                    value="男"
                    v-model="user.Gender"
                    v-validate="'required'"
                  />男性
                  <input
                    type="radio"
                    id="gender"
                    name="性別"
                    value="女"
                    class="ms-3"
                    v-model="user.Gender"
                    v-validate="'required'"
                  />女性
                  <input
                    type="radio"
                    id="gender"
                    name="性別"
                    value="其他"
                    class="ms-3"
                    v-model="user.Gender"
                    v-validate="'required'"
                  />其他
                  <span class="text-danger" v-if="errors.has('性別')">{{
                    errors.first("性別")
                  }}</span>
                </div>
              </div>
              <div class="mb-3">
                <label for="電話" class="form-label">電話</label>
                <span class="text-danger ms-2">必填</span>
                <input
                  type="tel"
                  class="form-control"
                  id="tel"
                  name="電話"
                  placeholder="請輸入電話"
                  v-model="user.Phone"
                  v-validate="'required|min:10'"
                />
                <span class="text-danger" v-if="errors.has('電話')">{{
                  errors.first("電話")
                }}</span>
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
                <span class="text-danger ms-2">必填</span>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="請輸入 Email"
                  v-model="user.Email"
                  v-validate="'required'"
                />
                <span
                  class="text-danger"
                  v-if="errors.has('email') && user.Email"
                  >{{ errors.first("email") }}</span
                >
                <span
                  class="text-danger"
                  v-if="errors.has('email') && !user.Email"
                  >email 不能留空</span
                >
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
              <button
                type="button"
                class="btn btn-primary btn-lg w-100"
                :disabled="
                  !user.Account ||
                  !user.Password ||
                  !user.Name ||
                  !user.Gender ||
                  !user.Phone ||
                  !user.Email
                "
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
        BlackList: false,
        Account: "",
        Password: "",
      },
    };
  },
  methods: {
    signUp() {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1`;

      this.$http
        .post(api, this.user)
        .then(() => {
          this.$swal.fire({
            icon: "success",
            title: "註冊成功",
            showConfirmButton: false,
            timer: 1500,
          });
          this.$router.push("/");
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
};
</script>
