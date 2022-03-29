<template>
  <div class="container mb-4">
    <h1 class="h2 mb-5 mt-5">分享紀錄</h1>
    <div class="row">
      <div class="col-12 col-md-10 table-responsive-lg">
        <h2 class="h4 mb-3">已分享的心得</h2>
        <table class="table align-middle table-hover table-striped">
          <thead>
            <tr>
              <th width="150">店家名稱</th>
              <th width="80" class="text-center">評分</th>
              <th width="350">內容</th>
              <th width="120">撰寫日期</th>
              <th width="120"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="review in reviews"
              :key="review.ShopID + review.RContent"
            >
              <th>{{ review.ShopInfo.Name }}</th>
              <td class="text-center">{{ review.Score }}</td>
              <td>
                {{ review.RContent }}
              </td>
              <td>{{ review.ReviewDate.split("T")[0] }}</td>
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
        </table>
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
      // test: {
      //   shopName: "依舊室 Always Bar",
      //   shopRank: 5,
      //   content: "好喝超好喝",
      //   date: "2020/01/02",
      // },
    };
  },
  methods: {
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = Number(memberId);
    },
    getReviews() {
      const api = `https://localhost:44333/api/shopreviews/${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          if (res.data === "此會員無評論") {
            this.reviews = [];
          } else {
            this.reviews = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateReview() {
      const api = `https://localhost:44333/api/shopreviews/${this.memberID}/${this.shopID}`;
      console.log(this.tempReviews);

      this.$http
        .put(api, this.tempReviews)
        .then((res) => {
          console.log(res);
          this.getReviews();
          alert(res.data);
          this.$refs.modal.closeModal();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    deleteReview() {
      const api = `https://localhost:44333/api/shopreviews/${this.memberID}/${this.shopID}`;

      this.$http
        .delete(api)
        .then((res) => {
          console.log(res);
          this.getReviews();
          alert(res.data);
          this.$refs.delModal.closeModal();
          // this.reviews = res.data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openReviewModal(status, item) {
      if (status === "delete") {
        this.$refs.delModal.openModal();
        this.delType = "shopReview";
      } else if (status === "edit") {
        this.$refs.modal.openModal();
      }

      this.tempReviews = {
        MemberID: this.memberID,
        RContent: item.RContent,
        ReviewDate: item.ReviewDate.split("T")[0],
        Score: item.Score,
        ShopName: item.ShopInfo.Name,
        ShopID: item.ShopID,
      };
      this.shopID = this.tempReviews.ShopID;

      console.log(item);
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
