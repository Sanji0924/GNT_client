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
    <div class="banner banner-shop d-flex align-items-end mb-6">
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">台南的夜生活都在這裡</h1>
        <p class="fs-3 text-primary">夜來夜好玩</p>
      </div>
    </div>
    <div>
      <h2 class="text-white mb-3">
        所有店家
        <button class="btn btn-light ms-3" @click="showTag">
          <span v-if="!toggleTag">開啟商家標籤</span>
          <span v-else>關閉標籤</span>
        </button>
      </h2>

      <!-- <div class="mb-3">
        <label class="tagLabel mb-2" v-for="(tag, key) in tags" :key="key">
          <input type="checkbox" :value="tag.TagName" class="tagInput" />
          <span class="fs-7">{{ tag.TagName }}</span>
        </label>
      </div> -->
      <div class="row">
        <template v-for="shop in shops">
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
                  <span class="material-icons me-2"> visibility </span>
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
                    <span class="ms-2">{{ shop.score }}</span>
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
                    v-for="tag in shop.tags"
                    :key="tag + shop.tags.length + '123'"
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
      shops: [],
      toggleTag: false,
      tags: [],
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
    getShops() {
      const api = `https://localhost:44333/api/ShopInfoes`;

      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = true;
          this.shops = res.data;
          this.shops.forEach((item, index) => {
            // this.getShopTags(item.ShopID, index);
            this.getShopScore(item.ShopID, index);
          });
          this.isLoading = false;
        })
        .catch(() => {
          // console.dir(err);
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
            this.shops[index].tags = tags;
          });
          // console.log(this.shops);
        })
        .catch(() => {
          // console.dir(err);
        });
    },
    getShopScore(shopId, index) {
      const api = `https://localhost:44333/api/shopreviews/score/${shopId}`;

      this.$http
        .get(api)
        .then((res) => {
          // console.log(res);
          this.shops[index].score = res.data;
        })
        .catch(() => {
          // console.dir(err.response.data.Message);
          this.shops[index].score = "尚未有評分";
        });
    },
    getAllTags() {
      const api = `https://localhost:44333/api/Tag`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.tags = res.data;
        })
        .catch(() => {
          // console.dir(err);
        });
    },
    showTag() {
      this.toggleTag = !this.toggleTag;
    },
  },
  mounted() {
    this.getShops();
    this.getAllTags();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/card";

label {
  padding: 0;
  margin-right: 16px;
  cursor: pointer;
}
input[type="checkbox"] {
  display: none;
}
input[type="checkbox"] + span {
  display: inline-block;
  background-color: transparent;
  padding: 8px 16px;
  border: 1px solid #e98830;
  color: #e98830;
  user-select: none; /* 防止文字被滑鼠選取反白 */
  border-radius: 10px;
}

input[type="checkbox"]:checked + span {
  color: #000002;
  background-color: #e98830;
}
</style>
