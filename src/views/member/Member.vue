<template>
  <div>
    <FrontNavbar :isMember="isMember"></FrontNavbar>
    <div class="container-fuild d-flex justify-content-between bg-white">
      <input type="checkbox" id="checkShow" hidden />

      <section class="container-fuild side side-member bg-white pt-6 px-3">
        <label for="checkShow" class="nav-icon nav-icon-member text-dark">
          <span class="material-icons .arrow"> arrow_forward_ios </span>
        </label>
        <div class="container pt-5 side-area">
          <nav class="nav flex-column side-nav">
            <h3 class="h4 text-dark mb-3">選單</h3>
            <div class="row">
              <ul class="list-unstyled col-12 text-center">
                <li>
                  <router-link to="/" class="d-flex member-menu-link py-2">
                    <span class="material-icons me-2"> house </span>回到首頁
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/member/memberInfo"
                    class="d-flex member-menu-link py-2"
                  >
                    <span class="material-icons me-2"> account_box </span
                    >會員資料
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/member/favorites"
                    class="d-flex member-menu-link py-2"
                  >
                    <span class="material-icons me-2"> favorite_border </span
                    >我的最愛
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/member/routes"
                    class="d-flex member-menu-link py-2"
                  >
                    <span class="material-icons me-2"> mode_of_travel </span
                    >行程規劃
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/member/reviews"
                    class="d-flex member-menu-link py-2"
                  >
                    <span class="material-icons me-2"> description </span
                    >分享紀錄
                  </router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
      <section class="container pt-6">
        <router-view></router-view>
      </section>
    </div>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from "../../components/FrontNavbar.vue";
import FrontFooter from "../../components/FrontFooter.vue";
export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
  data() {
    return {
      isMember: false,
    };
  },
  mounted() {
    let myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)memberToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (myCookie === "true") {
      this.isMember = true;
    } else {
      alert("請先登入");
      this.$router.push("/memberlogin");
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/stylesheet/layout/sidebar";

.member-menu-link {
  color: #000;
  transition: 0.3s;
  position: relative;
  &:hover {
    color: #e98830;
  }
  &::after {
    content: "";
    position: absolute;
    border-bottom: 1px solid transparent;
    width: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  &:hover::after {
    border-bottom: 2px solid #fbaa57;
    width: 100%;
    transition: all 0.4s;
  }
}
</style>
