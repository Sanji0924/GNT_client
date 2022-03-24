<template>
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
              class="d-flex align-items-center fs-6 badge bg-info ms-2"
              >調酒</span
            >
          </li>
        </ul>
      </section>
      <section class="mb-5" v-if="shop.notes[0] !== '無'">
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
        <h3 class="text-white mb-3 d-flex align-items-center">
          <span class="material-icons me-1"> explore </span>地理位置
          <a href="#" class="btn btn-outline-primary ms-3">加入行程</a>
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4243.307024416957!2d120.20138141180786!3d22.99669524328408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76610fee14bb%3A0xaf06feac97d775ef!2z5L6d6IiK5a6kIEFsd2F5cw!5e0!3m2!1szh-TW!2stw!4v1646055978791!5m2!1szh-TW!2stw"
          width="100%"
          height="250"
          allowfullscreen="true"
          loading="lazy"
          class="rounded-lg"
        ></iframe>
      </section>
      <section class="mb-5">
        <h3
          class="text-white mb-3 d-flex align-items-center justify-content-center"
        >
          <span class="material-icons me-1"> share </span>心得分享
        </h3>
        <SwiperShopReviews></SwiperShopReviews>
      </section>
      <div class="row justify-content-center">
        <section class="col-12 col-md-8 col-lg-6 mb-5">
          <h3
            class="text-white mb-3 d-flex align-items-center justify-content-center"
          >
            <span class="material-icons me-1"> edit </span>撰寫心得
          </h3>
          <form action="#">
            <div class="mb-3">
              <label for="rank" class="form-label text-white">評分</label>
              <select name="rank" id="rank" class="form-select">
                <option selected disabled>請選擇評分</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
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
              ></textarea>
            </div>
            <div class="form-floating mb-3 text-center">
              <button type="submit" class="btn btn-primary btn-lg">送出</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperShopReviews from "../components/SwiperShopReviews.vue";

export default {
  components: {
    SwiperShopReviews,
  },
  data() {
    return {
      shop: {
        notes: [],
      },
    };
  },
  watch: {
    $$route() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  methods: {
    getShopInfo() {
      const { id } = this.$route.params;
      const api = `https://localhost:44333/api/ShopInfoes/${id}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          console.log(res.data.Note.split("/"));

          this.shop = res.data;
          this.shop.notes = res.data.Note.split("/");
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    backToPrePage() {
      this.$router.back();
    },
  },
  mounted() {
    this.getShopInfo();
    console.log(this.$router);
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
  // background-image: url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  max-width: 100%;
  height: 450px;
  border-radius: 20px;
}
</style>
