<template>
  <div class="container pt-6">
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
            <span class="material-icons"> favorite </span>
            <!-- <span class="shop-icon-istrue material-icons"> favorite </span> -->
          </a>
        </div>
        <div
          class="shop-img mb-5"
          :style="{ backgroundImage: `url(${shop.Image1})` }"
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
                class="d-inline text-dark border-1 border-bottom border-dark"
                :href="`tel:+886${shop.Phone}`"
                >{{ shop.Phone }}</a
              >
            </li>
            <li class="d-flex mb-2" v-if="shop.Facebook">
              <span class="material-icons me-1"> public </span>
              FaceBook：<a
                class="d-inline text-dark border-1 border-bottom border-dark"
                :href="`${shop.Facebook}`"
                target="blank"
                >點我前往</a
              >
            </li>
            <li class="d-flex mb-3" v-if="shop.Instagram">
              <span class="material-icons me-1"> camera_alt </span>
              Instagram：<a
                class="d-inline text-dark border-1 border-bottom border-dark"
                :href="`${shop.Instagram}`"
                target="blank"
                >點我前往</a
              >
            </li>
            <li class="d-flex">
              <span class="material-icons me-1"> local_offer </span
              >店家標籤：<span
                v-for="tag in shop.tags"
                :key="tag"
                class="d-flex align-items-center fs-6 badge bg-info ms-2"
                >{{ tag }}</span
              >
            </li>
          </ul>
        </section>
        <section class="mb-5" v-if="shop.notes !== '無'">
          <h3 class="text-white mb-3 d-flex align-items-center">
            <span class="material-icons me-1"> feed </span>商家備註
          </h3>
          <div class="px-3">
            <p class="text-white" v-for="note in shop.notes" :key="note + 123">
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
            <!-- <select
              class="form-select w-25 ms-3 mb-3"
              v-model="memberRoutesTitle"
              @change="addRoute(memberRoutesTitle)"
            >
              <option value="new" selected>建立新的行程</option>
              <option
                :value="item.RouteID"
                v-for="item in memberRoutes"
                :key="item.RouteID"
              >
                {{ item.Title }}
              </option>
            </select> -->
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
                  :disabled="!review.Score || !review.RContent"
                  @click.prevent="addShopReview"
                >
                  送出
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
      shop: {
        notes: [],
      },
      review: {},
      memberRouteTitles: [],
      memberRoutes: [],
      shopReviews: [],
      shopId: 0,
      id: 0,
      isLoading: true,
    };
  },
  watch: {
    shopId() {
      this.isLoading = true;
      this.getShopInfo();
      // console.log("觸發 watch");
    },
  },
  methods: {
    getShopInfo() {
      const { id } = this.$route.params;
      this.shopId = Number(id);
      console.log(this.shopId);
      const api = `https://localhost:44333/api/ShopInfoes/${this.shopId}`;
      this.$http
        .get(api)
        .then((res) => {
          // this.isLoading = true;
          console.log(res);
          // console.log(res.data.Note.split("/"));
          this.shop = res.data[0];
          if (this.shop.TagIds.length > 1) {
            this.shop.tags = res.data[0].TagIds.split(",");
          }
          if (this.shop.Note.length > 1) {
            this.shop.notes = res.data.Note.split("/");
          }
          // this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    getRoutes() {
      this.memberRouteTitles = [];
      const api = `https://localhost:44333/api/Routes/${this.review.MemberID}`;

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
    addShopReview() {
      this.review.ShopID = this.shopId;
      const api = `https://localhost:44333/api/shopreviews`;
      console.log(this.review.MemberID);
      if (!this.review.MemberID) {
        alert("請先登入");
        this.$router.push("/memberLogin");
      } else {
        this.$http
          .post(api, this.review)
          .then((res) => {
            console.log(res);
            alert(res.data);
            this.$refs.swiperReviews.getShopReviews();
            // this.review.Score = 0;
            this.review.RContent = "";
          })
          .catch((err) => {
            console.dir(err);
            alert("您已經在此店家留言過，請至會員後台修改心得");
            this.$refs.form.reset();
          });
      }
    },
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.review.MemberID = Number(memberId);
      console.log(this.review.MemberID);
      this.getRoutes();
    },
    backToPrePage() {
      this.$router.back();
    },
    changePage(id) {
      console.log(id);
      this.shopId = id;
      console.log(this.shopId);
    },
    changeLoading(status) {
      this.isLoading = status;
    },
    openRouteModal() {
      this.$refs.modal.openModal();
      if (!this.review.MemberID) {
        alert("請先登入");
        this.$router.push("/memberlogin");
      }
    },
  },
  mounted() {
    this.getShopInfo();
    this.getMemberID();
    // console.log(this.$router);
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
}
</style>
