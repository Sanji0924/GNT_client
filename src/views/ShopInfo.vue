<template>
  <div class="container pt-6">
    <!-- <button>Show a group of pictures.</button> -->

    <!-- all props & events -->
    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
    <div class="row justify-content-center">
      <div class="col-12 pt-5">
        <div class="d-flex align-items-center mb-3">
          <a href="#" class="p-2" @click.prevent="backToPrePage">
            <span class="material-icons"> arrow_back_ios </span>
          </a>
          <h1 class="h2 text-white fw-bold me-3">
            {{ shop.Name }}
          </h1>
          <a
            href="#"
            class="shop-icon text-danger rounded-3 d-flex align-items-center"
          >
            <span
              class="shop-icon shop-icon-istrue material-icons"
              v-if="memberFavorites.includes(shop.ShopID)"
              @click.prevent="removeFavorite(shop.ShopID)"
            >
              favorite
            </span>
            <span
              class="shop-icon material-icons"
              v-else
              @click.prevent="addFavorite(shop.ShopID)"
            >
              favorite
            </span>
          </a>
        </div>
        <div
          class="shop-img mb-5"
          :style="{ backgroundImage: `url(${shop.Image1})` }"
          @click="showMultiple"
        ></div>
        <section class="mb-5">
          <h3 class="text-white mb-2 d-flex align-items-center">
            <span class="material-icons me-1"> info </span>商家資訊
          </h3>
          <ul class="list-unstyled bg-light rounded-3 p-3">
            <li class="d-flex mb-2">
              <span class="material-icons me-1"> schedule </span>
              營業時間<br />
              星期一：{{ shop.Monday }} <br />
              星期二：{{ shop.Tuesday }} <br />
              星期三：{{ shop.Wednesday }} <br />
              星期四：{{ shop.Thursday }} <br />
              星期五：{{ shop.Friday }} <br />
              星期六：{{ shop.Saturday }} <br />
              星期日：{{ shop.Sunday }} <br />
            </li>
            <li class="d-flex mb-2 fw-bold">
              <span class="material-icons me-1"> monetization_on </span
              >個人低消：{{ shop.Min }}
            </li>
            <li class="d-flex mb-2">
              <span class="material-icons me-1"> place </span>商家地點：{{
                shop.Address
              }}
            </li>
            <li class="d-flex mb-2">
              <span class="material-icons me-1"> phone </span>聯絡電話：<a
                class="d-inline text-dark border-1 border-bottom border-dark link-hover-opacity"
                :href="`tel:+886${shop.Phone}`"
                >{{ shop.Phone }}</a
              >
            </li>
            <li class="d-flex mb-2" v-if="shop.Facebook">
              <span class="material-icons me-1"> public </span>
              FaceBook：<a
                class="d-inline text-dark border-1 border-bottom border-dark link-hover-opacity"
                :href="`${shop.Facebook}`"
                target="blank"
                >點我前往</a
              >
            </li>
            <li class="d-flex mb-3" v-if="shop.Instagram">
              <span class="material-icons me-1"> camera_alt </span>
              Instagram：<a
                class="d-inline text-dark border-1 border-bottom border-dark link-hover-opacity"
                :href="`${shop.Instagram}`"
                target="blank"
                >點我前往</a
              >
            </li>
            <li class="d-md-flex">
              <div class="d-flex align-items-center mb-1">
                <span class="material-icons me-1"> local_offer </span>店家標籤：
              </div>
              <div class="d-flex flex-wrap">
                <span
                  v-for="tag in shop.tags"
                  :key="tag"
                  class="d-flex align-items-center fs-6 badge bg-info m-1"
                  >{{ tag }}</span
                >
              </div>
            </li>
          </ul>
        </section>
        <section class="mb-5" v-if="shop.notes !== '無'">
          <h3 class="text-white mb-3 d-flex align-items-center">
            <span class="material-icons me-1"> feed </span>商家備註
          </h3>
          <div class="p-3 bg-light rounded-3">
            <p
              class="text-dark mb-0 pb-1"
              v-for="note in shop.notes"
              :key="note + 123"
            >
              {{ note }}
            </p>
          </div>
        </section>
        <section class="mb-5">
          <div>
            <h3 class="text-white mb-3 d-flex align-items-center">
              <span class="material-icons me-1"> explore </span>地理位置
              <a
                href="#"
                class="btn btn-outline-primary ms-3"
                @click.prevent="openRouteModal"
                >加入行程</a
              >
            </h3>
          </div>
          <div
            class="spinner-border text-primary"
            role="status"
            v-if="isLoading"
            style="z-index: 10000"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <keep-alive>
            <LeafletComponentShop
              :id="shop.ShopID"
              ref="map"
              @change-page="changePage"
              @send-loading="changeLoading"
            >
            </LeafletComponentShop>
          </keep-alive>
        </section>
        <section class="mb-5">
          <h3
            class="text-white mb-3 d-flex align-items-center justify-content-center"
          >
            <span class="material-icons me-1"> share </span>心得分享
          </h3>
          <SwiperShopReviews
            ref="swiperReviews"
            :shop-id="shop.ShopID"
            @change-page="changePage"
          ></SwiperShopReviews>
        </section>
        <div class="row justify-content-center">
          <section class="col-12 col-md-8 col-lg-6 mb-5">
            <h3
              class="text-white mb-3 d-flex align-items-center justify-content-center"
            >
              <span class="material-icons me-1"> edit </span>撰寫心得
            </h3>
            <div
              class="d-flex flex-column align-items-center"
              v-if="!review.MemberID"
            >
              <h5 class="text-white">登入即可留下個人心得</h5>
              <router-link to="/memberlogin" class="btn btn-primary text-center"
                >按此登入</router-link
              >
            </div>
            <form action="#" ref="form" v-else>
              <div class="mb-3">
                <label for="rank" class="form-label text-white">評分</label>
                <select
                  name="rank"
                  id="rank"
                  class="form-select"
                  required
                  v-model.number="review.Score"
                >
                  <option :value="0" disabled selected>請選擇評分</option>
                  <option :value="score" v-for="score in 5" :key="score">
                    {{ score }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="shopContent" class="form-label text-white"
                  >留言</label
                >
                <textarea
                  class="form-control"
                  name="shopContent"
                  id="shopContent"
                  cols="20"
                  rows="5"
                  v-model="review.RContent"
                  required
                ></textarea>
              </div>
              <div class="form-floating mb-3 text-center">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  :disabled="isDisabled || !review.RContent || !review.Score"
                  @click.prevent="addShopReview"
                >
                  送出
                  <span
                    class="spinner-grow spinner-grow-sm"
                    v-if="isDisabled"
                  ></span>
                </button>
              </div>
            </form>
          </section>
        </div>
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
import LeafletComponentShop from "../components/LeafletComponentShop.vue";
import SwiperShopReviews from "../components/SwiperShopReviews.vue";
import RouteModal from "../components/RouteModal.vue";

export default {
  props: ["type"],
  components: {
    LeafletComponentShop,
    SwiperShopReviews,
    RouteModal,
  },
  data() {
    return {
      isDisabled: false,
      shop: {
        notes: [],
      },
      tempShop: {},
      review: {},
      memberRouteTitles: [],
      memberRoutes: [],
      memberFavorites: [],
      shopReviews: [],
      shopId: 0,
      id: 0,
      isLoading: true,
      visible: false,
      index: 0, // default: 0
      imgs: [],
    };
  },
  watch: {
    shopId() {
      this.isLoading = true;
      this.getShopInfo();
    },
  },
  inject: ["emitter"],
  methods: {
    getShopInfo() {
      const { id } = this.$route.params;
      this.shopId = Number(id);
      const api = `${process.env.VUE_APP_API}/api/ShopInfoes/${this.shopId}`;
      this.$http
        .get(api)
        .then((res) => {
          this.shop = res.data[0];
          if (this.shop.TagIds.length > 1) {
            this.shop.tags = res.data[0].TagIds.split(",");
          }

          if (this.shop.Note.length > 1) {
            this.shop.notes = res.data[0].Note.split("/");
          } else {
            this.shop.notes = res.data[0].Note;
          }
          console.log(this.shop);
          this.updateClick(this.shop);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateClick(item) {
      this.tempShop = { ...item };
      delete this.tempShop.tags;
      delete this.tempShop.notes;
      this.tempShop.Click += 1;
      const api = `${process.env.VUE_APP_API}/api/ShopInfoes/${this.shopId}`;
      this.$http
        .put(api, this.tempShop)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.dir(err);
        });
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
    addShopReview() {
      this.isDisabled = true;
      this.review.ShopID = this.shopId;
      const api = `${process.env.VUE_APP_API}/api/shopreviews`;
      if (!this.review.MemberID) {
        alert("請先登入");
        this.$router.push("/memberLogin");
      } else {
        this.$http
          .post(api, this.review)
          .then(() => {
            this.emitter.emit("push-message", {
              style: "success",
              title: "已新增，感謝您的留言",
            });
            this.$refs.swiperReviews.getShopReviews();
            this.review.RContent = "";
            this.isDisabled = false;
          })
          .catch((err) => {
            console.dir(err);
            this.emitter.emit("push-message", {
              style: "danger",
              title: "加入店家心得結果",
              content: "您已經在此店家留言過，請至會員後台修改心得",
            });
            this.$refs.form.reset();
          });
      }
    },
    getMemberFavorites() {
      const api = `${process.env.VUE_APP_API}/api/MemberFavorites/${this.review.MemberID}`;

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
      if (!this.review.MemberID) {
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
          MemberID: this.review.MemberID,
          ShopID: shopId,
        };
        this.$http
          .post(api, obj)
          .then(() => {
            if (!this.memberFavorites.includes(shopId)) {
              this.memberFavorites.push(shopId);
              this.emitter.emit("push-message", {
                style: "success",
                title: "已加入我的最愛",
              });
            } else {
              return;
            }
            this.getMemberFavorites();
          })
          .catch((err) => {
            console.dir(err);
          });
      }
    },
    removeFavorite(shopId) {
      const api = `${process.env.VUE_APP_API}/api/MemberFavorites/${this.review.MemberID}/${shopId}`;

      this.$http
        .delete(api)
        .then(() => {
          this.memberFavorites.filter((item, index) => {
            if (item == shopId || this.memberFavorites.includes(item.ShopID)) {
              this.memberFavorites.splice(index, 1);
              this.emitter.emit("push-message", {
                style: "primary",
                title: "已從我的最愛中移除",
              });
            }
          });
          this.getMemberFavorites();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.review.MemberID = Number(memberId);
      this.getRoutes();
    },
    backToPrePage() {
      this.$router.back();
    },
    changePage(id) {
      this.shopId = id;
    },
    changeLoading(status) {
      this.isLoading = status;
    },
    openRouteModal() {
      if (!this.review.MemberID) {
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

    showMultiple() {
      this.imgs = [];
      if (this.shop.Image1 != "") {
        this.imgs.push(this.shop.Image1);
      }
      if (this.shop.Image2 != "") {
        this.imgs.push(this.shop.Image2);
      }
      if (this.shop.Image3 != "") {
        this.imgs.push(this.shop.Image3);
      }
      if (this.shop.Image4 != "") {
        this.imgs.push(this.shop.Image4);
      }
      if (this.shop.Image5 != "") {
        this.imgs.push(this.shop.Image5);
      }
      this.index = 0; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  mounted() {
    this.getShopInfo();
    this.getMemberID();
    this.getMemberFavorites();
    // this.updateClick();
  },
};
</script>

<style lang="scss" scoped>
.shop-icon .material-icons {
  color: #fff;
  &:hover {
    color: #e24623;
    transition: all 0.3s;
  }
}
.shop-icon .shop-icon-istrue {
  color: #e24623;
  &:hover {
    color: #fff;
    transition: all 0.3s;
  }
}
.shop-img {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  max-width: 100%;
  height: 450px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    // transform: scale(1.2, 1.2);
    border: 1px solid #fff;
    transition: all 0.3s;
  }
}
</style>
