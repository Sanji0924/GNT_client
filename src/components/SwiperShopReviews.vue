<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="card h-100 border-0 rounded-0">
        <div class="card-body">
          <h5 class="card-title">Lorem, ipsum.</h5>
          <ul class="list-unstyled d-flex align-items-center text-light mb-2">
            <li>
              <span class="material-icons"> star </span>
            </li>
          </ul>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            sint numquam dolorum praesentium pariatur? Consequatur?
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card h-100 border-0 rounded-0">
        <div class="card-body">
          <h5 class="card-title">Lorem, ipsum.</h5>
          <ul class="list-unstyled d-flex align-items-center text-light mb-2">
            <li>
              <span class="material-icons"> star </span>
            </li>
          </ul>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            sint numquam dolorum praesentium pariatur? Consequatur?
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card h-100 border-0 rounded-0">
        <div class="card-body">
          <h5 class="card-title">Lorem, ipsum.</h5>
          <ul class="list-unstyled d-flex align-items-center text-light mb-2">
            <li>
              <span class="material-icons"> star </span>
            </li>
          </ul>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            sint numquam dolorum praesentium pariatur? Consequatur?
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card h-100 border-0 rounded-0">
        <div class="card-body">
          <h5 class="card-title">Lorem, ipsum.</h5>
          <ul class="list-unstyled d-flex align-items-center text-light mb-2">
            <li>
              <span class="material-icons"> star </span>
            </li>
          </ul>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            sint numquam dolorum praesentium pariatur? Consequatur?
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card h-100 border-0 rounded-0">
        <div class="card-body">
          <h5 class="card-title">Lorem, ipsum.</h5>
          <ul class="list-unstyled d-flex align-items-center text-light mb-2">
            <li>
              <span class="material-icons"> star </span>
            </li>
          </ul>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            sint numquam dolorum praesentium pariatur? Consequatur?
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card h-100 border-0 rounded-0">
        <div class="card-body">
          <h5 class="card-title">Lorem, ipsum.</h5>
          <ul class="list-unstyled d-flex align-items-center text-light mb-2">
            <li>
              <span class="material-icons"> star </span>
            </li>
          </ul>
          <p class="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            sint numquam dolorum praesentium pariatur? Consequatur?
          </p>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 0,
        speed: 2000,
        autoplay: {
          delay: 1000,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 300px;
  width: 80%;
  border: 1px transparent solid;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    // text-align: center;
    font-weight: bold;
    font-size: 14px;
    // background-color: rgb(98, 168, 200);
  }
}
</style>
