<template>
  <div class="container mb-4">
    <h1 class="h2 mb-5 mt-5">會員資料</h1>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <h2 class="h4 mb-3">基本資料</h2>
        <ul class="list-unstyled bg-light rounded-lg p-3">
          <li>姓名：{{ user.name }}</li>
          <li>性別：{{ user.gender }}</li>
          <li>電話：{{ user.tel }}</li>
          <li>地址：{{ user.address }}</li>
          <li>生日：{{ user.birth }}</li>
          <hr />
          <li>帳號：{{ user.account }}</li>
          <li>密碼：{{ user.password }}</li>
        </ul>

        <div class="d-flex justify-content-end">
          <button
            id="btnEdit"
            type="button"
            class="btn btn-outline-gray justify-content-end"
            @click="changeEdit"
          >
            編輯
          </button>
        </div>
      </div>
      <div class="offset-lg-1 col-12 col-md-6" id="editArea" v-if="isEdit">
        <h2 class="h4 mb-3">編輯資料</h2>
        <form action="#" class="border border-1 border-gray rounded-3 p-3">
          <div class="mb-3">
            <label for="name" class="form-label">姓名</label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="請輸入姓名"
              v-model="user.name"
            />
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">性別</label>
            <div>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="男性"
                v-model="user.gender"
              />男性
              <input
                type="radio"
                id="gender"
                name="gender"
                value="女性"
                class="ms-3"
                v-model="user.gender"
              />女性
              <input
                type="radio"
                id="gender"
                name="gender"
                value="其他"
                class="ms-3"
                v-model="user.gender"
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
              v-model="user.tel"
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
              v-model="user.address"
            />
          </div>
          <div class="mb-3">
            <label for="birth" class="form-label">生日</label>
            <input
              type="date"
              class="form-control"
              id="birth"
              name="birth"
              v-model="user.birth"
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="請輸入 Email"
              v-model="user.email"
            />
          </div>
          <div class="mb-3">
            <label for="account" class="form-label">帳號</label>
            <input
              type="text"
              class="form-control"
              id="account"
              name="account"
              v-model="user.account"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">密碼</label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              v-model="user.password"
            />
          </div>
          <!-- </fieldset> -->
          <div class="form-floating text-end">
            <button id="btnConfirm" type="submit" class="btn btn-light w-25">
              確定
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "王王王",
        gender: "其他",
        tel: "0912345678",
        address: "台南市365號",
        birth: "2022 - 03 - 30",
        email: "qqq@gmail.com",
        account: "qqq123",
        password: "123456",
      },
      isEdit: false,
    };
  },
  methods: {
    changeEdit() {
      this.isEdit = !this.isEdit;
    },
  },
};
</script>
