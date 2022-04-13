<template>
  <div class="container-fuild d-flex justify-content-between bg-white">
    <input type="checkbox" id="checkShow" hidden />
    <section class="container-fuild side side-member bg-white pt-6 px-3">
      <label
        for="checkShow"
        class="nav-icon nav-icon-admin nav-icon-member text-dark d-flex"
      >
        <span class="material-icons"> arrow_forward_ios </span>
      </label>
      <div class="container pt-5 side-area">
        <nav class="nav flex-column side-nav">
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
                @click="searchMember(keywords)"
                :disabled="!keywords"
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
              <th width="100" class="text-center">會員名稱</th>
              <th width="100" class="text-center">會員性別</th>
              <th>會員 Email</th>
              <th width="100" class="text-center">黑名單</th>
              <th width="150"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.MemberID">
              <th class="text-center">{{ member.MemberID }}</th>
              <td class="text-center">{{ member.Name }}</td>
              <td class="text-center">{{ member.Gender }}</td>
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
                  @click="openMemberModal(member, 'edit')"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openMemberModal(member, 'delete')"
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
    <DeleteModal
      ref="delModal"
      :type="type"
      :item="tempMember"
      @delete-item="deleteMember"
    ></DeleteModal>
  </div>
</template>

<script>
import AdminMemberModal from "../../components/AdminMemberModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";

export default {
  components: {
    AdminMemberModal,
    DeleteModal,
  },
  data() {
    return {
      members: [],
      tempMember: {},
      birthDate: "",
      keywords: "",
      type: "adminMember",
    };
  },
  inject: ["emitter"],
  methods: {
    getMembers() {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/Admin`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.members = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    getBlackList() {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/Admin/BlackList`;

      this.$http
        .get(api)
        .then((res) => {
          this.members = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    updateMember(member) {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/Admin/${member.MemberID}`;
      console.log(member);
      this.$http
        .put(api, member)
        .then(() => {
          this.getMembers();
          this.$refs.modal.closeModal();
          this.emitter.emit("push-message", {
            style: "success",
            title: "更新成功",
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteMember() {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/Admin/${this.tempMember.MemberID}`;

      this.$http
        .delete(api)
        .then(() => {
          this.getMembers();
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
    searchMember(keywords) {
      const api = `${process.env.VUE_APP_API}/api/MemberInfoes1/Admin/Keywords/${keywords}`;

      this.$http
        .get(api)
        .then((res) => {
          this.members = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openMemberModal(item, status) {
      this.tempMember = { ...item };
      if (status == "edit") {
        this.$refs.modal.openModal();
      } else if (status == "delete") {
        this.$refs.delModal.openModal();
      }
    },
  },
  mounted() {
    this.getMembers();
  },
};
</script>
