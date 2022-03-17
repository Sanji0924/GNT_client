<template>
  <div class="container-fuild d-flex justify-content-between bg-white">
    <input type="checkbox" id="checkShow" hidden />
    <section class="container-fuild side side-member bg-white pt-6 px-3">
      <div class="container pt-5 side-area">
        <nav class="nav flex-column side-nav">
          <label
            for="checkShow"
            class="nav-icon nav-icon-member text-dark d-flex"
          >
            <span class="material-icons"> arrow_forward_ios </span>
          </label>
          <form action="#" class="mb-3">
            <div class="mb-3 d-flex flex-column">
              <input
                type="text"
                class="form-control mb-3"
                id="keyword"
                placeholder="輸入關鍵字搜尋"
              />
              <button type="button" class="btn btn-gray">搜尋</button>
            </div>
          </form>
          <h3 class="h4 text-dark mb-3">類別</h3>
          <div class="row">
            <ul class="list-unstyled col-12 text-center">
              <li>
                <a href="./index.html" class="d-flex admin-side-menu-link py-2">
                  <span class="material-icons me-2"> analytics </span>全部
                </a>
              </li>
              <li>
                <a href="./index.html" class="d-flex admin-side-menu-link py-2">
                  <span class="material-icons me-2"> analytics </span>會員
                </a>
              </li>
              <li>
                <a
                  href="./memberInfo.html"
                  class="d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> analytics </span>店家
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="container w-100 pt-6">
      <h1 class="h2 mb-5 mt-5">後台數據分析</h1>
      <div class="row">
        <div class="col-12 col-md-6 mb-5">
          <h4 class="text-center">會員性別比</h4>
          <!-- <div id="chart"></div> -->
          <vue-c3 :handler="handler"></vue-c3>
        </div>
        <div class="col-12 col-md-6 mb-5">
          <h4 class="text-center">商家被儲存的前三名</h4>
          <!-- <div id="chartShop"></div> -->
          <vue-c3 :handler="handler2"></vue-c3>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import VueC3 from "vue-c3";
import "c3/c3.min.css";

export default {
  components: {
    VueC3,
  },
  data() {
    return {
      handler: new Vue(),
      handler2: new Vue(),
    };
  },
  methods: {
    getData() {
      const options = {
        data: {
          columns: [
            ["男性", 30],
            ["女性", 120],
            ["其他", 50],
          ],
          type: "donut",
        },
        donut: {
          title: "會員性別比",
        },
        color: {
          pattern: ["#588b8b", "#edc79b", "#92DCE5"],
        },
      };
      this.handler.$emit("init", options);
    },
    getData2() {
      const options = {
        data: {
          columns: [
            ["XXX店", 100],
            ["OOO店", 70],
            ["YYY店", 20],
          ],
          type: "donut",
        },
        donut: {
          title: "商家被儲存的前三名",
        },
        color: {
          pattern: ["#efeeb4", "#58b368", "#dad873"],
        },
      };
      this.handler2.$emit("init", options);
    },
  },
  mounted() {
    this.getData();
    this.getData2();
  },
};
</script>
