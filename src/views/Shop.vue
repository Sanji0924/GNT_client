<template>
  <div class="container-fulid">
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
      <h2 class="text-white mb-3">所有店家</h2>
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
                  <div class="d-flex align-items-center">
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
                  <a
                    href="#"
                    class="btn btn-outline-info bg-transparnt d-flex align-items-center lh-base me-3"
                    @click.prevent="addRoulette(shop.ShopID, shop.Name)"
                  >
                    <span class="material-icons fs-6 me-1">add</span>加入輪盤
                  </a>
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
    };
  },
  methods: {
    getShops() {
      const api = `https://localhost:44333/api/ShopInfoes`;

      this.$http
        .get(api)
        .then((res) => {
          // this.isLoading = true;
          this.shops = res.data;
          this.shops.forEach((item, index) => {
            this.shops[index].tags = item.TagIds.split(",");
            this.getShopScore(item.ShopID, index);
          });
        })
        .catch(() => {
          // console.dir(err);
        });
    },
    getShopScore() {
      let api = `https://localhost:44333/api/shopreviews/score`;

      this.shops.forEach((item, index) => {
        api = `https://localhost:44333/api/shopreviews/score/${item.ShopID}`;
        this.$http
          .get(api)
          .then((res) => {
            this.shops[index].score = res.data;
          })
          .catch(() => {
            this.shops[index].score = "尚未有評分";
          });
      });
    },
    addRoute(id) {
      const api = `https://localhost:44333/api/Routes/${id}`;

      this.$http
        .post(api)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMember() {
      let member = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = Number(member);
    },
    getMemberFavorites() {
      const api = `https://localhost:44333/api/MemberFavorites/${this.memberID}`;

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
      const api = `https://localhost:44333/api/MemberFavorites`;
      let obj = {
        MemberID: this.memberID,
        ShopID: shopId,
      };
      this.$http
        .post(api, obj)
        .then((res) => {
          if (!this.memberFavorites.includes(shopId)) {
            this.memberFavorites.push(shopId);
          } else {
            return;
          }
          // this.memberFavorites = [];
          this.getMemberFavorites();
          alert(res.data);
        })
        .catch(() => {
          // console.dir(err);
          alert("此商家已經被加過囉");
        });
    },
    removeFavorite(shopId) {
      const api = `https://localhost:44333/api/MemberFavorites/${this.memberID}/${shopId}`;

      this.$http
        .delete(api)
        .then((res) => {
          this.memberFavorites.filter((item, index) => {
            if (item == shopId || this.memberFavorites.includes(item.ShopID)) {
              this.memberFavorites.splice(index, 1);
            }
          });
          this.getMemberFavorites();
          alert(res.data);
        })
        .catch(() => {
          // console.dir(err);
          alert("此商家已經被加過囉");
        });
    },
    addRoulette(id, name) {
      if (localStorage.length >= 13) {
        alert("最多只能加入 12 個輪盤項目");
      } else {
        localStorage.setItem(id, name);
        alert("已加入隨機輪盤");
      }
    },
    openRouteModal(shopId) {
      this.shopId = shopId;
      this.$refs.modal.openModal();
      if (!this.memberID) {
        alert("請先登入");
        this.$router.push("/memberlogin");
      }
    },
    getRoutes() {
      this.memberRouteTitles = [];
      const api = `https://localhost:44333/api/Routes/${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
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
  watch: {
    allShops() {
      this.shops = this.allShops;
    },
  },
  mounted() {
    // this.getShops();
    this.getMember();
    this.getMemberFavorites();
    this.getRoutes();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/card";
</style>
