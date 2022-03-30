<template>
  <div>
    <FrontNavbar :isMember="isMember"></FrontNavbar>
    <div class="container-fuild">
      <section class="container-fuild">
        <div class="banner d-flex align-items-center pt-6">
          <div class="container mb-0 mt-3 mb-md-4">
            <h1 class="text-primary fw-bold">好夜台南</h1>
            <p class="fs-3 text-primary">美好夜晚，盡在台南</p>
            <router-link to="/shops/all" class="btn btn-light me-3">
              更多內容
              <span class="material-icons align-middle fs-6">
                arrow_forward
              </span>
            </router-link>
            <button
              type="button"
              class="btn btn-outline-light"
              @click="openRouletteModal"
            >
              輪盤
            </button>
          </div>
        </div>
      </section>
      <section class="container-fuild pt-6 pb-5">
        <div class="container">
          <div class="row">
            <div class="col height-50">
              <!-- <img src="./assets/images/test.png" alt=""> -->
              <h2 class="text-dark text-center fw-bold mb-3">地圖查詢</h2>
              <!-- <div id="map" style="height: 400px; border-radius: 20px;"></div> -->
              <!-- <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.754303625191!2d120.19892463370536!3d22.99606067684443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77d29e7eda47%3A0x6311bfe025120a1a!2zQmFyIFRDUkMg5YmN56eR57Sv57Sv5L-x5qiC6YOo!5e0!3m2!1szh-TW!2stw!4v1646355265151!5m2!1szh-TW!2stw"
                width="100%"
                height="400"
                class="rounded-lg"
                allowfullscreen=""
                loading="lazy"
              ></iframe> -->
              <LeafletComponent></LeafletComponent>
            </div>
          </div>
        </div>
      </section>
      <section class="container-fuild bg-dark pt-6 pb-5">
        <div class="container">
          <h2 class="text-center text-primary mb-3">熱門商家</h2>
          <Swiper></Swiper>
        </div>
      </section>
      <section class="container pt-6 pb-5" id="review">
        <div class="row justify-content-center">
          <div class="col-10 col-md-6 col-lg-5">
            <h3 class="h2 text-center">意見回饋</h3>
            <form action="#">
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
                  v-model="review.MemberID"
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
              <!-- <div class="mb-3">
                <label for="reviewDate" class="form-label">填寫日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="reviewDate"
                  name="reviewDate"
                  v-model="review.ReviewDate"
                />
              </div> -->
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
                >
                  送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    <!-- <router-view></router-view> -->
    <FrontFooter></FrontFooter>
    <Roulette ref="modal"></Roulette>
  </div>
</template>

<script>
import FrontNavbar from "../components/FrontNavbar.vue";
import FrontFooter from "../components/FrontFooter.vue";
import LeafletComponent from "../components/LeafletComponent.vue";
import Roulette from "../components/RouletteModal.vue";
import Swiper from "../components/Swiper.vue";
// import { EventBus } from "../assets/methods/eventBus";

export default {
  data() {
    return {
      isMember: false,
      memberName: "",
      review: {
        MemberID: 0,
        Type: "",
        RContent: "",
        // ReviewDate: "",
      },
    };
  },
  components: {
    FrontNavbar,
    FrontFooter,
    LeafletComponent,
    Swiper,
    Roulette,
  },
  methods: {
    openRouletteModal() {
      this.$refs.modal.openModal();
    },
    getMemberInfo() {
      const api = `https://localhost:44333/api/websitereview`;

      this.$http
        .post(api, this.review)
        .then((res) => {
          this.isLoading = true;
          alert(res.data);
          this.getForms();
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    addWebsiteReview() {
      const api = `https://localhost:44333/api/websitereview`;

      this.$http
        .post(api, this.review)
        .then((res) => {
          console.log(res);
          // this.isLoading = true;
          // alert(res.data);
          // this.getForms();
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
  mounted() {
    let myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)memberToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (myCookie === "true") {
      this.isMember = true;
    }
    this.review.MemberID = document.cookie.replace(
      /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // EventBus.$on("send", (member) => {
    //   console.log(member);
    //   this.memberName = member;
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/banner";
</style>
