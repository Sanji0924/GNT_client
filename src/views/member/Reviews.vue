<template>
  <div class="container mb-4">
    <loading
      :active="isLoading"
      loader="spinner"
      :color="loader.color"
      :width="loader.width"
      :height="loader.height"
      :lock-scroll="loader.lockScroll"
      :is-full-page="loader.isFullPage"
    >
    </loading>
    <h1 class="h2 mb-5 mt-5">分享紀錄</h1>
    <div class="row">
      <div class="col-12 table-responsive-lg">
        <h2 class="h4 mb-3">已分享的心得</h2>

        <table
          v-if="reviews.length != 0"
          class="table align-middle table-hover table-striped"
        >
          <thead>
            <tr>
              <th width="150">店家名稱</th>
              <th width="80" class="text-center">評分</th>
              <th width="350">內容</th>
              <th width="120">撰寫日期</th>
              <th width="120"></th>
            </tr>
          </thead>
          <keep-alive>
            <tbody>
              <tr v-for="review in reviews" :key="review.ShopID">
                <th>{{ review.ShopName }}</th>
                <td class="text-center">{{ review.Score }}</td>
                <td>
                  {{ review.RContent }}
                </td>
                <td>{{ review.ReviewDate }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-gray btn-sm me-md-2"
                    @click="openReviewModal('edit', review)"
                  >
                    編輯
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="openReviewModal('delete', review)"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </keep-alive>
        </table>
        <p v-else>目前沒有分享任何的心得</p>
      </div>
    </div>
    <MemberReviewModal
      ref="modal"
      :tempReviews="tempReviews"
      @update-review="updateReview"
    ></MemberReviewModal>
    <DeleteModal
      ref="delModal"
      :type="delType"
      @delete-item="deleteReview"
    ></DeleteModal>
  </div>
</template>

<script>
import MemberReviewModal from "../../components/MemberReviewModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";

export default {
  components: {
    MemberReviewModal,
    DeleteModal,
  },
  data() {
    return {
      reviews: [],
      tempReviews: {},
      memberID: 0,
      shopID: 0,
      delType: "",
      isLoading: true,
      loader: {
        width: 150,
        height: 150,
        color: "#000",
        lockScroll: true,
        isFullPage: false,
      },
    };
  },
  inject: ["emitter"],
  methods: {
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = Number(memberId);
    },
    getReviews() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/shopreviews/${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = true;
          this.reviews = res.data;
          this.reviews.forEach((item, index) => {
            this.getShopName(item.ShopID, index);
          });
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })
        .catch((err) => {
          console.dir(err);
          this.isLoading = false;
        });
    },
    getShopName(id, index) {
      const api = `${process.env.VUE_APP_API}/api/shopinfoes/${id}`;

      this.$http
        .get(api)
        .then((res) => {
          this.reviews[index].ShopName = res.data[0].Name;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateReview(item) {
      const api = `${process.env.VUE_APP_API}/api/shopreviews/${item.MemberID}/${item.ShopID}`;
      delete item.ShopName;

      this.$http
        .put(api, item)
        .then(() => {
          this.getReviews();
          this.$refs.modal.closeModal();
          this.emitter.emit("push-message", {
            style: "success",
            title: "修改成功",
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteReview() {
      const api = `${process.env.VUE_APP_API}/api/shopreviews/${this.memberID}/${this.shopID}`;

      this.$http
        .delete(api)
        .then(() => {
          this.getReviews();
          this.$refs.delModal.closeModal();
          this.emitter.emit("push-message", {
            style: "primary",
            title: "移除成功",
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openReviewModal(status, item) {
      if (status === "delete") {
        this.tempReviews = { ...item };
        this.$refs.delModal.openModal();
        this.delType = "shopReview";
      } else if (status === "edit") {
        this.tempReviews = { ...item };
        this.$refs.modal.openModal();
      }

      this.tempReviews = {
        MemberID: this.memberID,
        RContent: item.RContent,
        ReviewDate: item.ReviewDate,
        Score: item.Score,
        ShopName: item.ShopName,
        ShopID: item.ShopID,
      };
      this.shopID = this.tempReviews.ShopID;
    },
  },
  mounted() {
    this.getMemberID();
    this.getReviews();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/stylesheet/layout/table";
</style>
