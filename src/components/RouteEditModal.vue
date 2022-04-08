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
              {{ route.ShopInfo.Name }}
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
              {{ route.ShopInfo1.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest2', 'ShopInfo1')"
              >
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo2"
            >
              {{ route.ShopInfo2.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest3', 'ShopInfo2')"
              >
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo3"
            >
              {{ route.ShopInfo3.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest4', 'ShopInfo3')"
              >
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo4"
            >
              {{ route.ShopInfo4.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest5', 'ShopInfo4')"
              >
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo5"
            >
              {{ route.ShopInfo5.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest6', 'ShopInfo5')"
              >
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo6"
            >
              {{ route.ShopInfo6.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest7', 'ShopInfo6')"
              >
                移除
              </button>
            </li>
            <li
              class="list-group-item d-flex align-items-center justify-content-between"
              v-if="route.ShopInfo7"
            >
              {{ route.ShopInfo7.Name }}
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeDest('Dest8', 'ShopInfo7')"
              >
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
