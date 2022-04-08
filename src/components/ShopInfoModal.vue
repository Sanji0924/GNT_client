<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    ref="modal"
    style="z-index: 11000"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title" id="exampleModalLabel">店家詳細資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="favorite.ShopID">
          <div class="container-fliud">
            <div class="row">
              <div class="col-12 col-md-5">
                <img
                  :src="favorite.Image1"
                  alt="favorite.PhotoSource"
                  class="mb-3"
                  width="100%"
                />
                <img
                  v-if="favorite.Image2"
                  :src="favorite.Image2"
                  alt="favorite.PhotoSource"
                  class="mb-3"
                  width="100%"
                />
                <img
                  v-if="favorite.Image3"
                  :src="favorite.Image3"
                  alt="favorite.PhotoSource"
                  class="mb-3"
                  width="100%"
                />
              </div>
              <div class="col-12 col-md-6 col-lg-7">
                <div class="mb-3">
                  <h5 class="text-primary">店家名稱</h5>
                  <p>{{ favorite.Name }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">店家地址</h5>
                  <p>{{ favorite.Address }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">營業時間</h5>
                  <p>星期一：{{ favorite.Monday }}</p>
                  <p>星期二：{{ favorite.Tuesday }}</p>
                  <p>星期三：{{ favorite.Wednesday }}</p>
                  <p>星期四：{{ favorite.Thursday }}</p>
                  <p>星期五：{{ favorite.Friday }}</p>
                  <p>星期六：{{ favorite.Saturday }}</p>
                  <p>星期日：{{ favorite.Sunday }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">個人低消</h5>
                  <p>{{ favorite.Min }}</p>
                </div>
                <div class="mb-3">
                  <h5 class="text-primary">聯絡方式</h5>
                  <a
                    :href="`tel:${favorite.Phone}`"
                    class="text-dark border-bottom border-1 border-dark d-inline-block"
                    >{{ favorite.Phone }}</a
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["favorite"],
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
    setTimeout(() => {
      this.modal = new Modal(this.$refs.modal);
    }, 1000);
  },
};
</script>
