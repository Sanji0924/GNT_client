<template>
  <div>
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
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
      <l-marker
        :lat-lng="item.point"
        :icon="item.icon"
        v-for="(item, key) in markers"
        :key="key"
      >
        <l-popup>
          {{ item.shopName }}
          <router-link :to="`shops/shop/${item.shopID}`">
            點擊查看店家
          </router-link>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LControlLayers,
} from "vue2-leaflet";

export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LControlLayers,
  },
  data() {
    return {
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
      // shopName: "我是商店",
      zoom: 13,
      path: "http://leafletjs.com/examples/custom-icons/leaf-green.png",
      center: [22.996, 120.2],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      // urlGoogle: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      // urlDark:
      //   "https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=15IcrzrfcUzGjoEPHByJUZl9BP5KL0eCqCUBvNXbqbkfEUPKwewonYHQX7NXx80B",
      // attribution:
      //   '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // marker: latLng(22.9968355, 120.2009086),
      iconAll: icon({
        iconUrl: "marker.svg",
        iconSize: [50, 50],
      }),
      iconBar: icon({
        iconUrl: "barMarker.svg",
        iconSize: [50, 50],
      }),
      iconNightView: icon({
        iconUrl: "nightMarker.svg",
        iconSize: [50, 50],
      }),
      iconDessert: icon({
        iconUrl: "dessertMarker.svg",
        iconSize: [50, 50],
      }),
      iconSnack: icon({
        iconUrl: "snackMarker.svg",
        iconSize: [50, 50],
      }),
      markers: [],
      barMarkers: [],
      shops: [],
      bars: [],
    };
  },
  methods: {
    getPoints() {
      const api = `${process.env.VUE_APP_API}/api/ShopInfoes`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.shops = res.data;

          this.shops.forEach((item) => {
            let shopID = item.ShopID;
            let shopName = item.Name;
            let point = latLng(item.Latitude, item.Longitude);
            let icon = this.iconBar;
            if (item.Type === "酒吧") {
              icon = this.iconBar;
            } else if (item.Type === "咖啡甜點") {
              icon = this.iconDessert;
            } else if (item.Type === "夜間景點") {
              icon = this.iconNightView;
            } else if (item.Type === "小吃宵夜") {
              icon = this.iconSnack;
            }
            this.markers.push({ point, shopID, shopName, icon });
          });
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getPoints();
  },
};
</script>
