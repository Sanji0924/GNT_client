<template>
  <div
    class="modal fade"
    id="editModel"
    tabindex="-1"
    style="z-index: 11000"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">編輯行程規劃</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body container">
          <div class="mb-3 col-6">
            <label for="routeTitle" class="form-label">輸入行程名稱</label>
            <input
              type="text"
              class="form-control mb-2"
              id="routeTitle"
              v-model="newRoute.Title"
            />
            <button
              type="button"
              class="btn btn-primary"
              @click="addNewRoute"
              :disabled="isDisabled"
            >
              建立<span
                class="spinner-grow spinner-grow-sm"
                v-if="isDisabled"
              ></span>
            </button>
          </div>
          <hr />
          <div class="mb-3">
            <label for="title" class="form-label">加入既有的行程</label>
            <select class="form-select mb-2" id="title" v-model="selectRouteId">
              <option :value="0" selected disabled>請選擇行程</option>
              <option
                v-for="item in titles"
                :key="item.routeId"
                :value="item.routeId"
              >
                {{ item.title }}
              </option>
            </select>
            <!-- <button type="button" class="btn btn-primary">加入</button> -->
            <template v-for="item in routes">
              <ul
                class="list-group"
                :key="item.RouteID"
                v-if="selectRouteId == item.RouteID"
              >
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                >
                  <p class="mb-0" v-if="item.ShopInfo">
                    景點一：{{ item.ShopInfo.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest1')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                  v-if="item.Dest1"
                >
                  <p class="mb-0" v-if="item.ShopInfo1">
                    景點二：{{ item.ShopInfo1.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest2')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                  v-if="item.Dest2"
                >
                  <p class="mb-0" v-if="item.ShopInfo2">
                    景點三：{{ item.ShopInfo2.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest3')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                  v-if="item.Dest3"
                >
                  <p class="mb-0" v-if="item.ShopInfo3">
                    景點四：{{ item.ShopInfo3.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest4')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                  v-if="item.Dest4"
                >
                  <p class="mb-0" v-if="item.ShopInfo4">
                    景點五：{{ item.ShopInfo4.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest5')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                  v-if="item.Dest5"
                >
                  <p class="mb-0" v-if="item.ShopInfo5">
                    景點六：{{ item.ShopInfo5.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest6')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                  v-if="item.Dest6"
                >
                  <p class="mb-0" v-if="item.ShopInfo6">
                    景點七：{{ item.ShopInfo6.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest7')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
                <li
                  class="list-group-item d-flex align-items-center justify-content-between"
                  v-if="item.Dest7"
                >
                  <p class="mb-0" v-if="item.ShopInfo7">
                    景點八：{{ item.ShopInfo7.Name }}
                  </p>

                  <button
                    type="button"
                    class="btn btn-outline-primary btn-sm"
                    v-else
                    @click="updateRoute(item, 'Dest8')"
                    :disabled="isDisabled"
                  >
                    加入<span
                      class="spinner-grow spinner-grow-sm"
                      v-if="isDisabled"
                    ></span>
                  </button>
                </li>
              </ul>
            </template>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ["routes", "titles", "shopId"],
  data() {
    return {
      isDisabled: false,
      modal: "",
      selectRouteId: 0,
      newRoute: {
        MemberID: 0,
        Title: "",
        Dest1: 0,
      },
    };
  },
  inject: ["emitter"],
  methods: {
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
      this.selectRouteId = 0;
    },
    getMemberID() {
      let memberId = document.cookie.replace(
        /(?:(?:^|.*;\s*)memberID\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.newRoute.MemberID = Number(memberId);
    },
    addNewRoute() {
      this.isDisabled = true;
      this.newRoute.Dest1 = this.shopId;
      const api = `${process.env.VUE_APP_API}/api/Routes`;

      this.$http
        .post(api, this.newRoute)
        .then(() => {
          this.emitter.emit("push-message", {
            style: "success",
            title: "加入行程結果",
            content: "已新增一個行程",
          });
          this.newRoute.Title = "";
          this.$emit("get-routes");
          this.closeModal();
          this.isDisabled = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateRoute(item, point) {
      this.isDisabled = true;
      item[point] = this.shopId;
      const api = `${process.env.VUE_APP_API}/api/Routes/${item.RouteID}`;

      this.$http
        .put(api, item)
        .then(() => {
          this.emitter.emit("push-message", {
            style: "success",
            title: "加入行程結果",
            content: "已將此景點加入",
          });
          this.$emit("get-routes");
          this.isDisabled = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.getMemberID();
  },
};
</script>
