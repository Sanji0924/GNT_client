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
                  <span class="material-icons me-2"> person_search </span>全部
                </a>
              </li>
              <li>
                <a href="./index.html" class="d-flex admin-side-menu-link py-2">
                  <span class="material-icons me-2"> person_search </span>審核中
                </a>
              </li>
              <li>
                <a
                  href="./memberInfo.html"
                  class="d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> person_search </span>已審核
                </a>
              </li>
              <li>
                <a
                  href="./favorite.html"
                  class="d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> person_search </span>黑名單
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="container w-100 pt-6">
      <h1 class="h2 mb-5 mt-5">會員資料管理</h1>
      <div class="table-responsive-md">
        <table
          class="table align-middle table-hover table-striped table-favorite"
        >
          <thead>
            <tr>
              <th width="80">會員編號</th>
              <th width="100">會員名稱</th>
              <th>會員 Email</th>
              <th width="100">是否黑名單</th>
              <th width="150"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.MemberID">
              <th>{{ member.MemberID }}</th>
              <td>{{ member.Name }}</td>
              <td>{{ member.Email }}</td>
              <td class="text-center">
                <span
                  v-if="member.BlackList"
                  class="fw-bold d-flex align-items-center"
                >
                  <span class="material-icons"> person_off </span>黑名單
                </span>
                <span v-else>否</span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-gray btn-sm me-md-2"
                  @click="openMemberModal(member)"
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
    <AdminMemberModal
      ref="modal"
      :tempMember="tempMember"
      :birthDate="birthDate"
      @get-member="getMember"
    ></AdminMemberModal>
  </div>
</template>

<script>
import AdminMemberModal from "../../components/AdminMemberModal.vue";

export default {
  components: {
    AdminMemberModal,
  },
  data() {
    return {
      members: [],
      tempMember: {},
      birthDate: "",
    };
  },
  methods: {
    getMember() {
      const api = `https://localhost:44333/api/MemberInfoes1`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.members = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    openMemberModal(item) {
      this.tempMember = { ...item };
      this.birthDate = item.BirthDate;
      this.$refs.modal.openModal();
    },
  },
  mounted() {
    this.getMember();
  },
};
</script>
