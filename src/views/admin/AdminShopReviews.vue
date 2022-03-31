<template>
  <div class="container-fuild d-flex justify-content-between bg-white">
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
          <form action="#" class="mb-3" ref="form">
            <div class="mb-3 d-flex flex-column">
              <input
                type="text"
                class="form-control mb-3"
                id="keyword"
                placeholder="輸入關鍵字搜尋"
                v-model="keywords"
              />
              <button
                type="button"
                class="btn btn-gray"
                @click="getKeywords(keywords)"
              >
                搜尋
              </button>
            </div>
          </form>
          <div class="row">
            <ul class="list-unstyled col-12 text-center">
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getShopReviews"
                >
                  <span class="material-icons me-2"> find_in_page </span>全部
                </a>
              </li>
            </ul>
          </div>
          <!-- <h3 class="h4 text-dark mb-3">類別</h3> -->
          <!-- <div class="row">
            <ul class="list-unstyled col-12 text-center">
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> find_in_page </span>全部
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> find_in_page </span
                  >推薦店家
                </router-link>
              </li>
              <li>
                <router-link
                  tp="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> find_in_page </span
                  >系統回饋
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> find_in_page </span
                  >店家資訊更新
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> find_in_page </span>其他
                </router-link>
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
                  <span class="material-icons me-2"> find_in_page </span>
                  表單狀態<span class="material-icons"> expand_more </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-center px-2"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                    >
                      <span class="material-icons me-2"> edit </span>未處理
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                    >
                      <span class="material-icons me-2"> edit </span>處理中
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                    >
                      <span class="material-icons me-2"> edit </span>已處理
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div> -->
        </nav>
      </div>
    </section>
    <section class="container w-100 pt-6">
      <h1 class="h2 mb-5 mt-5">商家評論管理</h1>
      <div class="table-responsive-md">
        <table
          class="table align-middle table-hover table-striped table-favorite"
        >
          <thead>
            <tr>
              <th width="80" class="text-center">店家 ID</th>
              <th width="80" class="text-center">會員 ID</th>
              <th width="50" class="text-center">評分</th>
              <th>內容</th>
              <th width="150">填寫日期</th>
              <th width="80"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in shopReviews" :key="key + item.MemberID">
              <th class="text-center">{{ item.ShopID }}</th>
              <td class="text-center">{{ item.MemberID }}</td>
              <td class="text-center">{{ item.Score }}</td>
              <td>
                {{ item.RContent }}
              </td>
              <td>{{ item.ReviewDate }}</td>
              <td class="text-center">
                <!-- <button
                  type="button"
                  class="btn btn-outline-gray btn-sm"
                  @click="openFormModal"
                >
                  編輯
                </button> -->
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelModal(item)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <!-- <AdminFormModal ref="modal"></AdminFormModal> -->
    <DeleteModal
      ref="delModal"
      @delete-item="deleteShopReview"
      :type="delType"
    ></DeleteModal>
  </div>
</template>

<script>
import DeleteModal from "../../components/DeleteModal.vue";

export default {
  data() {
    return {
      shopReviews: [],
      tempShopReview: {},
      delType: "shopReview",
      keywords: "",
    };
  },
  components: {
    DeleteModal,
  },
  methods: {
    getShopReviews() {
      const api = `https://localhost:44333/api/shopreviews`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.shopReviews = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getKeywords(keywords) {
      const api = `https://localhost:44333/api/shopreviews/keywords/${keywords}`;

      this.$http
        .get(api)
        .then((res) => {
          // this.isLoading = true;
          // alert(res.data);
          console.log(res);
          this.shopReviews = res.data;
          this.$refs.form.reset();
          // this.getShopReviews();
          // this.$refs.delModal.closeModal();
        })
        .catch((err) => {
          console.dir(err);
          alert(err.response.data.Message);
          this.$refs.form.reset();
        });
    },
    openDelModal(item) {
      this.tempShopReview = { ...item };
      this.$refs.delModal.openModal();
    },
    deleteShopReview() {
      const api = `https://localhost:44333/api/shopreviews/Admin/${this.tempShopReview.MemberID}/${this.tempShopReview.ShopID}`;

      this.$http
        .delete(api)
        .then((res) => {
          // this.isLoading = true;
          alert(res.data);
          this.getShopReviews();
          this.$refs.delModal.closeModal();
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
  mounted() {
    this.getShopReviews();
    console.log(this.$http.defaults.headers.common["Authorization"]);
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 272px);
}
</style>
