<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">店家詳細資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container-fliud">
            <div class="row">
              <div class="col-12 col-md-5">
                <img
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                  class="mb-3"
                  width="100%"
                />
              </div>
              <div class="col-12 col-md-6 col-lg-7">
                <div class="mb-3">
                  <h5 class="text-primary">店家名稱</h5>
                  <p>{{ test.shopName }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">店家地址</h5>
                  <p>{{ test.shopAddress }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">營業時間</h5>
                  <p>{{ test.openTime }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">個人低消</h5>
                  <p>{{ test.minimum }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">聯絡方式</h5>
                  <a
                    :href="`tel:`"
                    class="text-dark border-bottom border-1 border-dark d-inline-block"
                    >{{ test.contact }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <!-- <button type="button" class="btn btn-primary"></button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["test"],
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
