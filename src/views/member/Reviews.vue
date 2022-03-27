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
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="openReviewModal(review)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
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
    ></MemberReviewModal>
  </div>
</template>

<script>
import MemberReviewModal from "../../components/MemberReviewModal.vue";

export default {
  components: {
    MemberReviewModal,
  },
  data() {
    return {
      reviews: [],
      tempReviews: {},
      memberID: 0,
      test: {
        shopName: "依舊室 Always Bar",
        shopRank: 5,
        content: "好喝超好喝",
        date: "2020/01/02",
      },
    };
  },
  methods: {
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberID = memberId;
    },
    getReviews() {
      const api = `https://localhost:44333/api/shopreviews?memberid=${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.reviews = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDate(date) {
      let newDate = date.split("T")[0];
      return newDate;
    },
    updateReview() {
      const api = `https://localhost:44333/api/shopreviews?memberid=${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.reviews = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openReviewModal(item) {
      this.$refs.modal.openModal();
      this.tempReviews = {
        RContent: item.RContent,
        ReviewDate: item.ReviewDate,
        Score: item.Score,
        ShopName: item.ShopInfo.Name,
      };
      console.log(this.tempReviews);
    },
  },
  mounted() {
    this.getMemberID();
    this.getReviews();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/stylesheet/helpers/table";
</style>
