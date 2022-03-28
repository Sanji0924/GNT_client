<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    ref="modal"
    style="z-index: 11000"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h5
            class="modal-title"
            id="exampleModalLabel"
            v-if="type === 'shopReview'"
          >
            刪除評論
          </h5>
          <h5
            class="modal-title"
            id="exampleModalLabel"
            v-else-if="type === 'shopInfo'"
          >
            刪除店家
          </h5>
          <button
            type="button"
            class="btn-close text-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <template v-if="type === 'shopReview'">
            是否刪除
            <strong class="text-danger">此評論</strong>（刪除後將無法恢復）。
          </template>
        </div>
        <!-- <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{}}</strong> 商品（刪除後將無法恢復）。
        </div> -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger text-white"
            @click="deleteItem"
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["type"],
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
    deleteItem() {
      this.$emit("delete-item");
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
