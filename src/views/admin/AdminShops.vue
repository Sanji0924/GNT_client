<template>
  <div class="container-fuild d-flex justify-content-between bg-white">
    <input type="checkbox" id="checkShow" hidden />
    <section class="container-fuild side side-member bg-white pt-6 px-3">
      <div class="container pt-5 side-area">
        <nav class="nav flex-column side-nav">
          <label
            for="checkShow"
            class="nav-icon nav-icon-member text-dark d-flex"
          >
            <span class="material-icons"> arrow_forward_ios </span>
          </label>
          <form action="#" class="mb-3">
            <div class="mb-3 d-flex flex-column">
              <input
                type="text"
                class="form-control mb-3"
                id="keyword"
                placeholder="輸入關鍵字搜尋"
              />
              <button type="button" class="btn btn-gray">搜尋</button>
            </div>
          </form>
          <h3 class="h4 text-dark mb-3">類別</h3>
          <div class="row">
            <ul class="list-unstyled col-12 text-center">
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> place </span>全部
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> place </span>酒吧
                </router-link>
              </li>
              <li>
                <router-link tp="#" class="d-flex admin-side-menu-link py-2">
                  <span class="material-icons me-2"> place </span>深夜甜點
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> place </span>宵夜小吃
                </router-link>
              </li>
              <li>
                <router-link
                  to="#"
                  class="text-dark d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> place </span>夜間景點
                </router-link>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown text-dark admin-side-menu-link d-flex align-items-center py-2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="material-icons me-2"> place </span>
                  店家狀態<span class="material-icons"> expand_more </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-center px-2"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                    >
                      <span class="material-icons me-2"> edit </span>正常營業
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                    >
                      <span class="material-icons me-2"> edit </span>整修中
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-dark d-flex admin-side-menu-link py-2"
                    >
                      <span class="material-icons me-2"> edit </span>停業
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="container w-100 pt-6">
      <div class="d-flex justify-content-between mb-5 mt-5">
        <h1 class="h2">店家資料管理</h1>
        <button
          type="button"
          class="btn btn-outline-primary d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          新增店家
        </button>
      </div>
      <div class="table-responsive-md">
        <table
          class="table align-middle table-hover table-striped table-favorite"
        >
          <thead>
            <tr>
              <th>店家編號</th>
              <th>店家名稱</th>
              <th>店家分類</th>
              <th>店家子分類</th>
              <th>店家狀態</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>S001</th>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>Lorem</td>
              <td>Lorem</td>
              <td>
                <span>正常營業</span>
                <span class="text-primary">整修中</span>
                <span class="text-danger">停業</span>
              </td>
              <td class="text-center">
                <button
                  type="button"
                  class="btn btn-outline-gray btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  編輯
                </button>
                <button type="button" class="btn btn-outline-danger btn-sm">
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
