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
            <tr>
              <th>f001</th>
              <td>m001</td>
              <td>推薦店家</td>
              <td>2021/01/01</td>
              <td>
                <span>已處理</span>
                <span class="text-primary">處理中</span>
                <span class="text-danger"> 未處理 </span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-gray btn-sm"
                  @click="openFormModal"
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
    <AdminFormModal ref="modal"></AdminFormModal>
  </div>
</template>

<script>
import AdminFormModal from "../../components/AdminFormModal.vue";

export default {
  components: {
    AdminFormModal,
  },
  methods: {
    openFormModal() {
      this.$refs.modal.openModal();
    },
  },
};
</script>
