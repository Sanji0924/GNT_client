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
          <h5 class="modal-title" id="exampleModalLabel">編輯心得內容</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="shopName" class="form-label">店家名稱</label>
              <input
                type="text"
                class="form-control"
                id="shopName"
                disabled
                v-model="tempReviews.ShopName"
              />
            </div>
            <div class="mb-3">
              <label for="rank" class="form-label">評分</label>
              <select
                name="rank"
                id="rank"
                class="form-select"
                v-model="tempReviews.Score"
              >
                <option selected disabled>請選擇評分</option>
                <option :value="rank" v-for="rank in 5" :key="rank + '443'">
                  {{ rank }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="date" class="form-label">撰寫日期</label>
              <input
                type="text"
                class="form-control"
                id="date"
                disabled
                :value="tempReviews.ReviewDate"
              />
            </div>
            <div class="mb-3">
              <label for="shopContent" class="form-label">留言</label>
              <textarea
                class="form-control"
                name="shopContent"
                id="shopContent"
                cols="20"
                rows="3"
                v-model="tempReviews.RContent"
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
  props: ["tempReviews"],
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
      this.$emit("update-review", this.tempReviews);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
