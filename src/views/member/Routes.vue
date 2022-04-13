<template>
  <div class="container mb-4">
    <h1 class="h2 d-flex align-items-center mb-5 mt-5">
      行程規劃
      <button type="button" class="btn btn-info ms-3" @click="showMap">
        <span v-if="!isShow">打開地圖</span>
        <span v-else>關閉地圖</span>
      </button>
    </h1>
    <div class="row">
      <div class="col-12">
        <h2 class="h4 d-flex justify-content-between mb-5">
          已建立的行程
          <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="deleteAllRoutes"
          >
            移除全部行程
          </button>
        </h2>
        <div class="row mb-4" v-for="route in routes" :key="route.RouteID">
          <h5 class="d-flex align-items-center">
            行程名稱：{{ route.Title }}
            <button
              type="button"
              class="btn btn-outline-danger btn-sm ms-5"
              @click="openShopModal(route, 'delete')"
            >
              移除此行程
            </button>
          </h5>

          <div class="col-12 col-md-5">
            <span>
              <button
                type="button"
                class="btn btn-outline-gray btn-sm mb-3"
                @click="openShopModal(route, 'edit')"
              >
                編輯
              </button>
            </span>
            <ul class="list-group">
              <li class="list-group-item mb-2" v-if="route.ShopInfo">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo, 'shop')"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo.Name }}</a
                >
              </li>
              <li class="list-group-item mb-2" v-if="route.ShopInfo1">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo1, 'shop')"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo1.Name }}</a
                >
              </li>
              <li class="list-group-item mb-2" v-if="route.ShopInfo2">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo2, 'shop')"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo2.Name }}</a
                >
              </li>
              <li class="list-group-item mb-2" v-if="route.ShopInfo3">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo3, 'shop')"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo3.Name }}</a
                >
              </li>
              <li class="list-group-item mb-2" v-if="route.ShopInfo4">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo4, 'shop')"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo4.Name }}</a
                >
              </li>
              <li class="list-group-item mb-2" v-if="route.ShopInfo5">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo5, 'shop')"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo5.Name }}</a
                >
              </li>
              <li class="list-group-item mb-2" v-if="route.ShopInfo6">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo6, 'shop')"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo6.Name }}</a
                >
              </li>
              <li class="list-group-item mb-2" v-if="route.ShopInfo7">
                <a
                  href="#"
                  class="d-flex align-items-center"
                  @click.prevent="openShopModal(route.ShopInfo7)"
                  ><span class="material-icons me-2"> directions_run </span>
                  {{ route.ShopInfo7.Name }}</a
                >
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-7">
            <LeafletComponentRoutes
              v-if="isShow"
              :route-point="route.wayPoints"
              :marker-point="route.markers"
            ></LeafletComponentRoutes>
          </div>
        </div>
      </div>
    </div>
    <ShopInfoModal ref="modal" :favorite="tempShop"></ShopInfoModal>
    <RouteEditModal
      ref="routeModal"
      :route="tempShop"
      @update-route="updateRoute"
    ></RouteEditModal>
    <DeleteModal
      ref="delModal"
      :type="type"
      :item="tempShop"
      @delete-item="deleteRoute"
    ></DeleteModal>
  </div>
</template>

<script>
import ShopInfoModal from "../../components/ShopInfoModal.vue";
import RouteEditModal from "../../components/RouteEditModal.vue";
import LeafletComponentRoutes from "../../components/LeafletComponentRoutes.vue";
import DeleteModal from "../../components/DeleteModal.vue";

export default {
  components: {
    ShopInfoModal,
    RouteEditModal,
    LeafletComponentRoutes,
    DeleteModal,
  },
  data() {
    return {
      memberId: 0,
      routes: [
        {
          wayPoints: [],
          markers: [],
        },
      ],
      tempShop: {},
      isShow: false,
      type: "route",
    };
  },
  inject: ["emitter"],
  methods: {
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.memberId = Number(memberId);
    },
    getRoutes() {
      const api = `${process.env.VUE_APP_API}/api/Routes/${this.memberId}`;

      this.$http
        .get(api)
        .then((res) => {
          this.routes = res.data;
          this.routes.forEach((item, index) => {
            this.routes[index].wayPoints = [];
            this.routes[index].markers = [];
            this.getRoutePoint(item.RouteID, index);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteRoute(item) {
      const api = `${process.env.VUE_APP_API}/api/Routes/${item.RouteID}`;

      this.$http
        .delete(api)
        .then(() => {
          this.getRoutes();
          this.emitter.emit("push-message", {
            style: "primary",
            title: "已將此行程移除",
          });
          this.$refs.delModal.closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteAllRoutes() {
      const api = `${process.env.VUE_APP_API}/api/Routes/deleteAll/${this.memberId}`;

      this.$http
        .delete(api)
        .then(() => {
          this.getRoutes();
          this.emitter.emit("push-message", {
            style: "primary",
            title: "已清空行程",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateRoute(item) {
      const api = `${process.env.VUE_APP_API}/api/Routes/${item.RouteID}`;

      this.$http
        .put(api, item)
        .then(() => {
          this.getRoutes();
          this.showMap();
          this.$refs.routeModal.closeModal();
          this.emitter.emit("push-message", {
            style: "success",
            title: "修改成功",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getRoutePoint(routeId, index) {
      const api = `${process.env.VUE_APP_API}/api/Routes/RouteID/${routeId}`;

      this.$http
        .get(api)
        .then((res) => {
          this.routes[index].wayPoints.push({
            lat: res.data[0].ShopInfo.Latitude,
            lng: res.data[0].ShopInfo.Longitude,
          });
          for (let i = 1; i <= 7; i++) {
            if (res.data[0][`ShopInfo${i}`]) {
              this.routes[index].wayPoints.push({
                lat: res.data[0][`ShopInfo${i}`].Latitude,
                lng: res.data[0][`ShopInfo${i}`].Longitude,
              });
            }
          }
          this.routes[index].markers.push({
            lat: res.data[0][`ShopInfo`].Latitude,
            lng: res.data[0][`ShopInfo`].Longitude,
            shopID: res.data[0][`ShopInfo`].ShopID,
            shopName: res.data[0][`ShopInfo`].Name,
          });
          for (let i = 1; i <= 7; i++) {
            if (res.data[0][`ShopInfo${i}`]) {
              this.routes[index].markers.push({
                lat: res.data[0][`ShopInfo${i}`].Latitude,
                lng: res.data[0][`ShopInfo${i}`].Longitude,
                shopID: res.data[0][`ShopInfo${i}`].ShopID,
                shopName: res.data[0][`ShopInfo${i}`].Name,
              });
            }
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    openShopModal(item, status) {
      this.tempShop = { ...item };

      if (status === "shop") {
        this.$refs.modal.openModal();
      } else if (status === "edit") {
        this.$refs.routeModal.openModal();
      } else if (status === "delete") {
        this.$refs.delModal.openModal();
      }
    },
    showMap() {
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    this.getMemberID();
    this.getRoutes();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/stylesheet/layout/routes";
</style>
