<template>
  <div>
    <FrontNavbar
      :isMember="isMember"
      @get-type-shops="getShops"
      @get-all-shops="getAllShops"
    ></FrontNavbar>
    <div class="container-fuild bg-dark position-relative">
      <label
        for="checkShow"
        class="nav-icon nav-icon-out text-dark"
        v-if="this.$router.history.current.fullPath == '/shops/all'"
      >
        <span class="material-icons arrow"> arrow_forward_ios </span>
      </label>
      <input type="checkbox" id="checkShow" hidden />
      <section
        class="container-fuild side bg-white pt-6"
        id="sideBar"
        v-if="this.$router.history.current.fullPath == '/shops/all'"
      >
        <label for="checkShow" class="nav-icon text-dark me-0">
          <span class="material-icons arrow"> arrow_forward_ios </span>
        </label>
        <div class="container pt-5 side-area px-3">
          <form action="#" class="mb-2">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="keyword"
                placeholder="請輸入關鍵字"
                v-model="search.name"
              />
            </div>
            <div class="row mb-3">
              <div class="col-7 align-items-center">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="search.address"
                >
                  <option value="" selected disabled>請選擇地區</option>
                  <option :value="area" v-for="area in areas" :key="area">
                    {{ area }}
                  </option>
                </select>
              </div>
              <div class="col-5">
                <button
                  type="button"
                  class="btn btn-outline-primary w-100 mt-md-0"
                  @click.prevent="
                    searchShops(
                      searchTags.join(','),
                      search.address,
                      search.name,
                      search.type
                    )
                  "
                >
                  搜尋
                </button>
              </div>
            </div>
          </form>
          <section>
            <!-- <h3 class="h4 text-dark mb-3">精選主題</h3>
            <div class="row">
              <div class="col-12 mb-3">
                <a
                  href="/shops/all"
                  class="link-hover-opacity"
                  @click.prevent="getAllShops"
                >
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                    style="max-height: 125px"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1627481958426-3f165fcdd3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                      class="img-fluid overflow-hidden rounded-5"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">全部主題</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-6 mb-3">
                <a
                  href="/shops/bars"
                  class="link-hover-opacity"
                  @click.prevent="getShops('bar')"
                >
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1563282396-c299392870cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      class="img-fluid overflow-hidden rounded-5"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">酒吧</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-6 mb-3">
                <a
                  href="/shops/snacks"
                  class="link-hover-opacity"
                  @click.prevent="getShops('snack')"
                >
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1533970526352-9c6c0d239190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      class="img-fluid"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">
                        宵夜<br />小吃
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-6 mb-3">
                <a
                  href="/shops/desserts"
                  class="link-hover-opacity"
                  @click.prevent="getShops('dessert')"
                >
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1541592391523-5ae8c2c88d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      class="img-fluid"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">
                        咖啡<br />甜點
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-6 mb-3">
                <a
                  href="/shops/nightviews"
                  class="link-hover-opacity"
                  @click.prevent="getShops('viewpoint')"
                >
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1506747111041-18b1844bf60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                      class="img-fluid"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">
                        夜間<br />景點
                      </h5>
                    </div>
                  </div>
                </a>
              </div>
            </div> -->
            <h3 class="h4 text-dark mb-2">商家標籤</h3>
            <div class="mb-3">
              <label
                class="tagLabel mb-2 me-2"
                v-for="(tag, key) in tags"
                :key="key"
              >
                <input
                  type="checkbox"
                  :value="tag.Tag1"
                  class="tagInput"
                  v-model="searchTags"
                />
                <span class="fs-7">{{ tag.TagName }}</span>
              </label>
            </div>
          </section>
          <!-- </nav> -->
        </div>
      </section>
      <section>
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
        <keep-alive>
          <router-view
            :all-shops="shops"
            :shop-type="shopType"
            :key="$route.fullPath"
          >
          </router-view>
        </keep-alive>
      </section>
    </div>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from "../components/FrontNavbar.vue";
import FrontFooter from "../components/FrontFooter.vue";
export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
  data() {
    return {
      areas: [
        "東區",
        "南區",
        "中西區",
        "北區",
        "永康",
        "安平",
        "安南",
        "仁德",
        "歸仁",
        "新營",
        "白河",
        "麻豆",
        "下營",
        "六甲",
        "官田",
        "佳里",
        "學甲",
        "新市",
        "善化",
        "關廟",
        "龍崎",
      ],
      isMember: false,
      tags: [],
      shopType: "",
      shops: [],
      isLoading: true,
      loader: {
        width: 150,
        height: 150,
        color: "#fff",
        lockScroll: true,
        isFullPage: false,
      },
      search: {
        // tags: [],
        address: "",
        name: "",
        type: "",
      },
      searchTags: [],
    };
  },
  watch: {
    searchTags() {
      this.searchShops(this.searchTags.join(","));
    },
  },
  methods: {
    getMember() {
      let myCookie = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (myCookie === "true") {
        this.isMember = true;
      }
    },
    getAllTags() {
      const api = `https://localhost:44333/api/Tag`;

      this.$http
        .get(api)
        .then((res) => {
          this.tags = res.data;
        })
        .catch(() => {});
    },
    getAllShops() {
      console.log(this.$router.history.current.fullPath);

      const api = `https://localhost:44333/api/ShopInfoes`;
      this.shopType = "all";

      this.$http
        .get(api)
        .then((res) => {
          this.shops = res.data;
          this.shops.forEach((item, index) => {
            this.shops[index].tags = item.TagIds.split(",");
            this.getShopScore(item.ShopID, index);
          });
          this.isLoading = false;
          console.log(this.shops);
        })
        .catch(() => {});
    },
    getShops(type) {
      const api = `https://localhost:44333/api/ShopInfoes/type/${type}`;
      this.shopType = type;

      this.$http
        .get(api)
        .then((res) => {
          this.shops = res.data;
          this.shops.forEach((item, index) => {
            this.shops[index].tags = item.TagIds.split(",");
            this.getShopScore(item.ShopID, index);
          });
        })
        .catch(() => {});
    },
    getShopScore(shopId, index) {
      const api = `https://localhost:44333/api/shopreviews/score/${shopId}`;

      this.$http
        .get(api)
        .then((res) => {
          this.shops[index].score = res.data;
        })
        .catch(() => {
          this.shops[index].score = "尚未有評分";
        });
    },
    searchShops(tag, address, name, type) {
      if (!tag) {
        tag = "null";
      }
      if (!address) {
        address = "null";
      }
      if (!name) {
        name = "null";
      }
      if (!type) {
        type = "null";
      }
      let api = `https://localhost:44333/api/ShopInfoes/search?tag=${tag}&address=${address}&name=${name}&type=${type}`;
      console.log(api);
      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.shops = res.data;
          this.shops.forEach((item, index) => {
            this.shops[index].tags = item.TagIds.split(",");
            this.getShopScore(item.ShopID, index);
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.isLoading = true;
    this.getAllShops();
    this.getMember();
    this.getAllTags();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>

<style lang="scss" scope>
@import "../assets/stylesheet/layout/sidebar";
@import "../assets/stylesheet/layout/banner";
@import "../assets/stylesheet/layout/card";
.logoImg {
  height: 45px;
  z-index: 1000;
}
.link-hover-opacity {
  &:hover {
    opacity: 0.7;
    transition: all 0.3s;
  }
}
</style>
