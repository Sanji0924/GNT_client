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
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  props: ["memberId"],
  components: {
    Swiper,
    SwiperSlide,
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
      isDisabled: false,
      shops: [],
      memberFavorites: [],
      memberRoutes: [],
      memberRouteTitles: [],
      shopId: 0,
      routeArr: [],
    };
  },
  inject: ["emitter"],
  methods: {
    getShops() {
      const api = `${process.env.VUE_APP_API}/api/ShopInfoes`;

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
      const api = `${process.env.VUE_APP_API}/api/shopreviews/score/${shopId}`;

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
      const api = `${process.env.VUE_APP_API}/api/MemberFavorites/${this.memberId}`;

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
    getMember() {
      let member = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = Number(member);
    },
    addFavorite(shopId) {
      if (!this.memberId) {
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
          MemberID: this.memberId,
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
    },
    openRouteModal(shopId) {
      if (!this.memberId) {
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
        this.shopId = shopId;
        this.$emit("open-modal", this.shopId);
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
    showAlert() {
      this.$swal.fire({
        icon: "info",
        title: "最多只能加入 12 個項目",
      });
    },
  },
  mounted() {
    this.routeArr = Object.keys(localStorage);
    this.getShops();
    this.getMember();
    this.getMemberFavorites();
    setTimeout(() => {}, 1000);
  },
};
</script>

<style lang="scss">
@import "../assets/stylesheet/layout/card";
</style>
