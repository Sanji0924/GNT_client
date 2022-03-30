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
            class="nav-icon nav-icon-member nav-icon-admin text-dark d-flex"
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
                v-model="keywords"
              />
              <button
                type="button"
                class="btn btn-gray"
                @click="getKeywordForms(keywords)"
              >
                搜尋
              </button>
            </div>
          </form>
          <h3 class="h4 text-dark mb-3">類別</h3>
          <div class="row">
            <ul class="list-unstyled col-12 text-center">
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getForms"
                >
                  <span class="material-icons me-2"> find_in_page </span>全部
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getTypeForms('推薦店家')"
                >
                  <span class="material-icons me-2"> find_in_page </span
                  >推薦店家
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getTypeForms('系統回饋')"
                >
                  <span class="material-icons me-2"> find_in_page </span
                  >系統回饋
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getTypeForms('店家資訊更新')"
                >
                  <span class="material-icons me-2"> find_in_page </span
                  >店家資訊更新
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                  @click.prevent="getTypeForms('其他')"
                >
                  <span class="material-icons me-2"> find_in_page </span>其他
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
                      @click="getStatusForms('未處理')"
                    >
                      <span class="material-icons me-2"> edit </span>未處理
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                      @click="getStatusForms('處理中')"
                    >
                      <span class="material-icons me-2"> edit </span>處理中
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                      @click="getStatusForms('已處理')"
                    >
                      <span class="material-icons me-2"> edit </span>已處理
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
      <h1 class="h2 mb-5 mt-5">表單資料管理</h1>
      <div class="table-responsive-md">
        <table
          class="table align-middle table-hover table-striped table-favorite"
        >
          <thead>
            <tr>
              <th>表單編號</th>
              <th>會員 ID</th>
              <th>表單類別</th>
              <th>填寫日期</th>
              <th>表單狀態</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in forms" :key="item.ReviewID">
              <th>{{ item.ReviewID }}</th>
              <td>{{ item.MemberID }}</td>
              <td>{{ item.Type }}</td>
              <td>{{ item.ReviewDate.split("T")[0] }}</td>
              <td>
                <span v-if="item.Status === '已處理'">已處理</span>
                <span class="text-primary" v-else-if="item.Status === '處理中'"
                  >處理中</span
                >
                <span class="text-danger" v-else-if="item.Status === '未處理'">
                  未處理
                </span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-gray btn-sm"
                  @click="openFormModal(item, 'edit')"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openFormModal(item, 'delete')"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    tempForm:{}
    <AdminFormModal
      ref="modal"
      :form="tempForm"
      @update="updateForm"
    ></AdminFormModal>
    <DeleteModal
      ref="delModal"
      :type="delType"
      @delete-item="deleteForm"
    ></DeleteModal>
  </div>
</template>

<script>
import AdminFormModal from "../../components/AdminFormModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";
import getToken from "../../assets/methods/adminToken.js";

export default {
  components: {
    AdminFormModal,
    DeleteModal,
  },
  data() {
    return {
      forms: [],
      tempForm: {
        ReviewDate: "",
      },
      isLoading: false,
      delType: "websiteReview",
      keywords: "",
    };
  },
  methods: {
    openFormModal(item, status) {
      if (status === "edit") {
        this.tempForm = { ...item };
        this.$refs.modal.openModal();
      } else if (status === "delete") {
        this.tempForm = { ...item };
        this.$refs.delModal.openModal();
      }
    },
    getForms() {
      let api = `https://localhost:44333/api/websitereview`;

      this.$http
        .get(api)
        .then((res) => {
          this.forms = res.data;
          this.keywords = "";
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    getTypeForms(type) {
      const api = `https://localhost:44333/api/websitereview/type/${type}`;

      this.$http
        .get(api)
        .then((res) => {
          this.forms = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    getStatusForms(status) {
      const api = `https://localhost:44333/api/websitereview/status/${status}`;

      this.$http
        .get(api)
        .then((res) => {
          this.forms = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    getKeywordForms(keywords) {
      const api = `https://localhost:44333/api/websitereview/keywords/${keywords}`;

      this.$http
        .get(api)
        .then((res) => {
          this.forms = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    updateForm(item) {
      console.log(item);
      const api = `https://localhost:44333/api/websitereview/admin/${item.ReviewID}`;

      this.$http
        .put(api, item)
        .then((res) => {
          this.isLoading = true;
          alert(res.data);
          this.getForms();
          this.$refs.modal.closeModal();
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    deleteForm() {
      const api = `https://localhost:44333/api/websitereview/admin/${this.tempForm.ReviewID}`;

      this.$http
        .delete(api)
        .then((res) => {
          this.isLoading = true;
          alert(res.data);
          this.getForms();
          this.$refs.delModal.closeModal();
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
  },
  mounted() {
    getToken();
    console.log(this.$http.defaults.headers.common["Authorization"]);
    this.getForms();
    // this.getToken();
  },
};
</script>
