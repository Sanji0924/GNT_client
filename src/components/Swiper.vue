<template>
  <swiper :options="swiperOption">
    <swiper-slide class="rounded-5 border-primary border-2">
      <div class="card border-primary rounded-lg w-100 overflow-hidden">
        <div class="position-relative">
          <a href="#" class="card-icon bg-transparent lh-sm">
            <span class="material-icons fs-3"> favorite </span>
          </a>
          <div
            class="card-img bg-primary"
            style="
              background-image: url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80');
            "
          ></div>
        </div>
        <div class="card-body">
          <div
            class="fs-7 mb-0 d-flex justify-content-between align-items-center"
          >
            <div class="d-flex align-items-center">
              <span class="material-icons text-primary">star</span>
              <span class="ms-2">4.5</span>
            </div>
            <div>
              <a
                href="#"
                class="btn btn-outline-primary d-flex align-items-center lh-base"
              >
                <span class="material-icons fs-6 me-1">add</span>加入行程
              </a>
            </div>
          </div>
          <h5 class="card-title fs-4 fw-bold d-flex align-items-center">
            依舊室<span class="fs-6 badge bg-info ms-2 lh-sm">調酒</span>
          </h5>
          <ul class="list-unstyled mb-0">
            <li>地址: 台南市中西區</li>
            <li>營業時間: 18:00 - 24:00</li>
          </ul>
        </div>
        <div class="card-footer bg-primary">
          <router-link to="#" class="fs-4 text-center text-dark"
            >查看更多</router-link
          >
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide> -->
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
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.card {
  &-img {
    border-radius: 10px 10px 0 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    max-width: 100%;
    height: 200px;
  }
  &-icon {
    position: absolute;
    right: 0px;
    top: 0px;
    color: #fff;
    background: #dc3545;
    border-radius: 10px 4px 0 10px;
    padding: 10px;
    &:hover {
      background: #fff;
      color: #dc3545;
      transition: all 0.3s;
    }
  }
  &-footer:hover {
    opacity: 0.8;
    transition: all 0.3s;
  }
}
</style>
