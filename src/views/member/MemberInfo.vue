<template>
  <div class="mb-4">
    <h1 class="h2 mb-5 mt-5">會員資料</h1>
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4">
        <h2 class="h4 mb-3">基本資料</h2>
        <ul class="list-unstyled bg-light rounded-lg p-3">
          <li>姓名：{{ user.Name }}</li>
          <li>性別：{{ user.Gender }}</li>
          <li>電話：{{ user.Phone }}</li>
          <li>地址：{{ user.Address }}</li>
          <li>生日：{{ user.BirthDate }}</li>
          <hr />
          <li>帳號：{{ user.Account }}</li>
          <li>
            密碼：<span v-for="(item, key) in user.Password.length" :key="key"
              >*</span
            >
          </li>
        </ul>

        <div class="d-flex justify-content-end">
          <button
            id="btnEdit"
            type="button"
            class="btn btn-outline-gray justify-content-end"
            @click="changeEdit(user)"
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
              v-model="tempUser.Name"
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
                v-model="tempUser.Gender"
              />男
              <input
                type="radio"
                id="gender"
                name="gender"
                value="女"
                class="ms-3"
                v-model="tempUser.Gender"
              />女
              <input
                type="radio"
                id="gender"
                name="gender"
                value="其他"
                class="ms-3"
                v-model="tempUser.Gender"
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
              v-model="tempUser.Phone"
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
              v-model="tempUser.Address"
            />
          </div>
          <div class="mb-3">
            <label for="birth" class="form-label">生日</label>
            <input
              type="date"
              class="form-control"
              id="birth"
              name="birth"
              v-model="tempUser.BirthDate"
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
              v-model="tempUser.Email"
            />
          </div>
          <div class="mb-3">
            <label for="account" class="form-label">帳號</label>
            <input
              type="text"
              class="form-control"
              id="account"
              name="account"
              v-model="tempUser.Account"
            />
          </div>
          <div class="passwordArea mb-3">
            <label for="password" class="form-label">密碼</label>
            <input
              :type="inputType"
              class="form-control"
              id="password"
              name="password"
              v-model="tempUser.Password"
            />
            <span
              class="material-icons clickEye"
              v-if="isShowPassword"
              @click="showPassword"
            >
              visibility_off
            </span>
            <span class="material-icons clickEye" v-else @click="showPassword">
              visibility
            </span>
          </div>
          <div class="form-floating text-end">
            <button
              id="btnConfirm"
              type="submit"
              class="btn btn-light w-25"
              @click.prevent="updateData"
            >
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
        MemberID: 0,
      },
      tempUser: {},
      isEdit: false,
      isShowPassword: false,
      inputType: "password",
    };
  },
  inject: ["emitter"],
  methods: {
    changeEdit(item) {
      this.isEdit = !this.isEdit;
      this.tempUser = { ...item };
    },
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.user.MemberID = Number(memberId);
    },
    getMemberInfo() {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/${this.user.MemberID}`;

      this.$http
        .get(api)
        .then((res) => {
          this.user = res.data[0];
          const birth = this.user.BirthDate.split("/");
          console.log(birth);
          birth.unshift(birth[2]);
          birth.splice(3, 1);
          birth.forEach((item, index) => {
            birth[index] = item.padStart(2, "0");
          });
          this.user.BirthDate = birth.join("-");
          console.log(this.user.BirthDate);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateData() {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/${this.user.MemberID}`;

      this.$http
        .put(api, this.tempUser)
        .then((res) => {
          console.log(res);
          this.getMemberInfo();
          this.emitter.emit("push-message", {
            style: "success",
            title: "修改成功",
          });
          this.isEdit = !this.isEdit;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    showPassword() {
      this.isShowPassword = !this.isShowPassword;
      if (this.isShowPassword) {
        this.inputType = "text";
      } else {
        this.inputType = "password";
      }
    },
  },
  mounted() {
    this.getMemberID();
    this.getMemberInfo();
  },
};
</script>

<style lang="scss">
.passwordArea {
  position: relative;
}
.clickEye {
  position: absolute;
  right: 10px;
  top: 55%;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}
</style>
