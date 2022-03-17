<template>
  <div class="container mb-4">
    <h1 class="h2 mb-5 mt-5">行程規劃</h1>
    <div class="row">
      <div class="col-12 col-md-10">
        <h2 class="h4 mb-5">已建立的行程</h2>
        <div class="row">
          <h5 class="offset-1 mb-5">行程一</h5>
          <!-- <div class="route col-md-4">
          <a tabindex="0" class="text-dark link-hover-opacity bg-light text-center mb-3" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
            data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點 1
          </a>
          <a tabindex="0" class="text-dark link-hover-opacity bg-light text-center mb-3" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
            data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點 2
          </a>
        </div> -->
          <!-- <ul class="route list-unstyled col-md-4">
          <li class="route-item border-dark border-1 rounded-pill mb-3">
            <a tabindex="0" class="text-dark link-hover-opacity bg-light text-center py-2 " data-bs-container="body"
              data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
              data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點1
            </a>
          </li>
          <li class="border-dark border-1 bg-light rounded-pill">
            <a tabindex="0" class="text-dark link-hover-opacity text-center py-2 " data-bs-container="body"
              data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
              data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點2
            </a>
          </li>
        </ul> -->
          <div class="route-list col-12 col-md-4">
            <div class="d-flex align-items-center mb-3 ms-5">
              <a
                tabindex="0"
                class="route-list-link text-dark link-hover-opacity text-center ps-5"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-trigger="focus"
                role="bottom"
                data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00"
                >地點1
              </a>
              <a
                href="#"
                class="link-hover-bg text-light border-2 border border-light rounded-3 lh-sm ms-2"
              >
                <span class="material-icons align-middle fs-5"> clear </span>
              </a>
            </div>
            <div class="d-flex align-items-center mb-3 ms-5">
              <a
                tabindex="0"
                class="route-list-link text-dark link-hover-opacity text-center ps-5"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-trigger="focus"
                role="bottom"
                data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00"
                >地點2
              </a>
              <a
                href="#"
                class="link-hover-bg text-light border-2 border border-light rounded-3 lh-sm ms-2"
              >
                <span class="material-icons align-middle fs-5"> clear </span>
              </a>
            </div>
            <div class="d-flex align-items-center mb-3 ms-5">
              <a
                tabindex="0"
                class="route-list-link text-dark link-hover-opacity text-center ps-5"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-trigger="focus"
                role="bottom"
                data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00"
                >地點3
              </a>
              <a
                href="#"
                class="link-hover-bg text-light border-2 border border-light rounded-3 lh-sm ms-2"
              >
                <span class="material-icons align-middle fs-5"> clear </span>
              </a>
            </div>
            <div class="d-flex align-items-center mb-3 ms-5">
              <a
                tabindex="0"
                class="route-list-link text-dark link-hover-opacity text-center ps-5"
                data-bs-container="body"
                data-bs-toggle="popover"
                data-bs-placement="bottom"
                data-bs-trigger="focus"
                role="bottom"
                data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00"
                >地點4
              </a>
              <a
                href="#"
                class="link-hover-bg text-light border-2 border border-light rounded-3 lh-sm ms-2"
              >
                <span class="material-icons align-middle fs-5"> clear </span>
              </a>
            </div>
            <!-- <a tabindex="0" class="text-dark link-hover-opacity mb-3 text-center" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
            data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點2
          </a>
          <a tabindex="0" class="text-dark link-hover-opacity mb-3 text-center" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
            data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點3
          </a>
          <a tabindex="0" class="text-dark link-hover-opacity mb-3 text-center" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
            data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點4
          </a>
          <a tabindex="0" class="text-dark link-hover-opacity mb-3 text-center" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
            data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點5
          </a>
          <a tabindex="0" class="text-dark link-hover-opacity mb-3 text-center" data-bs-container="body"
            data-bs-toggle="popover" data-bs-placement="bottom" data-bs-trigger="focus" role="bottom"
            data-bs-content="地址: 台南市中西區新美街 200 號,  營業時間: 18:00-24:00">地點6
          </a> -->
          </div>
          <div class="col-12 col-md-8 mt-5 mt-md-0">
            <iframe
              class="rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.1920857575547!2d120.19986702920316!3d22.99554459906046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e7663ec76d519%3A0xd682bd8402d06879!2z6YKE5Zyo5oOzIFRoaW5raW5nIEJhcg!5e0!3m2!1szh-TW!2stw!4v1646187813258!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <!-- <ul class="route-list list-unstyled">
          <li><a href="#" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
              aria-controls="collapseExample">地點1</a></li>
          <li>地點2</li>
          <li>地點3</li>
        </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/stylesheet/layout/routes";
</style>
