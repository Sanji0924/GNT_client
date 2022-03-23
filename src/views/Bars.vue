<template>
  <div>
    <div class="banner banner-bar d-flex align-items-end mb-6">
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">找尋優質的酒吧</h1>
        <p class="fs-3 text-primary">今朝有酒，今朝醉</p>
      </div>
    </div>
    <div>
      <h2 class="text-white mb-3">精選酒吧</h2>
      <ul class="list-unstyled d-flex">
        <li>
          <a href="#" class="btn btn-outline-primary me-3">全部</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary me-3">調酒</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary me-3">日式酒館</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary">精釀啤酒</a>
        </li>
      </ul>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 mb-4"
          v-for="bar in bars"
          :key="bar.ShopID"
        >
          <div class="card border-primary rounded-lg w-100 overflow-hidden">
            <div class="position-relative">
              <a href="#" class="card-icon bg-transparent lh-sm">
                <span class="material-icons"> favorite </span>
              </a>
              <div
                class="card-img bg-primary"
                :style="{ backgroundImage: `url(${bar.Image1})` }"
              ></div>
            </div>
            <div class="card-body">
              <div
                class="fs-7 mb-1 d-flex justify-content-between align-items-center"
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
                {{ bar.Name
                }}<span class="fs-7 badge bg-gray ms-2 lh-sm">調酒</span>
              </h5>
              <ul class="list-unstyled mb-0">
                <li>地址: {{ bar.Address }}</li>
                <li>營業時間: 18:00 - 24:00</li>
              </ul>
            </div>
            <div class="card-footer bg-primary">
              <router-link
                :to="`shop/${bar.ShopID}`"
                class="fs-4 text-center text-dark"
                >查看更多</router-link
              >
              <!-- <a href="./shop.html" class="btn btn-primary btn-lg w-100 rounded-0"
            >查看更多</a
          > -->
            </div>
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
      bars: [],
    };
  },
  methods: {
    getBars() {
      const api = `https://localhost:44333/api/ShopInfoes/type/bar`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.bars = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
  mounted() {
    this.getBars();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/card";
</style>
