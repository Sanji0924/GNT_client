<template>
  <div class="container-fulid">
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
    <div class="banner banner-bar d-flex align-items-end mb-6">
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">找尋優質的酒吧</h1>
        <p class="fs-3 text-primary">今朝有酒，今朝醉</p>
      </div>
    </div>
    <div class="container">
      <h2 class="text-white mb-3">精選酒吧</h2>
      <div class="row">
        <!-- eslint-disable -->
        <template v-for="shop in bars">
          <div
            class="col-12 col-md-6 col-lg-4 mb-4"
            v-if="shop.Enable"
            :key="shop.ShopID"
          >
            <div class="card border-primary rounded-lg w-100 overflow-hidden">
              <div class="position-relative">
                <a href="#" class="card-icon bg-transparent lh-sm">
                  <span
                    class="card-icon-istrue material-icons"
                    v-if="memberFavorites.includes(shop.ShopID)"
                    @click.prevent="removeFavorite(shop.ShopID)"
                  >
                    favorite
                  </span>
                  <span
                    class="material-icons"
                    v-else
                    @click.prevent="addFavorite(shop.ShopID)"
                  >
                    favorite
                  </span>
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
                <div class="mb-3">
                  <span
                    class="fs-7 fw-light badge bg-info me-1 lh-sm"
                    v-for="tag in shop.tags"
                    :key="tag"
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
              </div>
            </div>
          </div>
        </template>
        <!-- eslint-disable -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      bars: [],
      memberID: 0,
      memberFavorites: [],
      isLoading: true,
      loader: {
        width: 150,
        height: 150,
        color: "#fff",
        lockScroll: true,
        isFullPage: true
      }
    };
  },
  methods: {
    getBars() {
      const api = `https://localhost:44333/api/ShopInfoes/type/bar`;

      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = true;
          this.bars = res.data;
          this.bars.forEach((item, index) => {
            this.bars[index].tags = item.TagIds.split(",");
            this.getShopScore(item.ShopID, index);
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getShopScore(shopId, index) {
      const api = `https://localhost:44333/api/shopreviews/score/${shopId}`;

      this.$http
        .get(api)
        .then((res) => {
          // console.log(res);
          this.bars[index].score = res.data;
        })
        .catch(() => {
          // console.dir(err.response.data.Message);
          this.bars[index].score = "尚未有評分";
        });
    },
    getMember() {
      let member = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = Number(member);
    },
    getMemberFavorites() {
      const api = `https://localhost:44333/api/MemberFavorites/${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          res.data.forEach((item) => {
            if (!this.memberFavorites.includes(item.ShopID)) {
              this.memberFavorites.push(item.ShopID);
            } else {
              return;
            }
          });
          console.log(this.memberFavorites);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    addFavorite(shopId) {
      const api = `https://localhost:44333/api/MemberFavorites`;
      let obj = {
        MemberID: this.memberID,
        ShopID: shopId
      };

      this.$http
        .post(api, obj)
        .then((res) => {
          if (!this.memberFavorites.includes(shopId)) {
            this.memberFavorites.push(shopId);
          } else {
            return;
          }
          this.getMemberFavorites();
          alert(res.data);
        })
        .catch(() => {
          // console.dir(err);
          alert("此商家已經被加過囉");
        });
    },
    removeFavorite(shopId) {
      const api = `https://localhost:44333/api/MemberFavorites/${this.memberID}/${shopId}`;

      this.$http
        .delete(api)
        .then((res) => {
          this.memberFavorites.filter((item, index) => {
            if (item == shopId || this.memberFavorites.includes(item.ShopID)) {
              this.memberFavorites.splice(index, 1);
            }
          });
          this.getMemberFavorites();
          alert(res.data);
        })
        .catch(() => {
          // console.dir(err);
          alert("此商家已經被加過囉");
        });
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    this.getBars();
    this.getMember();
    this.getMemberFavorites();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheet/layout/card";
</style>
