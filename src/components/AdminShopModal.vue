<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    ref="modal"
    style="z-index: 11000"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <span v-if="isNew">新增店家資料</span>
            <span v-else>編輯店家資料</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <form class="row">
            <div class="col-12 col-lg-6">
              <div class="row">
                <div class="mb-3 col-6">
                  <label for="shopId" class="form-label">店家編號</label>
                  <input
                    type="text"
                    class="form-control"
                    id="shopId"
                    v-model="tempShop.ShopID"
                    disabled
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopName" class="form-label">店家名稱</label>
                  <input
                    type="text"
                    class="form-control"
                    id="shopName"
                    v-model="tempShop.Name"
                  />
                </div>
                <div class="mb-3 col-12">
                  <label for="shopAddress" class="form-label">店家地址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="shopAddress"
                    v-model="tempShop.Address"
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopLongitude" class="form-label">店家經度</label>
                  <input
                    type="text"
                    class="form-control"
                    id="shopLongitude"
                    v-model.number="tempShop.Longitude"
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopLatitude" class="form-label">店家緯度</label>
                  <input
                    type="text"
                    class="form-control"
                    id="shopLatitude"
                    v-model.number="tempShop.Latitude"
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopTel" class="form-label">店家電話</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="shopTel"
                    v-model="tempShop.Phone"
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopType" class="form-label">店家分類</label>
                  <select
                    id="shopType"
                    class="form-select"
                    v-model="tempShop.Type"
                  >
                    <option value="酒吧">酒吧</option>
                    <option value="咖啡甜點">咖啡甜點</option>
                    <option value="小吃消夜">小吃消夜</option>
                    <option value="夜間景點">夜間景點</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <input
                    id="is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempShop.Enable"
                    :checked="tempShop.Enable"
                  />
                  <label class="form-check-label ms-2" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="row">
                <div class="mb-3 col-6">
                  <p class="mb-2">店家子分類（複選）</p>
                  <span
                    class="d-inline-block me-2"
                    v-for="(tag, key) in tags"
                    :key="key"
                  >
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="tag.Tag1"
                      :value="tag.TagName"
                      v-model="tempShop.tags"
                    />
                    <label class="form-check-label ms-1" :for="tag.Tag1">
                      {{ tag.TagName }}
                    </label>
                  </span>
                </div>
                <div class="col-6 mb-3">
                  <p class="mb-2">店家營業時間</p>
                  <div
                    class="d-flex align-items-center mb-2"
                    v-for="(day, key) in week"
                    :key="key"
                  >
                    <label class="form-check-label ms-1" for="shopOpenTime">
                      {{ toWeek(day) }}
                    </label>
                    <input
                      type="text"
                      class="form-control d-inline w-75 ms-2"
                      id="shopOpenTime"
                      v-model="tempShop[day]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div class="col-12 col-lg-6">
                  <h5>圖片上傳</h5>
                  <div class="mb-3">
                    <label for="imageUrl" class="mb-2">主要圖片</label>
                    <input
                      type="text"
                      class="form-control"
                      id="imageUrl"
                      placeholder="請輸入圖片連結"
                      v-model="tempShop.Image1"
                    />
                  </div>
                  <img
                    :src="tempShop.Image1"
                    alt=""
                    class="img-fluid mb-3"
                    height="300"
                  />
                </div>
                <div class="col-12 col-lg-6">
                  <h5 class="mb-2">多圖新增</h5>
                  <div>
                    <div class="form-group mb-3">
                      <label for="imagesUrl" class="mb-2">圖片網址</label>
                      <input
                        type="text"
                        class="form-control"
                        id="imagesUrl"
                        placeholder="請輸入圖片連結"
                        v-model="tempShop.Image2"
                      />
                    </div>
                    <img :src="tempShop.Image2" alt="" class="img-fluid mb-3" />
                  </div>
                  <div>
                    <div class="form-group mb-3">
                      <label for="imagesUrl" class="mb-2">圖片網址</label>
                      <input
                        type="text"
                        class="form-control"
                        id="imagesUrl"
                        placeholder="請輸入圖片連結"
                        v-model="tempShop.Image3"
                      />
                    </div>
                    <img :src="tempShop.Image3" alt="" class="img-fluid mb-3" />
                  </div>
                  <div>
                    <div class="form-group mb-3">
                      <label for="imagesUrl" class="mb-2">圖片網址</label>
                      <input
                        type="text"
                        class="form-control"
                        id="imagesUrl"
                        placeholder="請輸入圖片連結"
                        v-model="tempShop.Image4"
                      />
                    </div>
                    <img :src="tempShop.Image4" alt="" class="img-fluid mb-3" />
                  </div>
                  <div>
                    <div class="form-group mb-3">
                      <label for="imagesUrl" class="mb-2">圖片網址</label>
                      <input
                        type="text"
                        class="form-control"
                        id="imagesUrl"
                        placeholder="請輸入圖片連結"
                        v-model="tempShop.Image5"
                      />
                    </div>
                    <img :src="tempShop.Image5" alt="" class="img-fluid mb-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
          <button type="button" class="btn btn-primary" @click="update">
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["tempShop", "is-new", "shopTags"],
  data() {
    return {
      modal: "",
      tags: [],
      selectTags: [],
      week: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      isLoading: false,
    };
  },
  methods: {
    openModal() {
      if (this.tempShop.tags.length < 0) {
        this.selectTags = this.tempShop.tags;
      } else {
        this.selectTags = [];
      }
      this.modal.show();

      setTimeout(() => {
        console.log("打開");
      }, 1000);
    },
    closeModal() {
      this.modal.hide();
    },
    toWeek(day) {
      switch (day) {
        case "Monday":
          return "週一";
        case "Tuesday":
          return "週二";
        case "Wednesday":
          return "週三";
        case "Thursday":
          return "週四";
        case "Friday":
          return "週五";
        case "Saturday":
          return "週六";
        case "Sunday":
          return "週日";
        default:
          return "";
      }
    },
    getAllTags() {
      const api = `${process.env.VUE_APP_API}/api/tag`;

      this.$http
        .get(api)
        .then((res) => {
          this.tags = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update() {
      this.tempShop.TagIds = this.selectTags.join(",");
      this.$emit("update", this.tempShop);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.getAllTags();
    console.log(this.tempShop);
  },
};
</script>
