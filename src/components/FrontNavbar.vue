<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark header">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <img class="logoImg" src="../assets/images/logo_full.svg" alt="" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div class="navbar-nav text-sm-center">
            <router-link
              class="nav-item nav-link mx-2 d-flex justify-content-center"
              to="/"
              >首頁</router-link
            >
            <router-link
              class="nav-item nav-link mx-2 d-flex justify-content-center"
              v-if="!isMember"
              to="/memberSignUp"
              >會員註冊</router-link
            >
            <router-link
              class="nav-item nav-link mx-2 d-flex justify-content-center"
              v-if="!isMember"
              to="/memberLogin"
              >會員登入</router-link
            >
            <a
              class="nav-item nav-link mx-2 d-flex justify-content-center"
              href="#"
              @click.prevent="openRouletteModal"
              >隨機輪盤</a
            >

            <div class="dropdown">
              <a
                class="nav-link dropdown d-flex justify-content-center align-items-center mx-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                主題頁面<span class="material-icons"> expand_more </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end py-0 right-0"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    href="/shops/all"
                    @click.prevent="getAllShops"
                    >全部商家</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    href="/shops/all"
                    @click.prevent="getTypeShops('bar')"
                    >酒吧</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    href="/shops/desserts"
                    @click.prevent="getTypeShops('dessert')"
                    >咖啡甜點</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    href="/shops/snacks"
                    @click.prevent="getTypeShops('snack')"
                    >小吃宵夜</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    href="/shops/nightviews"
                    @click.prevent="getTypeShops('viewpoint')"
                    >夜間景點</a
                  >
                </li>
              </ul>
            </div>
            <div class="dropdown" v-if="isMember">
              <a
                class="nav-link dropdown d-flex justify-content-center align-items-center mx-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                功能選單<span class="material-icons"> expand_more </span>
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end py-0 right-0 bg-dark text-sm-center"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    to="/member/memberInfo"
                    >會員資料</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    to="/member/favorites"
                    >我的最愛</router-link
                  >
                </li>
                <!-- <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary"
                    to="/member/reviews"
                    >意見回饋</router-link
                  >
                </li> -->
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    to="/member/reviews"
                    >分享紀錄</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="dropdown-item text-white py-2 border-bottom border-1 border-primary d-flex justify-content-center"
                    to="/member/routes"
                    >行程規劃</router-link
                  >
                </li>
              </ul>
            </div>
            <a
              class="nav-item nav-link mx-2 d-flex justify-content-center"
              v-if="isMember"
              href="#"
              @click.prevent="openDelModal"
              >會員登出</a
            >
          </div>
        </div>
      </div>
    </nav>
    <Roulette ref="modal"></Roulette>
    <DeleteModal
      ref="delModal"
      :type="type"
      @delete-item="logout"
    ></DeleteModal>
  </div>
</template>

<script>
import Roulette from "../components/RouletteModal.vue";
import DeleteModal from "../components/DeleteModal.vue";

export default {
  props: ["isMember"],
  data() {
    return {
      type: "logout",
    };
  },
  components: {
    Roulette,
    DeleteModal,
  },
  methods: {
    openDelModal() {
      this.$refs.delModal.openModal();
    },
    logout() {
      document.cookie = `memberToken=; expires=; path=/`;
      document.cookie = `memberID=; expires=; path=/`;
      this.$swal.fire({
        icon: "success",
        title: "已登出，將回到首頁",
        showConfirmButton: false,
        timer: 1500,
      });
      this.$refs.delModal.closeModal();
      setTimeout(() => {
        if (this.$router.history.current.fullPath == "/") {
          this.$router.go(0);
        } else {
          this.$router.push("/");
        }
      }, 1000);
    },
    getAllShops() {
      if (this.$router.history.current.fullPath !== "/shops/all") {
        this.$router.push("/shops/all");
        this.$emit("get-all-shops");
      } else {
        this.$emit("get-all-shops");
      }
    },
    getTypeShops(type) {
      if (this.$router.history.current.fullPath !== "/shops/all") {
        this.$router.push("/shops/all");
        this.$emit("get-type-shops", type);
        console.log("觸發");
      }
      this.$emit("get-type-shops", type);
    },
    openRouletteModal() {
      let keyArr = Object.keys(localStorage);
      if (keyArr.length < 2) {
        this.showAlert();
      } else {
        this.$refs.modal.getPoints();
        this.$refs.modal.init();
        this.$refs.modal.drawRouletteWheel();
        this.$refs.modal.openModal();
      }
    },
    showAlert() {
      this.$swal.fire({
        icon: "info",
        title: "請至少加入 2 個景點",
      });
    },
  },
};
</script>

<style lang="scss">
.logoImg {
  height: 45px;
  z-index: 1000;
}

.header {
  background-color: rgba($color: #000002, $alpha: 0.8);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10000;
}

.dropdown-menu {
  min-width: 7.5rem;
  background-color: rgba($color: #000002, $alpha: 0.8);
}

.dropdown-item:hover {
  background: #e98830;
  // color: #000;
  transition: all 0.3s;
}

.swal2-styled.swal2-confirm {
  background-color: #1c6e8c;
  &:focus {
    box-shadow: 0 0 0 3px rgba($color: #1c6e8c, $alpha: 0.5);
  }
}
</style>
