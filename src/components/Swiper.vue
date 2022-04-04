<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide
        class="rounded-5 border-primary border-2"
        v-for="shop in shops"
        :key="shop.ShopID"
      >
        <div class="mb-4" v-if="shop.Enable" :key="shop.ShopID">
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
                :to="`/shops/shop/${shop.ShopID}`"
                class="fs-4 text-center text-dark"
                >查看更多</router-link
              >
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide> -->
      <!-- <RouteModal
        ref="modal"
        :routes="memberRoutes"
        :titles="memberRouteTitles"
        :shop-id="shopId"
        @get-routes="getRoutes"
      ></RouteModal> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import RouteModal from "../components/RouteModal.vue";

export default {
  props: ["memberId"],
  components: {
    Swiper,
    SwiperSlide,
    // RouteModal,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
      shops: [],
      memberFavorites: [],
      memberRoutes: [],
      memberRouteTitles: [],
      shopId: 0,
    };
  },
  methods: {
    getShops() {
      const api = `https://localhost:44333/api/ShopInfoes`;

      this.$http
        .get(api)
        .then((res) => {
          this.shops = res.data.filter((item) => {
            return item.Click > 10;
          });
          this.shops.forEach((item, index) => {
            this.shops[index].tags = item.TagIds.split(",");
            this.getShopScore(item.ShopID, index);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getShopScore(shopId, index) {
      const api = `https://localhost:44333/api/shopreviews/score/${shopId}`;

      this.$http
        .get(api)
        .then((res) => {
          this.shops[index].score = res.data;
        })
        .catch((err) => {
          this.shops[index].score = err.response.data.Message;
          console.dir(err);
        });
    },
    getMemberFavorites() {
      const api = `https://localhost:44333/api/MemberFavorites/${this.memberId}`;

      this.$http
        .get(api)
        .then((res) => {
          res.data.forEach((item) => {
            if (!this.memberFavorites.includes(item.ShopID)) {
              this.memberFavorites.push(item.ShopID);
            } else {
              return;
            }
            console.log(this.memberFavorites);
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getMember() {
      let member = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = Number(member);
    },
    addFavorite(shopId) {
      const api = `https://localhost:44333/api/MemberFavorites`;
      let obj = {
        MemberID: this.memberId,
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
      this.$emit("open-modal", this.shopId);
      // this.$refs.modal.openModal();
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
  mounted() {
    this.getShops();
    this.getMember();
    this.getMemberFavorites();
    setTimeout(() => {}, 1000);
  },
};
</script>

<style lang="scss">
@import "../assets/stylesheet/layout/card";

// label {
//   padding: 0;
//   margin-right: 16px;
//   cursor: pointer;
// }
// input[type="checkbox"] {
//   display: none;
// }
// input[type="checkbox"] + span {
//   display: inline-block;
//   background-color: transparent;
//   padding: 8px 16px;
//   border: 1px solid #e98830;
//   color: #e98830;
//   user-select: none; /* 防止文字被滑鼠選取反白 */
//   border-radius: 10px;
// }

// input[type="checkbox"]:checked + span {
//   color: #000002;
//   background-color: #e98830;
// }
</style>
