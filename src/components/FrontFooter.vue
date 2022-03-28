<template>
  <div>
    <footer class="footer">
      <div class="container-fuild bg-dark py-5">
        <div class="container text-center">
          <router-link class="text-white h4 link-hover-opacity mb-3" to="/">
            <img class="logoImg" src="../assets/images/logo.svg" alt="" />
          </router-link>
          <ul class="d-flex justify-content-center list-unstyled">
            <li>
              <a
                href="#"
                class="link-hover-opacity text-white px-3 py-2 border-1 border-end"
                >facebook</a
              >
            </li>
            <li>
              <a href="#" class="link-hover-opacity text-white px-3 py-2"
                >instagram</a
              >
            </li>
          </ul>
          <p class="text-white mb-3 mt-3">© 2022 LOGO All Rights Reserved.</p>
          <router-link to="/adminLogin" class="text-white fs-6"
            >進入後台</router-link
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.logoImg {
  height: 45px;
  z-index: 1000;
}

.footer {
  background-color: rgba($color: #000002, $alpha: 0.8);
  z-index: 100;
}
</style>
