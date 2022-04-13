<template>
  <l-map :zoom="zoom" :center="center" style="height: 300px; width: 100%">
    <l-control-layers position="topright"></l-control-layers>

    <l-tile-layer
      v-for="tileProvider in tileProviders"
      :key="tileProvider.name"
      :name="tileProvider.name"
      :visible="tileProvider.visible"
      :url="tileProvider.url"
      :attribution="tileProvider.attribution"
      layer-type="base"
    />
    <routing-machine :waypoints="routePoint" />
    <!-- <l-marker
      :lat-lng="item.point"
      :icon="item.icon"
      v-for="(item, key) in markers"
      :key="key"
    > -->
    <!-- <l-popup>
      {{ item.shopName }}
      <a href="#" @click.prevent="replace(item.shopID)"> 點擊查看店家 </a>
    </l-popup> -->
    <!-- </l-marker> -->
  </l-map>
</template>

<script>
import { latLng, icon } from "leaflet";
import {
  LMap,
  LTileLayer,
  // LMarker,
  // LPopup,
  LControlLayers,
} from "vue2-leaflet";
import RoutingMachine from "../components/RoutingMachine.vue";

export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    // LMarker,
    // LPopup,
    LControlLayers,
    RoutingMachine,
  },
  props: ["id", "routePoint", "markerPoint"],
  data() {
    return {
      waypoints: [],
      tileProviders: [
        {
          name: "OpenStreetMap",
          visible: false,
          attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        },
        {
          name: "OpenDarkMap",
          visible: true,
          url: "https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=15IcrzrfcUzGjoEPHByJUZl9BP5KL0eCqCUBvNXbqbkfEUPKwewonYHQX7NXx80B",
          attribution:
            '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> <a href="https://www.openstreetmap.org/copyright"> &copyOpenStreetMap</a>',
        },
      ],
      zoom: 15,
      path: "http://leafletjs.com/examples/custom-icons/leaf-green.png",
      center: [22.996, 120.2],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      iconCurrent: icon({
        iconUrl: "marker.svg",
        iconSize: [50, 50],
      }),
      markers: [
        {
          point: latLng(),
          shopID: this.id,
          shopName: "",
          icon: icon({
            iconUrl: "barMarker.svg",
            iconSize: [50, 50],
          }),
        },
      ],
      shops: [],
      shopId: 0,

      route: {},
      // isLoading: true,
    };
  },
  watch: {
    id() {
      this.getPoints();
      console.log("觸發元件 watch");
    },
  },
  methods: {
    getPoints() {
      this.markers = [];
      this.markerPoint.forEach((item) => {
        let shopID = item.shopID;
        let shopName = item.shopName;
        let point = latLng(item.lat, item.lng);
        let icon = this.iconCurrent;
        this.markers.push({ point, shopID, shopName, icon });
      });

      // this.isLoading = true;
      // const api = `https://localhost:44333/api/ShopInfoes`;

      // this.$http
      //   .get(api)
      //   .then((res) => {
      //     // console.log(res);
      //     this.shops = res.data;
      //     // console.log(this.shops);
      //     let center = [];
      //     this.shops.forEach((item) => {
      //       let shopID = item.ShopID;
      //       let shopName = item.Name;
      //       let point = latLng(item.Latitude, item.Longitude);

      //       if (shopID === this.id) {
      //         icon = this.iconCurrent;
      //         center.push(item.Latitude, item.Longitude);
      //       }
      //       this.markers.push({ point, shopID, shopName, icon });
      //       this.center = center;
      //     });
      //     // this.isLoading = false;
      //     // this.$emit("send-loading", this.isLoading);
      //   })
      //   .catch((err) => {
      //     console.dir(err);
      //   });
    },
    replace(id) {
      this.$emit("change-page", id);
      this.$router.push(`/shops/shop/${id}`);
    },
    getRoutePoints() {
      console.log(this.routeId);
      const api = `${process.env.VUE_APP_API}/Routes/RouteID/${this.routeId}`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.route = res.data[0];
          this.waypoints.push({
            lat: this.route.ShopInfo.Latitude,
            lng: this.route.ShopInfo.Longitude,
          });
          this.waypoints.push({
            lat: this.route.ShopInfo1.Latitude,
            lng: this.route.ShopInfo1.Longitude,
          });

          console.log(
            this.route.ShopInfo.Latitude,
            this.route.ShopInfo.Longitude
          );
          console.log(
            this.route.ShopInfo1.Latitude,
            this.route.ShopInfo1.Longitude
          );
          console.log(
            this.route.ShopInfo2.Latitude,
            this.route.ShopInfo2.Longitude
          );
          console.log(
            this.route.ShopInfo3.Latitude,
            this.route.ShopInfo3.Longitude
          );
          console.log(
            this.route.ShopInfo4.Latitude,
            this.route.ShopInfo4.Longitude
          );
          console.log(
            this.route.ShopInfo5.Latitude,
            this.route.ShopInfo5.Longitude
          );
          console.log(
            this.route.ShopInfo6.Latitude,
            this.route.ShopInfo6.Longitude
          );
          console.log(
            this.route.ShopInfo7.Latitude,
            this.route.ShopInfo7.Longitude
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getPoints();
  },
};
</script>
