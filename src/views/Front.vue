<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <div class="container-fuild d-flex justify-content-between bg-dark">
      <input type="checkbox" id="checkShow" hidden />
      <section class="container-fuild side bg-white pt-6 px-3">
        <div class="container pt-5 side-area">
          <nav class="nav flex-column side-nav">
            <label for="checkShow" class="nav-icon text-dark d-flex">
              <span class="material-icons"> arrow_forward_ios </span>
            </label>
            <form action="#" class="mb-3">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="keyword"
                  placeholder="請輸入關鍵字"
                />
                <!-- <label for="checkShow" class="col-md-2 arrow-icon bg-primary text-dark d-flex">
                <span class="material-icons">
                  arrow_forward_ios
                </span>
              </label> -->
              </div>
              <div class="row mb-3">
                <div class="col-7 align-items-center">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>請選擇地區</option>
                    <option value="中西區">中西區</option>
                    <option value="東區">東區</option>
                    <option value="北區">北區</option>
                    <option value="南區">南區</option>
                    <option value="安平區">安平區</option>
                  </select>
                </div>
                <div class="col-5">
                  <button type="button" class="btn btn-primary w-100 mt-md-0">
                    搜尋
                  </button>
                </div>
              </div>
            </form>
            <h3 class="h4 text-dark mb-3">精選主題</h3>
            <div class="row">
              <div class="col-6 mb-3">
                <router-link to="/shops/bars" class="link-hover-opacity">
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1563282396-c299392870cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      class="img-fluid overflow-hidden rounded-5"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">酒吧</h5>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-6 mb-3">
                <router-link to="/shops/snacks" class="link-hover-opacity">
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1533970526352-9c6c0d239190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      class="img-fluid"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">
                        宵夜<br />小吃
                      </h5>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-6 mb-3">
                <router-link to="/shops/desserts" class="link-hover-opacity">
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1541592391523-5ae8c2c88d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      class="img-fluid"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">
                        深夜<br />甜點
                      </h5>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-6 mb-3">
                <router-link to="/shops/nightviews" class="link-hover-opacity">
                  <div
                    class="card bg-dark text-white border-1 border-white rounded-lg overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1506747111041-18b1844bf60f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                      class="img-fluid"
                      alt=""
                    />
                    <div
                      class="card-img-overlay d-flex justify-content-center align-items-center"
                    >
                      <h5 class="card-title fs-3 fw-bold mb-0">
                        夜間<br />景點
                      </h5>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <section class="container w-100 pt-6">
        <router-view></router-view>
      </section>
    </div>
    <FrontFooter></FrontFooter>
  </div>
</template>

<script>
import FrontNavbar from "../components/FrontNavbar.vue";
import FrontFooter from "../components/FrontFooter.vue";
export default {
  components: {
    FrontNavbar,
    FrontFooter,
  },
};
</script>

<style lang="scss" scope>
@import "../assets/stylesheet/layout/sidebar";
@import "../assets/stylesheet/layout/banner";
@import "../assets/stylesheet/layout/card";
.logoImg {
  height: 45px;
  z-index: 1000;
}
.link-hover-opacity {
  &:hover {
    opacity: 0.7;
    transition: all 0.3s;
  }
}
</style>
