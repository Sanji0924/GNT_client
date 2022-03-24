<template>
  <div>
    <div class="banner-dessert banner d-flex align-items-end mb-6">
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">深夜裡的甜點店</h1>
        <p class="fs-3 text-primary">來台南當螞蟻人</p>
      </div>
    </div>
    <div>
      <h2 class="text-white mb-3">精選甜點</h2>
      <ul class="list-unstyled d-flex">
        <li>
          <a href="#" class="btn btn-outline-primary me-3">全部</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary me-3">咖啡 / 茶飲</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary me-3">港式</a>
        </li>
        <li>
          <a href="#" class="btn btn-outline-primary">冰果室</a>
        </li>
      </ul>
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 mb-4"
          v-for="dessert in desserts"
          :key="dessert.ShopID"
        >
          <div class="card border-primary rounded-lg w-100 overflow-hidden">
            <div class="position-relative">
              <a href="#" class="card-icon bg-transparent lh-sm">
                <span class="material-icons"> favorite </span>
              </a>
              <div
                class="card-img bg-primary"
                :style="{ backgroundImage: `url(${dessert.Image1})` }"
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
                {{ dessert.Name
                }}<span class="fs-7 badge bg-gray ms-2 lh-sm">甜點</span>
              </h5>
              <ul class="list-unstyled mb-0">
                <li>地址：{{ dessert.Address }}</li>
                <li>低消：{{ dessert.Min }}</li>
              </ul>
            </div>
            <div class="card-footer bg-primary">
              <router-link
                :to="`shop/${dessert.ShopID}`"
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
      desserts: [],
    };
  },
  methods: {
    getDesserts() {
      const api = `https://localhost:44333/api/ShopInfoes/type/dessert`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.desserts = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
  mounted() {
    this.getDesserts();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/card";
</style>
