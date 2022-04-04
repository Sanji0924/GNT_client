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
                    v-model="tempShop.Longitude"
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopLatitude" class="form-label">店家緯度</label>
                  <input
                    type="text"
                    class="form-control"
                    id="shopLatitude"
                    v-model="tempShop.Latitude"
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
                  <label for="shopTag" class="form-label"
                    >店家子分類（複選）</label
                  >
                  <select
                    id="shopTag"
                    class="form-select"
                    multiple
                    size="3"
                    v-model="selectTags"
                  >
                    <option :value="tag.Tag1" v-for="tag in tags" :key="tag.ID">
                      {{ tag.TagName }}
                    </option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <label for="shopTag" class="form-label"
                    >店家子分類（複選）</label
                  >
                  <p v-if="selectTags">{{ selectTags.join(", ") }}</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="mb-3">
                <p class="mb-2">店家營業時間</p>
                <!-- <label for="shopOpenTime" class="form-label me-3">星期一</label> -->
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                  v-for="day in week"
                  :key="day"
                >
                  <span>{{ toWeek(day) }}</span>
                  <input
                    hidden
                    type="text"
                    class="form-control d-inline w-25 me-2"
                    id="shopOpenTime"
                    :value="tempShop[day]"
                    disabled
                  />
                  <input
                    type="text"
                    class="form-control d-inline w-25"
                    id="shopOpenTime"
                    v-if="tempShop[day]"
                    v-model="tempShop[day]"
                  />
                  到
                  <input
                    type="time"
                    class="form-control d-inline w-25"
                    id="shopOpenTime"
                    v-if="tempShop[day]"
                    v-model="tempShop[day].split('-')[1]"
                  />
                </div>
              </div>
              <div class="form-check mb-3 col-6">
                <input
                  id="is_enabled"
                  class="form-check-input"
                  type="checkbox"
                  checked
                />
                <label class="form-check-label" for="is_enabled"
                  >是否啟用</label
                >
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
                  <!-- <div>
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        v-if="images.length"
                      >
                        新增圖片
                      </button>
                    </div>
                    <div>
                      <button type="button" class="btn btn-outline-danger">
                        刪除圖片
                      </button>
                    </div> -->
                </div>
              </div>
              <!-- <div>
              <button type="button" class="btn btn-outline-primary w-100">新增圖片</button>
            </div> -->
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
          <button
            type="button"
            class="btn btn-primary"
            @click="updateShop(tempShop.ShopID)"
          >
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
  props: ["tempShop", "isNew"],
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
      testTime: "",
      testTime2: "",
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    toWeek(day) {
      switch (day) {
        case "Monday":
          return "星期一";
        case "Tuesday":
          return "星期二";
        case "Wednesday":
          return "星期三";
        case "Thursday":
          return "星期四";
        case "Friday":
          return "星期五";
        case "Saturday":
          return "星期六";
        case "Sunday":
          return "星期日";
        default:
          return "";
      }
    },
    getAllTags() {
      this.selectTags = this.tempShop.tags;
      const api = `https://localhost:44333/api/tag`;

      this.$http
        .get(api)
        .then((res) => {
          console.log(res);
          this.tags = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    update() {
      this.$emit("update", this.tempShop);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.getAllTags();
  },
};
</script>
