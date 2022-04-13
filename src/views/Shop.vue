<template>
  <div class="container-fulid">
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
    <div
      class="banner d-flex justify-content-center align-items-end mb-6"
      v-if="shopType == 'all'"
    >
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">台南的夜生活都在這裡</h1>
        <p class="fs-3 text-primary">夜來夜好玩</p>
      </div>
    </div>
    <div
      class="banner banner-bar d-flex align-items-end mb-6"
      v-if="shopType == 'bar'"
    >
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">找尋優質的酒吧</h1>
        <p class="fs-3 text-primary">今朝有酒，今朝醉</p>
      </div>
    </div>
    <div
      class="banner-dessert banner d-flex align-items-end mb-6"
      v-if="shopType == 'dessert'"
    >
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">深夜裡的甜點店</h1>
        <p class="fs-3 text-primary">來台南當螞蟻人</p>
      </div>
    </div>
    <div
      class="banner-viewpoint banner d-flex align-items-end mb-6"
      v-if="shopType == 'viewpoint'"
    >
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">夜間景點</h1>
        <p class="fs-3 text-primary">慢下來，一起欣賞台南夜景</p>
      </div>
    </div>
    <div
      class="banner-snack banner d-flex align-items-end mb-6"
      v-if="shopType == 'snack'"
    >
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">宵夜小吃</h1>
        <p class="fs-3 text-primary">快來當台南小吃霸主</p>
      </div>
    </div>
    <div class="container">
      <h2 class="text-white mb-3">
        <span v-if="shopType == 'all'">所有店家</span>
        <span v-else-if="shopType == 'bar'">精選酒吧</span>
        <span v-else-if="shopType == 'dessert'">精選甜點</span>
        <span v-else-if="shopType == 'snack'">精選宵夜</span>
        <span v-else-if="shopType == 'viewpoint'">精選夜景</span>
        <button class="btn btn-primary btn-sm ms-3" @click="showScore">
          <span v-if="!isShowScore">開啟店家評分</span>
          <span v-else>關閉店家評分</span>
        </button>
      </h2>
      <div class="row">
        <template v-for="shop in shops">
          <div
            class="col-12 col-md-6 col-lg-4 mb-4"
            v-if="shop.Enable"
            :key="shop.ShopID"
          >
            <div class="card border-primary rounded-lg w-100 overflow-hidden">
              <div class="position-relative">
                <a href="#" class="card-icon bg-transparent lh-sm">
                  <span
                    class="card-icon-istrue material-icons"
                    v-if="memberFavorites.includes(shop.ShopID)"
                    @click.prevent="removeFavorite(shop.ShopID)"
                  >
                    favorite
                  </span>
                  <span
                    class="material-icons"
                    v-else
                    @click.prevent="addFavorite(shop.ShopID)"
                  >
                    favorite
                  </span>
                </a>

                <p class="card-browse">
                  <span class="material-icons me-2"> visibility </span>
                  <span>{{ shop.Click }}</span>
                </p>
                <div
                  class="card-img bg-primary"
                  :style="{ backgroundImage: `url(${shop.Image1})` }"
                ></div>
              </div>
              <div class="card-body">
                <div
                  class="fs-7 mb-1 d-flex justify-content-between align-items-center"
                >
                  <div class="d-flex align-items-center" v-if="isShowScore">
                    <span class="material-icons text-primary">star</span>
                    <span class="ms-2">{{ shop.score }}</span>
                  </div>
                </div>
                <h5 class="card-title fs-5 fw-bold d-flex align-items-center">
                  {{ shop.Name }}
                </h5>
                <div class="mb-3">
                  <span
                    class="fs-7 fw-light badge bg-info me-1 lh-sm"
                    v-for="tag in shop.tags"
                    :key="tag"
                    >{{ tag }}</span
                  >
                </div>

                <ul class="list-unstyled">
                  <li>地址：{{ shop.Address }}</li>
                  <li>低消：{{ shop.Min }}</li>
                </ul>
              </div>
              <div class="card-footer bg-transparent border-0">
                <div class="d-flex">
                  <button
                    type="button"
                    class="btn btn-outline-info bg-transparnt d-flex align-items-center lh-base me-3"
                    @click.prevent="addRoulette(shop.ShopID, shop.Name)"
                    :disabled="isDisabled"
                  >
                    <span class="material-icons fs-6 me-1">add</span>加入輪盤
                  </button>
                  <a
                    href="#"
                    class="btn btn-outline-primary bg-transparnt d-flex align-items-center lh-base"
                    @click.prevent="openRouteModal(shop.ShopID)"
                  >
                    <span class="material-icons fs-6 me-1">add</span>加入行程
                  </a>
                </div>
              </div>
              <div class="card-footer bg-primary">
                <router-link
                  :to="`shop/${shop.ShopID}`"
                  class="fs-4 text-center text-dark"
                  >查看更多</router-link
                >
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <RouteModal
      ref="modal"
      :routes="memberRoutes"
      :titles="memberRouteTitles"
      :shop-id="shopId"
      @get-routes="getRoutes"
    ></RouteModal>
  </div>
</template>

<script>
import RouteModal from "../components/RouteModal.vue";

export default {
  props: ["allShops", "shopType"],
  components: {
    RouteModal,
  },
  data() {
    return {
      shops: [],
      isDisabled: false,
      isLoading: false,
      loader: {
        width: 150,
        height: 150,
        color: "#fff",
        lockScroll: true,
        isFullPage: false,
      },
      memberID: 0,
      memberRoutes: [],
      memberRouteTitles: [],
      memberFavorites: [],
      shopId: 0,
      isShowScore: false,
      routeArr: [],
    };
  },
  inject: ["emitter"],
  methods: {
    getMember() {
      let member = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = Number(member);
    },
    getMemberFavorites() {
      const api = `${process.env.VUE_APP_API}/api/MemberFavorites/${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          res.data.forEach((item) => {
            if (!this.memberFavorites.includes(item.ShopID)) {
              this.memberFavorites.push(item.ShopID);
            } else {
              return;
            }
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addFavorite(shopId) {
      if (!this.memberID) {
        // alert("請先登入");
        this.$swal
          .fire({
            icon: "info",
            title: "請先登入",
            showCancelButton: true,
            confirmButtonText: "登入",
            cancelButtonText: "關閉",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/memberlogin");
            }
          });
      } else {
        const api = `${process.env.VUE_APP_API}/api/MemberFavorites`;
        let obj = {
          MemberID: this.memberID,
          ShopID: shopId,
        };
        this.$http
          .post(api, obj)
          .then(() => {
            if (!this.memberFavorites.includes(shopId)) {
              this.memberFavorites.push(shopId);
            } else {
              return;
            }
            this.getMemberFavorites();
            this.emitter.emit("push-message", {
              style: "success",
              title: "已加入我的最愛",
            });
          })
          .catch((err) => {
            console.dir(err);
          });
      }
    },
    removeFavorite(shopId) {
      const api = `${process.env.VUE_APP_API}/api/MemberFavorites/${this.memberID}/${shopId}`;

      this.$http
        .delete(api)
        .then(() => {
          this.memberFavorites.filter((item, index) => {
            if (item == shopId || this.memberFavorites.includes(item.ShopID)) {
              this.memberFavorites.splice(index, 1);
            }
          });
          this.getMemberFavorites();
          this.emitter.emit("push-message", {
            style: "primary",
            title: "已從我的最愛中移除",
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addRoulette(id, name) {
      this.routeArr = Object.keys(localStorage);
      this.isDisabled = true;
      if (localStorage.length >= 12) {
        this.showAlert();
      } else {
        if (this.routeArr.includes(`${id}`)) {
          this.emitter.emit("push-message", {
            style: "primary",
            title: "此店家已經有囉",
          });
        } else {
          this.emitter.emit("push-message", {
            style: "success",
            title: "已加入隨機輪盤",
          });
          localStorage.setItem(id, name);
          this.routeArr = Object.keys(localStorage);
        }
      }
      this.isDisabled = false;
    },
    openRouteModal(shopId) {
      this.shopId = shopId;
      if (!this.memberID) {
        // alert("請先登入");
        this.$swal
          .fire({
            icon: "info",
            title: "請先登入",
            showCancelButton: true,
            confirmButtonText: "登入",
            cancelButtonText: "關閉",
          })
          .then((result) => {
            if (result.isConfirmed) {
              this.$router.push("/memberlogin");
            }
          });
      } else {
        this.$refs.modal.openModal();
      }
    },
    getRoutes() {
      this.memberRouteTitles = [];
      const api = `${process.env.VUE_APP_API}/api/Routes/${this.memberID}`;

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
    showScore() {
      this.isShowScore = !this.isShowScore;
    },
    showAlert() {
      this.$swal.fire({
        icon: "info",
        title: "最多只能加入 12 個項目",
      });
    },
  },
  watch: {
    allShops() {
      this.shops = this.allShops;
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
    this.getMember();
    this.getMemberFavorites();
    this.getRoutes();
  },
};
</script>

<style lang="scss">
@import "../assets/stylesheet/layout/card";

.swal2-styled.swal2-confirm {
  background-color: #1c6e8c !important;
  &:focus {
    box-shadow: 0 0 0 3px rgba($color: #1c6e8c, $alpha: 0.5) !important;
  }
}
</style>
