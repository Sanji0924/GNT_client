<template>
  <div class="container mb-4">
    <h1 class="h2 mb-5 mt-5">我的最愛</h1>
    <div class="row">
      <div class="col-12 col-lg-10">
        <h2 class="h4 mb-3">已儲存的地點</h2>
        <div class="table-responsive-md">
          <table
            class="table align-middle table-hover table-striped table-favorite"
          >
            <thead>
              <tr>
                <th>店家名稱</th>
                <th>店家地區</th>
                <th>營業時間</th>
                <th>低消</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{{ test.shopName }}</th>
                <td>{{ test.shopArea }}</td>
                <td>{{ test.openTime }}</td>
                <td>{{ test.minimum }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-gray btn-sm"
                    @click="openShopModal"
                  >
                    查看更多
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <ShopInfoModal ref="modal" :test="test"></ShopInfoModal>
  </div>
</template>

<script>
import ShopInfoModal from "../../components/ShopInfoModal.vue";

export default {
  components: {
    ShopInfoModal,
  },
  data() {
    return {
      test: {
        shopName: "TCRC 前科累累俱樂部",
        shopAddress: "台南市中西區新美街",
        shopArea: "中西區",
        openTime: "20:00-03:00",
        minimum: "一杯調酒",
        contact: "06-2345678",
      },
    };
  },
  methods: {
    openShopModal() {
      this.$refs.modal.openModal();
    },
  },
};
</script>
