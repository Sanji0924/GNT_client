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
                  class="d-flex admin-side-menu-link py-2"
                  @click.prevent="getMembers"
                >
                  <span class="material-icons me-2"> person_search </span>全部
                </a>
              </li>
              <li>
                <a
                  href="./index.html"
                  class="d-flex admin-side-menu-link py-2"
                  @click.prevent="getBlackList"
                >
                  <span class="material-icons me-2"> person_search </span>黑名單
                </a>
              </li>
              <!-- <li>
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
              </li> -->
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
              <th width="80" class="text-center">會員編號</th>
              <th width="100">會員名稱</th>
              <th width="100">會員性別</th>
              <th>會員 Email</th>
              <th width="100" class="text-center">黑名單</th>
              <th width="150"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.MemberID">
              <th class="text-center">{{ member.MemberID }}</th>
              <td>{{ member.Name }}</td>
              <td>{{ member.Gender }}</td>
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
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="deleteMember(member.MemberID)"
                >
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
      @update-member="updateMember"
    ></AdminMemberModal>
  </div>
</template>

<script>
import getToken from "../../assets/methods/adminToken.js";
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
    getMembers() {
      const api = `https://localhost:44333/api/MemberInfoes1/Admin`;

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
    getBlackList() {
      const api = `https://localhost:44333/api/MemberInfoes1/Admin/BlackList`;

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
    updateMember(member) {
      const api = `https://localhost:44333/api/MemberInfoes1/Admin/${member.MemberID}`;

      this.$http
        .put(api, member)
        .then((res) => {
          console.log(res);
          alert(res.data);
          this.getMembers();
          this.$refs.modal.closeModal();
          // this.members = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    deleteMember(id) {
      const api = `https://localhost:44333/api/MemberInfoes1/Admin/${id}`;

      this.$http
        .delete(api)
        .then((res) => {
          console.log(res);
          alert(res.data);
          this.getMembers();
          this.$refs.modal.closeModal();
          // this.members = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    openMemberModal(item) {
      this.tempMember = { ...item };
      // this.birthDate = item.BirthDate;
      this.$refs.modal.openModal();
    },
  },
  mounted() {
    getToken();
    console.log(this.$http.defaults.headers.common["Authorization"]);
    this.getMembers();
  },
};
</script>
