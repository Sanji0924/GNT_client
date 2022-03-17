<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <section class="container my-7">
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
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="請輸入信箱"
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
                />
              </div>
              <div class="mb-3">
                <label for="gender" class="form-label">性別</label>
                <div>
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="male"
                  />男性
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="female"
                    class="ms-3"
                  />女性
                  <input
                    type="radio"
                    id="gender"
                    name="gender"
                    value="other"
                    class="ms-3"
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
                />
              </div>
              <div class="mb-3">
                <label for="account" class="form-label">帳號</label>
                <input
                  type="text"
                  class="form-control"
                  id="account"
                  name="account"
                />
              </div>
              <div class="mb-3">
                <label for="birth" class="form-label">生日</label>
                <input
                  type="date"
                  class="form-control"
                  id="birth"
                  name="birth"
                />
              </div>
            </fieldset>
            <div class="form-floating mb-3 text-center">
              <!-- <button type="submit" class="btn btn-primary btn-lg w-100">
                送出
              </button> -->
              <router-link
                to="/memberLogin"
                class="btn btn-primary btn-lg w-100"
                >送出</router-link
              >
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
};
</script>

<style lang="css">
.header {
  position: static !important;
}
</style>
