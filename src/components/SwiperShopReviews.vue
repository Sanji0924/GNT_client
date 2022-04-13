<template>
  <div>
    <p v-if="shopReviews.length == 0" class="fs-5 text-primary text-center">
      尚未有人分享，趕快至下方分享您對這間店的心得
    </p>
    <swiper v-else class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in shopReviews" :key="item.MemberID">
        <div class="card w-100 h-100 border-1 rounded-0">
          <div class="card-body">
            <h5 class="card-title">
              {{ item.MemberInfo.Account }}
            </h5>
            <ul class="list-unstyled d-flex align-items-center text-light mb-2">
              <li>
                <span
                  class="material-icons"
                  v-for="star in item.Score"
                  :key="star"
                >
                  star
                </span>
              </li>
            </ul>
            <p class="card-text">
              {{ item.RContent }}
            </p>
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
  props: ["shopId"],
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 0,
        speed: 2000,
        autoplay: {
          delay: 1000,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        },
      },
      shopReviews: [],
    };
  },
  watch: {
    shopId() {
      this.getShopReviews();
      console.log("觸發元件 watch");
    },
  },
  methods: {
    getShopReviews() {
      const api = `${process.env.VUE_APP_API}/api/shopreviews`;
      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.shopReviews = res.data.filter(
            (item) => item.ShopID == this.shopId
          );
          this.shopReviews.forEach((item, index) => {
            console.log(index, item.MemberInfo.Account);
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    replace(id) {
      this.$emit("change-page", id);
      this.$router.push(`/shops/shop/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 300px;
  width: 80%;
  border: 1px transparent solid;

  .swiper-slide {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
  }
}
</style>
