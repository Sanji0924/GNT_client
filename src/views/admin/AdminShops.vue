<template>
  <div
    class="container-fuild d-flex justify-content-between bg-white"
    ref="shopInfo"
  >
    <input type="checkbox" id="checkShow" hidden />
    <section
      class="container-fuild side side-admin side-member bg-white pt-6 px-3"
    >
      <div class="container pt-5 side-area">
        <nav class="nav flex-column side-nav">
          <label
            for="checkShow"
            class="nav-icon nav-icon-admin nav-icon-member text-dark d-flex"
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
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getShops()"
                >
                  <span class="material-icons me-2"> place </span>全部
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getShops('bar')"
                >
                  <span class="material-icons me-2"> place </span>酒吧
                </a>
              </li>
              <li>
                <a
                  tp="#"
                  class="d-flex admin-side-menu-link py-2"
                  @click.prevent="getShops('dessert')"
                >
                  <span class="material-icons me-2"> place </span>咖啡甜點
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getShops('snack')"
                >
                  <span class="material-icons me-2"> place </span>小吃宵夜
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getShops('viewpoint')"
                >
                  <span class="material-icons me-2"> place </span>夜間景點
                </a>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown text-dark admin-side-menu-link d-flex align-items-center py-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="material-icons me-2"> place </span>
                  啟用狀態<span class="material-icons"> expand_more </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-center px-2"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                      @click.prevent="getEnableShops('true')"
                    >
                      <span class="material-icons me-2"> edit </span>啟用
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                      @click.prevent="getEnableShops('false')"
                    >
                      <span class="material-icons me-2"> edit </span>未啟用
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="container w-100 pt-6">
      <div class="d-flex justify-content-between mb-5 mt-5">
        <h1 class="h2">店家資料管理</h1>
        <button
          type="button"
          class="btn btn-primary d-flex align-items-center"
          @click="openShopModal('new')"
        >
          新增店家
        </button>
      </div>
      <div class="table-responsive-md">
        <table
          class="table align-middle table-hover table-striped table-favorite"
        >
          <thead>
            <tr>
              <th width="100" class="text-center">店家編號</th>
              <th class="text-start">店家名稱</th>
              <th width="100">店家分類</th>
              <!-- <th>店家子分類</th> -->
              <th width="80" class="text-center">是否啟用</th>
              <th width="120"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shop in shops" :key="shop.ShopID">
              <th class="text-center">{{ shop.ShopID }}</th>
              <td class="text-start">{{ shop.Name }}</td>
              <td>{{ shop.Type }}</td>
              <!-- <td>{{ shop.Tag }}</td> -->
              <td class="text-center">
                <span v-if="shop.Enable">啟用</span>
                <span class="text-danger" v-else>未啟用</span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-gray btn-sm me-md-2"
                  @click="openShopModal('update', shop)"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <AdminShopModal
      ref="modal"
      :temp-shop="tempShop"
      :is-new="isNew"
      :shop-tags="shopTags"
      @update="updateShop"
    ></AdminShopModal>
  </div>
</template>

<script>
import AdminShopModal from "../../components/AdminShopModal.vue";

export default {
  components: {
    AdminShopModal,
  },
  data() {
    return {
      shops: [],
      tempShop: {
        tags: [],
      },
      isNew: false,
      shopTags: [],
    };
  },
  inject: ["emitter"],
  methods: {
    getShops(type) {
      let api = `${process.env.VUE_APP_API}/api/ShopInfoes`;

      if (type) {
        api = `${process.env.VUE_APP_API}/api/ShopInfoes/type/${type}`;
      }

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.shops = res.data;
          this.shops.forEach((item, index) => {
            this.shops[index].tags = item.TagIds.split(",");
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getEnableShops(status) {
      const api = `${process.env.VUE_APP_API}/api/ShopInfoes/Enable?isEnable=${status}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.shops = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateShop(item) {
      console.log(item);
      delete item.tags;
      let api = `${process.env.VUE_APP_API}/api/ShopInfoes/Admin`;
      let method = "post";
      if (this.isNew == false) {
        api = `${process.env.VUE_APP_API}/api/ShopInfoes/Admin/${item.ShopID}`;
        method = "put";
      }

      this.$http[method](api, item)
        .then((res) => {
          console.log(res);
          this.getShops();
          this.$refs.modal.closeModal();
          this.emitter.emit("push-message", {
            style: "success",
            title: "成功上傳",
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openShopModal(status, item) {
      this.tempShop = {};
      if (status == "new") {
        // this.tempShop = {};
        this.isNew = true;
        this.$refs.modal.openModal();
      } else if (status == "update") {
        this.isNew = false;
        this.a;
        this.tempShop = { ...item };
        console.log(this.tempShop);
        this.$refs.modal.openModal();
      }
    },
  },
  mounted() {
    this.getShops();
  },
};
</script>
