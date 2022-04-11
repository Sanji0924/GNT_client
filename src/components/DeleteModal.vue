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
          <h5 class="modal-title" id="exampleModalLabel">
            <template v-if="type === 'shopReview'"> 刪除評論 </template>
            <template v-else-if="type === 'websiteReview'">
              刪除意見回饋
            </template>
            <template v-else-if="type === 'shopInfo'"> 刪除店家 </template>
            <template v-else-if="type === 'favorite'"> 移除我的最愛 </template>
            <template v-else-if="type === 'route'"> 移除我的行程 </template>
            <template v-else-if="type === 'adminMember'"> 移除會員 </template>
            <template v-else-if="type === 'logout'"> 會員登出 </template>
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
          <template v-if="type === 'websiteReview'">
            是否刪除
            <strong class="text-danger">此意見回饋</strong
            >（刪除後將無法恢復）。
          </template>
          <template v-if="type === 'favorite'">
            是否從我的最愛中移除
            <strong class="text-danger" v-if="item.ShopInfo">{{
              item.ShopInfo.Name
            }}</strong>
          </template>
          <template v-if="type === 'route'">
            是否將此行程
            <strong class="text-danger" v-if="item.Title">{{
              item.Title
            }}</strong>
            移除
          </template>
          <template v-if="type === 'adminMember'">
            是否將此會員
            <strong class="text-danger" v-if="item.MemberID">{{
              item.Name
            }}</strong>
            移除
          </template>
          <template v-if="type === 'logout'">
            是否要
            <strong class="text-danger">登出</strong>
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
            class="btn btn-primary text-white"
            @click="deleteItem"
            v-if="type === 'logout'"
          >
            確定
          </button>
          <button
            v-else
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
  props: ["type", "item"],
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
      this.$emit("delete-item", this.item);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
