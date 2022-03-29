<template>
  <div>
    <loading
      :active="isLoading"
      loader="spinner"
      :color="loader.color"
      :width="loader.width"
      :height="loader.height"
      :lock-scroll="loader.lockScroll"
      :is-full-page="loader.isFullPage"
    >
    </loading>
    <div class="banner-dessert banner d-flex align-items-end mb-6">
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">深夜裡的甜點店</h1>
        <p class="fs-3 text-primary">來台南當螞蟻人</p>
      </div>
    </div>
    <div>
      <h2 class="text-white mb-3">
        精選甜點
        <button class="btn btn-light ms-3" @click="showTag">
          <span v-if="!toggleTag">開啟商家標籤</span>
          <span v-else>關閉標籤</span>
        </button>
      </h2>
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
        <template v-for="shop in desserts">
          <div
            class="col-12 col-md-6 col-lg-4 mb-4"
            v-if="shop.Enable"
            :key="shop.ShopID"
          >
            <div class="card border-primary rounded-lg w-100 overflow-hidden">
              <div class="position-relative">
                <a href="#" class="card-icon bg-transparent lh-sm">
                  <span class="material-icons"> favorite </span>
                </a>
                <p class="card-browse">
                  <span class="material-icons"> visibility </span>
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
                  {{ shop.Name }}
                </h5>
                <div v-if="toggleTag">
                  <span
                    class="fs-7 fw-light badge bg-info me-1 lh-sm"
                    v-for="(tag, key) in shop.tags"
                    :key="tag + key"
                    >{{ tag }}</span
                  >
                </div>
                <ul class="list-unstyled mb-0">
                  <li>地址：{{ shop.Address }}</li>
                  <li>低消：{{ shop.Min }}</li>
                </ul>
              </div>
              <div class="card-footer bg-primary">
                <router-link
                  :to="`shop/${shop.ShopID}`"
                  class="fs-4 text-center text-dark"
                  >查看更多</router-link
                >
                <!-- <a href="./shop.html" class="btn btn-primary btn-lg w-100 rounded-0"
            >查看更多</a
          > -->
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [],
      toggleTag: false,
      isLoading: true,
      loader: {
        width: 150,
        height: 150,
        color: "#fff",
        lockScroll: true,
        isFullPage: false,
      },
    };
  },
  methods: {
    getDesserts() {
      const api = `https://localhost:44333/api/ShopInfoes/type/dessert`;

      this.$http
        .get(api)
        .then((res) => {
          // console.log(res);
          this.isLoading = true;
          this.desserts = res.data;
          this.desserts.forEach((item, index) => {
            this.getShopTags(item.ShopID, index);
            // console.log(item.TagName);
          });
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    getShopTags(shopId, index) {
      const api = `https://localhost:44333/api/shoptag/${shopId}`;

      this.$http
        .get(api)
        .then((res) => {
          // console.log(res);
          let tags = [];
          res.data.forEach((item) => {
            tags.push(item.TagName);
            this.desserts[index].tags = tags;
          });
          // console.log(this.desserts);
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    showTag() {
      this.toggleTag = !this.toggleTag;
    },
  },
  created() {
    this.getDesserts();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/card";
</style>
