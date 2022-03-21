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
              />
            </div>
            <div class="mb-3 col-6">
              <label for="memberId" class="form-label">會員編號</label>
              <input type="text" class="form-control" id="memberId" disabled />
            </div>
            <div class="mb-3 col-12">
              <label for="feedbackType" class="form-label">表單類別</label>
              <input type="text" class="form-control" id="feedbackType" />
            </div>
            <div class="mb-3 col-6">
              <label for="feedbackDate" class="form-label">填寫日期</label>
              <input type="date" class="form-control" id="feedbackDate" />
            </div>
            <div class="mb-3 col-6">
              <label for="feedbackStatus" class="form-label">表單狀態</label>
              <select id="feedbackStatus" class="form-select">
                <option value="">已處理</option>
                <option value="">處理中</option>
                <option value="">未處理</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="feedbackContent" class="form-label">表單內容</label>
              <textarea
                class="form-control"
                id="feedbackContent"
                cols="20"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="remark" class="form-label">備註</label>
              <textarea
                class="form-control"
                id="remark"
                cols="20"
                rows="3"
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
          <button type="button" class="btn btn-primary">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
