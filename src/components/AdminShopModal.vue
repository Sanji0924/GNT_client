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
            <span>編輯店家資料</span>
            <span>新增店家資料</span>
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
                    disabled
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopName" class="form-label">店家名稱</label>
                  <input type="text" class="form-control" id="shopName" />
                </div>
                <div class="mb-3 col-12">
                  <label for="shopAddress" class="form-label">店家地址</label>
                  <input type="text" class="form-control" id="shopAddress" />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopLongitude" class="form-label">店家經度</label>
                  <input type="text" class="form-control" id="shopLongitude" />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopLatitude" class="form-label">店家緯度</label>
                  <input type="text" class="form-control" id="shopLatitude" />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopTel" class="form-label">店家電話</label>
                  <input type="tel" class="form-control" id="shopTel" />
                </div>
                <div class="mb-3 col-6">
                  <label for="shopType" class="form-label">店家分類</label>
                  <select id="shopType" class="form-select">
                    <option value="酒吧">酒吧</option>
                    <option value="咖啡甜點">咖啡甜點</option>
                    <option value="小吃消夜">小吃消夜</option>
                    <option value="夜間景點">夜間景點</option>
                  </select>
                </div>
                <div class="mb-3 col-6">
                  <label for="shopTag" class="form-label">店家子分類</label>
                  <select id="shopTag" class="form-select" multiple size="2">
                    <option value="">...</option>
                    <option value="">...</option>
                    <option value="">...</option>
                    <option value="">...</option>
                    <option value="">...</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="mb-3">
                <p class="mb-2">店家營業時間</p>
                <!-- <label for="shopOpenTime" class="form-label me-3">星期一</label> -->
                <div
                  class="d-flex justify-content-between align-items-center mb-2"
                  v-for="day in 7"
                  :key="day + 1234"
                >
                  <input
                    type="text"
                    class="form-control d-inline w-25"
                    id="shopOpenTime"
                    :value="toWeek(day)"
                    disabled
                    me-2
                  />
                  <input
                    type="time"
                    class="form-control d-inline w-25"
                    id="shopOpenTime"
                  />
                  到
                  <input
                    type="time"
                    class="form-control d-inline w-25"
                    id="shopOpenTime"
                  />
                </div>
              </div>
              <div class="form-check mb-3 col-6">
                <input
                  id="is_enabled"
                  :true-value="TRUE"
                  :false-value="FALSE"
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
                    />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1566897819059-db42e135fa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
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
                      />
                    </div>
                    <img src="" alt="" class="img-fluid mb-3" />
                    <div>
                      <button type="button" class="btn btn-outline-primary">
                        新增圖片
                      </button>
                    </div>
                    <div>
                      <button type="button" class="btn btn-outline-danger">
                        刪除圖片
                      </button>
                    </div>
                  </div>
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
          <button type="button" class="btn btn-primary">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  data() {
    return {
      modal: "",
    };
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    toWeek(week) {
      switch (week) {
        case 1:
          return "星期一";
        case 2:
          return "星期二";
        case 3:
          return "星期三";
        case 4:
          return "星期四";
        case 5:
          return "星期五";
        case 6:
          return "星期六";
        case 7:
          return "星期日";
        default:
          return "";
      }
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
