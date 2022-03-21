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
                  <span class="material-icons me-2"> place </span>全部
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> place </span>酒吧
                </router-link>
              </li>
              <li>
                <router-link tp="#" class="d-flex admin-side-menu-link py-2">
                  <span class="material-icons me-2"> place </span>深夜甜點
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> place </span>宵夜小吃
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> place </span>夜間景點
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
                    >
                      <span class="material-icons me-2"> edit </span>啟用
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
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
          @click="openShopModal"
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
              <th width="80">店家編號</th>
              <th>店家名稱</th>
              <th width="80">店家分類</th>
              <th>店家子分類</th>
              <th width="80">是否啟用</th>
              <th width="120"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>S001</th>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>
                <span>啟用</span>
                <span class="text-danger">未啟用</span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-gray btn-sm"
                  @click="openShopModal"
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
    <AdminShopModal ref="modal"></AdminShopModal>
  </div>
</template>

<script>
import AdminShopModal from "../../components/AdminShopModal.vue";

export default {
  components: {
    AdminShopModal,
  },
  methods: {
    openShopModal() {
      this.$refs.modal.openModal();
    },
  },
};
</script>
