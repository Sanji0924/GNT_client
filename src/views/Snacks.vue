<template>
  <div>
    <div class="banner-snack banner d-flex align-items-end mb-6">
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">宵夜小吃</h1>
        <p class="fs-3 text-primary">快來當台南小吃霸主</p>
      </div>
    </div>
    <div>
      <h2 class="text-white mb-3">精選宵夜</h2>
      <ul class="list-unstyled d-flex">
        <li>
          <a href="#" class="btn btn-outline-primary me-3">全部</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary me-3">居酒屋</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary me-3">燒烤</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary">台式小吃</a>
        </li>
      </ul>
    </div>
    <div class="row">
      <div
        class="col-12 col-md-6 col-lg-4 mb-4"
        v-for="snack in snacks"
        :key="snack.ShopID"
      >
        <div class="card border-primary rounded-lg w-100 overflow-hidden">
          <div class="position-relative">
            <a href="#" class="card-icon bg-transparent lh-sm">
              <span class="material-icons"> favorite </span>
            </a>
            <div
              class="card-img bg-primary"
              :style="{ backgroundImage: `url(${snack.Image1})` }"
            ></div>
          </div>
          <div class="card-body">
            <div
              class="fs-7 mb-0 d-flex justify-content-between align-items-center"
            >
              <div class="d-flex align-items-center">
                <span class="material-icons text-primary">star</span>
                <span class="ms-2">4.5</span>
              </div>
              <div>
                <a
                  href="#"
                  class="btn btn-outline-primary bg-transparnt d-flex align-items-center lh-base"
                >
                  <span class="material-icons fs-6 me-1">add</span>加入行程
                </a>
              </div>
            </div>
            <h5 class="card-title fs-5 fw-bold d-flex align-items-center">
              {{ snack.Name
              }}<span class="fs-7 badge bg-gray ms-2 lh-sm">小吃</span>
            </h5>
            <ul class="list-unstyled mb-0">
              <li>地址: {{ snack.Address }}</li>
              <li>營業時間: 18:00 - 24:00</li>
            </ul>
          </div>
          <div class="card-footer bg-primary">
            <router-link
              :to="`shop/${snack.ShopID}`"
              class="fs-4 text-center text-dark"
              >查看更多</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snacks: [],
    };
  },
  methods: {
    getSnacks() {
      const api = `https://localhost:44333/api/ShopInfoes/type/snack`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.snacks = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
  mounted() {
    this.getSnacks();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/card";
</style>
