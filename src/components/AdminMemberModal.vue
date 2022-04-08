<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    ref="modal"
    style="z-index: 11000"
  >
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
                disabled
              />
            </div>
            <div class="mb-3 col-12">
              <label for="memberEmail" class="form-label">會員信箱</label>
              <input
                type="email"
                class="form-control"
                id="memberEmail"
                v-model="tempMember.Email"
                disabled
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberGender" class="form-label">性別</label>
              <input
                type="text"
                class="form-control"
                id="memberGender"
                v-model="tempMember.Gender"
                disabled
              />
              <!-- <select name="memberGender" id="memberGender" class="form-select" v-model="tempMember.Gender" disabled>
                <option :value="tempMember.Gender">男性</option>
                <option :value="tempMember.Gender">女性</option>
                <option :value="tempMember.Gender">其他</option>
              </select> -->
            </div>
            <div class="mb-3 col-6">
              <label for="memberTel" class="form-label">會員電話</label>
              <input
                type="tel"
                class="form-control"
                id="memberTel"
                v-model="tempMember.Phone"
                disabled
              />
            </div>
            <div class="mb-3">
              <label for="memberAddress" class="form-label">會員地址</label>
              <input
                type="text"
                class="form-control"
                id="memberAddress"
                v-model="tempMember.Address"
                disabled
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberBirth" class="form-label">會員生日</label>
              <input
                type="text"
                class="form-control"
                id="memberBirth"
                v-model="tempMember.BirthDate"
                disabled
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberRegisterDate" class="form-label"
                >註冊日期</label
              >
              <input
                type="text"
                class="form-control"
                id="memberRegisterDate"
                v-model="tempMember.RegisterDate"
                disabled
              />
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
          <button type="button" class="btn btn-primary" @click="update">
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
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    update() {
      this.$emit("update-member", this.tempMember);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
