<template>
  <div>
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
      <l-tile-layer :url="urlDark" />
      <l-marker :lat-lng="marker" :icon="icon">
        <l-popup>
          {{ shopName }}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";

export default {
  name: "CustomPath",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  data() {
    return {
      shopName: "我是商店",
      zoom: 13,
      path: "http://leafletjs.com/examples/custom-icons/leaf-green.png",
      center: [22.996, 120.2],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      urlDark:
        "https://{s}.tile.jawg.io/jawg-matrix/{z}/{x}/{y}{r}.png?access-token=15IcrzrfcUzGjoEPHByJUZl9BP5KL0eCqCUBvNXbqbkfEUPKwewonYHQX7NXx80B",
      // attribution:
      //   '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: latLng(22.9968355, 120.2009086),
      icon: icon({
        iconUrl: "marker.svg",
        iconSize: [50, 50],
      }),
    };
  },
};
</script>
