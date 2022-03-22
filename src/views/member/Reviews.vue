<template>
  <div class="container mb-4">
    <h1 class="h2 mb-5 mt-5">分享紀錄</h1>
    <div class="row">
      <div class="col-12 col-md-10">
        <h2 class="h4 mb-3">已分享的心得</h2>
        <table class="table align-middle table-hover table-striped">
          <thead>
            <tr>
              <th width="180">店家名稱</th>
              <th width="50" class="text-center">評分</th>
              <th width="350">內容</th>
              <th width="100">撰寫日期</th>
              <th width="100"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ test.shopName }}</th>
              <td class="text-center">{{ test.shopRank }}</td>
              <td>
                {{ test.content }}
              </td>
              <td>{{ test.date }}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-gray btn-sm me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="openReviewModal"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="openReviewModal"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <MemberReviewModal ref="modal" :test="test"></MemberReviewModal>
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
      test: {
        shopName: "依舊室 Always Bar",
        shopRank: 5,
        content: "好喝超好喝",
        date: "2020/01/02",
      },
    };
  },
  methods: {
    getReviews() {
      const api = `https://localhost:44333/api/shopreviews?memberid=2`;

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
    openReviewModal() {
      this.$refs.modal.openModal();
    },
  },
  mounted() {
    // this.getReviews();
  },
};
</script>
