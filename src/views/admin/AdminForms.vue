<template>
  <div class="container-fuild d-flex justify-content-between bg-white">
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
    <section class="container pt-6">
      <h1 class="h2 mb-5 mt-5">意見回饋管理</h1>
      <div class="table-responsive-md">
        <table
          class="table align-middle table-hover table-striped table-favorite"
        >
          <thead>
            <tr>
              <th class="text-center">表單編號</th>
              <th class="text-center">會員 ID</th>
              <th class="text-center">表單類別</th>
              <th class="text-center">填寫日期</th>
              <th class="text-center">表單狀態</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in forms" :key="item.ReviewID">
              <th class="text-center">{{ item.ReviewID }}</th>
              <td class="text-center">{{ item.MemberID }}</td>
              <td class="text-center">{{ item.Type }}</td>
              <td v-if="item.ReviewDate" class="text-center">
                {{ item.ReviewDate.split("T")[0] }}
              </td>
              <td class="text-center">
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
                  class="btn btn-outline-gray btn-sm me-2"
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
    <AdminFormModal
      ref="modal"
      :form="tempForm"
      :loading="isDisabled"
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
      delType: "websiteReview",
      keywords: "",
      isLoading: false,
      loader: {
        width: 150,
        height: 150,
        color: "#fff",
        lockScroll: true,
        isFullPage: false,
      },
      isDisabled: false,
    };
  },
  inject: ["emitter"],
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
      const api = `${process.env.VUE_APP_API}/api/websitereview`;
      this.isLoading = true;
      this.$http
        .get(api)
        .then((res) => {
          this.forms = res.data;
          this.keywords = "";
          this.isLoading = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getTypeForms(type) {
      const api = `${process.env.VUE_APP_API}/api/websitereview/type/${type}`;

      this.$http
        .get(api)
        .then((res) => {
          this.forms = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getStatusForms(status) {
      const api = `${process.env.VUE_APP_API}/api/websitereview/status/${status}`;

      this.$http
        .get(api)
        .then((res) => {
          this.forms = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getKeywordForms(keywords) {
      const api = `${process.env.VUE_APP_API}/api/websitereview/keywords/${keywords}`;

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
      this.isDisabled = true;
      console.log(item);
      const api = `${process.env.VUE_APP_API}/api/websitereview/admin/${item.ReviewID}`;

      this.$http
        .put(api, item)
        .then(() => {
          this.isLoading = true;
          this.getForms();
          this.$refs.modal.closeModal();
          this.emitter.emit("push-message", {
            style: "success",
            title: "表單更新成功",
          });
          this.isDisabled = false;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteForm() {
      const api = `${process.env.VUE_APP_API}/api/websitereview/admin/${this.tempForm.ReviewID}`;

      this.$http
        .delete(api)
        .then(() => {
          this.isLoading = true;
          this.getForms();
          this.$refs.delModal.closeModal();
          this.emitter.emit("push-message", {
            style: "primary",
            title: "刪除成功",
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getForms();
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>
