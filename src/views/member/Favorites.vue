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
    <h1 class="h2 mb-5 mt-5">我的最愛</h1>
    <div class="row">
      <div class="col-12">
        <h2 class="h4 mb-3">已儲存的地點</h2>
        <div class="table-responsive-md">
          <table
            class="table align-middle table-hover table-striped table-favorite"
          >
            <thead>
              <tr>
                <th>店家名稱</th>
                <th>店家地區</th>
                <!-- <th>營業時間</th> -->
                <th class="text-center">低消</th>
                <th width="150"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in favorites" :key="key">
                <th>{{ item.ShopInfo.Name }}</th>
                <td>
                  {{ item.ShopInfo.Address }}
                </td>
                <!-- <td>{{}}</td> -->
                <td class="text-center">{{ item.ShopInfo.Min }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-gray btn-sm me-2"
                    @click="openShopModal(item.ShopInfo, 'more')"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger btn-sm"
                    @click="openShopModal(item, 'delete')"
                  >
                    移除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ShopInfoModal ref="modal" :favorite="tempFavorite"></ShopInfoModal>
    <DeleteModal
      ref="delModal"
      :type="delType"
      :item="tempFavorite"
      @delete-item="deleteFavorite"
    ></DeleteModal>
  </div>
</template>

<script>
import ShopInfoModal from "../../components/ShopInfoModal.vue";
import DeleteModal from "../../components/DeleteModal.vue";

export default {
  components: {
    ShopInfoModal,
    DeleteModal,
  },
  data() {
    return {
      memberID: 0,
      favorites: [],
      tempFavorite: {},
      delType: "favorite",
      isLoading: true,
      loader: {
        width: 150,
        height: 150,
        color: "#000",
        lockScroll: true,
        isFullPage: true,
      },
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
    getFavorites() {
      const api = `https://localhost:44333/api/MemberFavorites/${this.memberID}`;

      this.$http
        .get(api)
        .then((res) => {
          this.isLoading = true;
          console.log(res);
          this.favorites = res.data;
          this.favorites.forEach((item, index) => {
            this.getShopInfo(item.ShopID, index);
          });
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getShopInfo(id, index) {
      const api = `https://localhost:44333/api/shopinfoes/${id}`;

      this.$http
        .get(api)
        .then((res) => {
          // console.log(res, index);
          this.favorites[index].ShopInfo = res.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(this.favorites);
    },
    deleteFavorite(item) {
      const api = `https://localhost:44333/api/MemberFavorites/${item.MemberID}/${item.ShopID}`;

      this.$http
        .delete(api)
        .then((res) => {
          console.log(res);
          this.getFavorites();
          alert(res.data);
          this.$refs.delModal.closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openShopModal(item, status) {
      this.tempFavorite = { ...item };
      if (status === "more") {
        this.$refs.modal.openModal();
      } else if (status === "delete") {
        this.$refs.delModal.openModal();
      }
    },
  },
  mounted() {
    this.getMemberID();
    this.getFavorites();
  },
};
</script>
