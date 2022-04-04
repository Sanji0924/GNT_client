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
        <div class="modal-header bg-primary">
          <h5 class="modal-title" id="exampleModalLabel">編輯行程規劃</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <div class="mb-3">
            <label for="title" class="form-label">行程名稱</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="route.Title"
            />
          </div>
          <ul class="list-group">
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo"
            >
              {{ route.Dest1 }} / {{ route.ShopInfo.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest1', 'ShopInfo')"
              >
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo1"
            >
              {{ route.Dest2 }} / {{ route.ShopInfo1.Name }}
              <button type="button" class="btn btn-outline-danger btn-sm">
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo2"
            >
              {{ route.Dest3 }} / {{ route.ShopInfo2.Name }}
              <button type="button" class="btn btn-outline-danger btn-sm">
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo3"
            >
              {{ route.Dest4 }} / {{ route.ShopInfo3.Name }}
              <button type="button" class="btn btn-outline-danger btn-sm">
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo4"
            >
              {{ route.Dest5 }} / {{ route.ShopInfo4.Name }}
              <button type="button" class="btn btn-outline-danger btn-sm">
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo5"
            >
              {{ route.Dest6 }} / {{ route.ShopInfo5.Name }}
              <button type="button" class="btn btn-outline-danger btn-sm">
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo6"
            >
              {{ route.Dest7 }} / {{ route.ShopInfo6.Name }}
              <button type="button" class="btn btn-outline-danger btn-sm">
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo7"
            >
              {{ route.Dest8 }} / {{ route.ShopInfo7.Name }}
              <button type="button" class="btn btn-outline-danger btn-sm">
                移除
              </button>
            </li>
          </ul>
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
          <!-- <button type="button" class="btn btn-primary">儲存</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["route"],
  data() {
    return {
      modal: "",
      tempRoute: {},
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    removeDest(destNum, shopNum) {
      console.log(destNum);
      console.log(this.route[destNum]);
      this.route[destNum] = "";
      this.route[shopNum] = "";
    },
    update() {
      this.$emit("update-route", this.route);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
