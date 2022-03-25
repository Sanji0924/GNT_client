<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">編輯會員</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <form class="row">
            <div class="mb-3 col-6">
              <label for="memberId" class="form-label">會員編號</label>
              <input
                type="text"
                class="form-control"
                id="memberId"
                disabled
                v-model="tempMember.MemberID"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberName" class="form-label">會員姓名</label>
              <input
                type="text"
                class="form-control"
                id="memberName"
                v-model="tempMember.Name"
              />
            </div>
            <div class="mb-3 col-12">
              <label for="memberEmail" class="form-label">會員信箱</label>
              <input
                type="email"
                class="form-control"
                id="memberEmail"
                v-model="tempMember.Email"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberGender" class="form-label">性別</label>
              <select name="memberGender" id="memberGender" class="form-select">
                <option :value="tempMember.Gender">男性</option>
                <option :value="tempMember.Gender">女性</option>
                <option :value="tempMember.Gender">其他</option>
              </select>
            </div>
            <div class="mb-3 col-6">
              <label for="memberTel" class="form-label">會員電話</label>
              <input
                type="tel"
                class="form-control"
                id="memberTel"
                v-model="tempMember.Phone"
              />
            </div>
            <div class="mb-3">
              <label for="memberAddress" class="form-label">會員地址</label>
              <input
                type="text"
                class="form-control"
                id="memberAddress"
                v-model="tempMember.Address"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberBirth" class="form-label">會員生日</label>
              <input
                type="date"
                class="form-control"
                id="memberBirth"
                v-model="birth"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberRegisterDate" class="form-label"
                >註冊日期</label
              >
              <input type="date" class="form-control" id="memberRegisterDate" />
            </div>
            <div class="mb-3 col-6">
              <input
                id="blackList"
                :true-value="true"
                :false-value="false"
                class="form-check-input me-3"
                type="checkbox"
                v-model="tempMember.BlackList"
                :checked="tempMember.BlackList"
              />
              <label class="form-check-label" for="blackList">黑名單</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateMember(tempMember.MemberID)"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["tempMember", "birthDate"],
  data() {
    return {
      modal: "",
      birth: "",
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    getDate(date) {
      this.birth = date.split("T")[0];
      console.log(this.birth);
      // return editDate;
    },
    updateMember(id) {
      const api = `https://localhost:44333/api/MemberInfoes1/${id}`;

      this.$http
        .put(api, this.tempMember)
        .then((res) => {
          console.log(res);
          this.closeModal();
          this.getMember();

          // this.members = res.data;
        })
        .catch((err) => {
          console.dir(err);
          // alert(err.response.data.Message);
        });
    },
    getMember() {
      this.$emit("get-member");
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.getDate(this.birthDate);
  },
};
</script>
