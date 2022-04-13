<template>
  <div>
    <FrontNavbar :isMember="isMember"></FrontNavbar>
    <div class="container-fuild">
      <loading
        :active="isLoading"
        loader="spinner"
        :color="loader.color"
        :width="loader.width"
        :height="loader.height"
        :lock-scroll="loader.lockScroll"
        :is-full-page="loader.isFullPage"
      >
      </loading>
      <section class="container-fuild">
        <div class="banner d-flex align-items-center">
          <div class="container mb-0 mt-3 mb-md-4">
            <h1 class="text-primary fw-bold">好夜台南</h1>
            <p class="fs-3 text-primary">美好夜晚，盡在台南</p>
            <router-link to="/shops/all" class="btn btn-light me-3">
              更多內容
              <span class="material-icons align-middle fs-6">
                arrow_forward
              </span>
            </router-link>
          </div>
        </div>
      </section>
      <section class="container-fuild py-6">
        <div class="container">
          <div class="row">
            <div class="col height-50">
              <h2 class="text-dark text-center fw-bold mb-3">地圖查詢</h2>
              <LeafletComponent></LeafletComponent>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fuild bg-dark py-6">
        <div class="container">
          <h2 class="text-center text-primary mb-3">熱門商家</h2>

          <Swiper
            :member-id="review.MemberID"
            @open-modal="openRouteModal"
          ></Swiper>
        </div>
      </section>
      <section class="container py-6" id="review">
        <div class="row justify-content-center">
          <div class="col-10 col-md-6 col-lg-5">
            <h3 class="h2 text-center">意見回饋</h3>
            <div class="d-flex flex-column align-items-center" v-if="!isMember">
              <h5>登入即可留言</h5>
              <router-link to="/memberlogin" class="btn btn-primary text-center"
                >按此登入</router-link
              >
            </div>
            <form action="#" ref="form" v-else>
              <input
                type="hidden"
                name="memberID"
                id="memberID"
                v-model="review.MemberID"
              />
              <div class="mb-3">
                <label for="memberEmail" class="form-label">會員名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="memberAccount"
                  name="memberAccount"
                  v-model="memberName"
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="type" class="form-label">類別</label
                ><span class="text-danger ms-2">必填</span>
                <select
                  class="form-select"
                  name="type"
                  id="type"
                  v-model="review.Type"
                >
                  <option value="" disabled selected>請選擇類別</option>
                  <option value="推薦商家">推薦商家</option>
                  <option value="店家資訊更新">店家資訊更新</option>
                  <option value="系統回饋">系統錯誤回饋</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="reviewContent" class="form-label">留言</label
                ><span class="text-danger ms-2">必填</span>
                <textarea
                  class="form-control"
                  name="reviewContent"
                  id="reviewContent"
                  cols="20"
                  rows="5"
                  v-model="review.RContent"
                ></textarea>
              </div>
              <div class="form-floating mb-3 text-center">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg w-25"
                  @click.prevent="addWebsiteReview"
                  :disabled="isDisabled"
                >
                  送出
                  <span
                    class="spinner-grow spinner-grow-sm"
                    v-if="isDisabled"
                  ></span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    <FrontFooter></FrontFooter>
    <Roulette ref="modal"></Roulette>
    <RouteModal
      ref="routeModal"
      :routes="memberRoutes"
      :titles="memberRouteTitles"
      :shop-id="shopId"
      @get-routes="getRoutes"
    ></RouteModal>
  </div>
</template>

<script>
import FrontNavbar from "../components/FrontNavbar.vue";
import FrontFooter from "../components/FrontFooter.vue";
import LeafletComponent from "../components/LeafletComponent.vue";
import Roulette from "../components/RouletteModal.vue";
import Swiper from "../components/Swiper.vue";
import RouteModal from "../components/RouteModal.vue";

export default {
  data() {
    return {
      isDisabled: false,
      isMember: false,
      memberName: "",
      review: {
        MemberID: 0,
        Type: "",
        RContent: "",
      },
      memberRoutes: [],
      memberRouteTitles: [],
      isLoading: true,
      loader: {
        width: 150,
        height: 150,
        color: "#fff",
        lockScroll: true,
        isFullPage: true,
      },
      shopId: 0,
    };
  },
  inject: ["emitter"],
  components: {
    FrontNavbar,
    FrontFooter,
    LeafletComponent,
    Swiper,
    Roulette,
    RouteModal,
  },
  methods: {
    openRouletteModal() {
      this.$refs.modal.getPoints();
      this.$refs.modal.init();
      this.$refs.modal.drawRouletteWheel();
      this.$refs.modal.openModal();
    },
    getMemberInfo() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/${this.review.MemberID}`;

      this.$http
        .get(api)
        .then((res) => {
          this.memberName = res.data[0].Name;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addWebsiteReview() {
      this.isDisabled = true;
      const api = `${process.env.VUE_APP_API}/api/websitereview`;

      this.$http
        .post(api, this.review)
        .then(() => {
          this.review.Type = "";
          this.review.RContent = "";
          this.emitter.emit("push-message", {
            style: "success",
            title: "已送出，感謝您的留言",
          });
          this.isDisabled = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    gerMember() {
      let myCookie = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (myCookie === "true") {
        this.isMember = true;
        this.review.MemberID = document.cookie.replace(
          /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        this.getMemberInfo();
      } else {
        this.isMember = false;
      }
    },
    openRouteModal(shopId) {
      this.shopId = shopId;
      this.$refs.routeModal.openModal();
      if (!this.review.MemberID) {
        alert("請先登入");
        this.$router.push("/memberlogin");
      }
    },
    getRoutes() {
      this.memberRouteTitles = [];
      const api = `${process.env.VUE_APP_API}/api/Routes/${this.review.MemberID}`;

      this.$http
        .get(api)
        .then((res) => {
          this.memberRoutes = res.data;
          this.memberRoutes.forEach((item) => {
            this.memberRouteTitles.push({
              title: item.Title,
              routeId: item.RouteID,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.gerMember();
    this.getRoutes();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/banner";
</style>
