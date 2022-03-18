<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gray w-100">
      <div class="container">
        <router-link class="navbar-brand" to="/index">
          <img class="logoImg" src="../../assets/images/logo.png" alt="" />
        </router-link>
      </div>
    </nav>
    <section class="main container d-flex flex-column justify-content-center">
      <div class="row justify-content-center">
        <div class="col-10 col-md-5 col-lg-4">
          <h1 class="h2 text-center mb-3">請先登入</h1>
          <form action="#" class="form-signin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">管理員帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="請輸入密碼"
              />
              <label for="floatingPassword">密碼</label>
            </div>
            <div
              class="form-floating mb-3 text-center d-flex justify-content-center align-items-center"
            >
              <!-- <button class="btn btn-gray btn-lg">登入</button> -->
              <router-link to="/admin" class="btn btn-gray btn-lg"
                >登入</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </section>
    <footer class="footer w-100 align-self-end">
      <div class="container-fuild bg-gray py-5">
        <div class="container text-center">
          <router-link
            class="text-white h4 link-hover-opacity mb-3"
            to="./index.html"
          >
            <img class="logoImg" src="../../assets/images/logo.png" alt="" />
          </router-link>
          <ul class="d-flex justify-content-center list-unstyled">
            <li>
              <router-link
                to="/admin"
                class="link-hover-opacity text-white px-3 pt-1 pb-2 border-1 border-end"
                >facebook</router-link
              >
            </li>
            <li>
              <router-link
                to="/admin"
                class="link-hover-opacity text-white px-3 pt-1 pb-2"
                >instagram</router-link
              >
            </li>
          </ul>
          <p class="text-white mb-0 mt-3">© 2022 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
html,
body {
  box-sizing: content-box;
  height: 100%;
  text-align: center;
}
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
.main {
  height: calc(100vh - 272px);
}
</style>
