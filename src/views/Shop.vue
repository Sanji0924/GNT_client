<template>
  <div>
    <div class="banner banner-shop d-flex align-items-end mb-6">
      <div class="container mb-4">
        <h1 class="text-primary fw-bold">台南的夜生活都在這裡</h1>
        <p class="fs-3 text-primary">夜來夜好玩</p>
      </div>
    </div>
    <div>
      <h2 class="text-white mb-3">所有店家</h2>
      <div class="mb-3">
        <label>
          <input type="checkbox" value="調酒" />
          <span>調酒</span>
        </label>
        <label>
          <input type="checkbox" value="餐酒館" />
          <span>餐酒館</span>
        </label>
        <label>
          <input type="checkbox" value="水果特調" />
          <span>水果特調</span>
        </label>
        <label>
          <input type="checkbox" value="輕酒精" />
          <span>輕酒精</span>
        </label>
      </div>
      <!-- <ul class="list-unstyled d-flex">
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
      </ul> -->
      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-4 mb-4"
          v-for="shop in shops"
          :key="shop.ShopID"
        >
          <div class="card border-primary rounded-lg w-100 overflow-hidden">
            <div class="position-relative">
              <a href="#" class="card-icon bg-transparent lh-sm">
                <span class="material-icons"> favorite </span>
              </a>
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
                {{ shop.Name
                }}<span class="fs-7 badge bg-gray ms-2 lh-sm">調酒</span>
              </h5>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shops: [],
    };
  },
  methods: {
    getShops() {
      const api = `https://localhost:44333/api/ShopInfoes`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.shops = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
  mounted() {
    this.getShops();
    // console.log(this.$route.params.type);
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
