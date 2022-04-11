<template>
  <div
    class="modal fade"
    id="editModel"
    tabindex="-1"
    style="z-index: 11000"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">編輯表單</h5>
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
              <label for="feedbackId" class="form-label">表單編號</label>
              <input
                type="text"
                class="form-control"
                id="feedbackId"
                disabled
                v-model="form.ReviewID"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberId" class="form-label">會員編號</label>
              <input
                type="text"
                class="form-control"
                id="memberId"
                disabled
                v-model="form.MemberID"
              />
            </div>
            <div class="mb-3 col-12">
              <label for="feedbackType" class="form-label">表單類別</label>
              <input
                type="text"
                class="form-control"
                id="feedbackType"
                disabled
                v-model="form.Type"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="feedbackDate" class="form-label">填寫日期</label>
              <input
                type="text"
                class="form-control"
                id="feedbackDate"
                disabled
                v-model="form.ReviewDate"
              />
            </div>
            <div class="mb-3 col-6">
              <label for="feedbackStatus" class="form-label">表單狀態</label>
              <select
                id="feedbackStatus"
                class="form-select"
                v-model="form.Status"
              >
                <option value="已處理">已處理</option>
                <option value="處理中">處理中</option>
                <option value="未處理">未處理</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="feedbackContent" class="form-label">表單內容</label>
              <textarea
                class="form-control"
                id="feedbackContent"
                cols="20"
                rows="3"
                disabled
                v-model="form.RContent"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="remark" class="form-label">平台回覆</label>
              <textarea
                class="form-control"
                id="remark"
                cols="20"
                rows="3"
                v-model="form.Remark"
              ></textarea>
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
            @click="update"
            :disabled="loading"
          >
            儲存
            <span class="spinner-grow spinner-grow-sm" v-if="loading"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["form", "loading"],
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
      console.log(typeof this.form.ReviewDate);
      this.isLoading = true;
      console.log("觸發元件 update");
      this.$emit("update", this.form);
      this.isLoading = false;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
