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
                <a href="./index.html" class="d-flex admin-side-menu-link py-2">
                  <span class="material-icons me-2"> person_search </span>全部
                </a>
              </li>
              <li>
                <a href="./index.html" class="d-flex admin-side-menu-link py-2">
                  <span class="material-icons me-2"> person_search </span>審核中
                </a>
              </li>
              <li>
                <a
                  href="./memberInfo.html"
                  class="d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> person_search </span>已審核
                </a>
              </li>
              <li>
                <a
                  href="./favorite.html"
                  class="d-flex admin-side-menu-link py-2"
                >
                  <span class="material-icons me-2"> person_search </span>黑名單
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="container w-100 pt-6">
      <h1 class="h2 mb-5 mt-5">會員資料管理</h1>
      <div class="table-responsive-md">
        <table
          class="table align-middle table-hover table-striped table-favorite"
        >
          <thead>
            <tr>
              <th>會員編號</th>
              <th>會員名稱</th>
              <th>會員 Email</th>
              <th>審核狀態</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>m001</th>
              <td>Lorem ipsum</td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>
                <span>已審核</span>
                <span class="text-primary">審核中</span>
                <span class="fw-bold d-flex align-items-center">
                  <span class="material-icons"> person_off </span>黑名單
                </span>
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
