<template>
  <div class="modal fade" id="exampleModal" ref="modal" style="z-index: 11000">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 class="modal-title" id="exampleModalLabel">輪盤小遊戲</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="wheelArea">
              <button type="button" id="spin_button" @click="btnEvent">
                開始
              </button>

              <canvas id="canvas"></canvas>
            </div>
            <div class="addArea">
              <input type="text" id="shopName" v-model="award" />
              <button type="button" id="btnAdd" @click="addAward">加入</button>
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
        </div>
      </div>
    </div>
  </div>
  <!-- <div
    class="modal fade"
    id="editModel"
    tabindex="-1"
    style="z-index: 11000"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">輪盤小遊戲</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-content">
        <div class="">
          <div class="wheelArea">
            <button type="button" id="spin_button" @click="btnEvent">
              開始
            </button>
            <canvas id="canvas" width="500" height="500"></canvas>
          </div>
          <div class="addArea">
            <input type="text" name="" id="shopName" />
            <button type="button" id="btnAdd">加入</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          關閉
        </button>
      </div>
    </div>
  </div> -->
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

let canvas,
  context,
  OUTSIDE_RADIUAS,
  INSIDE_RADIUAS,
  TEXT_RADIUAS,
  CENTER_X,
  CENTER_Y,
  startRadian,
  awardRadian,
  duration,
  velocity,
  spinningTime,
  spinTotalTime,
  spinningChange;
export default {
  data() {
    return {
      modal: "",
      awards: ["1", "2", "3", "4", "5", "耍廢耍廢耍廢耍廢"],
      award: "",
    };
  },
  methods: {
    addAward() {
      this.awards.push(this.award);
      awardRadian = (Math.PI * 2) / this.awards.length;
      this.drawRouletteWheel();
      this.award = "";
    },
    init() {
      (canvas = document.getElementById("canvas")),
        (canvas.width = 500),
        (canvas.height = 500),
        (context = canvas.getContext("2d")),
        (OUTSIDE_RADIUAS = 200), // 轉盤的半徑
        (INSIDE_RADIUAS = 0), // 用於非零環繞原則的內圓半徑
        (TEXT_RADIUAS = 160), // 轉盤內文字的半徑
        (CENTER_X = canvas.width / 2),
        (CENTER_Y = canvas.height / 2),
        // (this.awards = [
        //   // 轉盤內的獎品個數以及內容

        // ]),
        (startRadian = 0), // 繪製獎項的起始角，改變該值實現旋轉效果
        (awardRadian = (Math.PI * 2) / this.awards.length), // 每一個獎項所佔的弧度
        (duration = 4000), // 旋轉事件
        (velocity = 10), // 旋轉速率
        (spinningTime = 0), // 旋轉當前時間
        spinTotalTime, // 旋轉時間總長
        spinningChange; // 旋轉變化值的峰值

      /**
       * 緩動函數，由快到慢
       * @param {Num} t 當前時間
       * @param {Num} b 初始值
       * @param {Num} c 變化值
       * @param {Num} d 持續時間
       */
    },
    easeOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    },
    drawRouletteWheel() {
      // ----- ① 清空頁面元素，用於逐幀動畫
      context.clearRect(0, 0, canvas.width, canvas.height);
      // -----
      for (let i = 0; i < this.awards.length; i++) {
        let _startRadian = startRadian + awardRadian * i, // 每一個獎項所佔的起始弧度
          _endRadian = _startRadian + awardRadian; // 每一個獎項的終止弧度
        // ----- ② 使用非零環繞原則，繪製圓盤
        context.save();
        if (i % 3 === 0) context.fillStyle = "#B6CCA1";
        else if (i % 3 === 1) context.fillStyle = "#6D98BA";
        else if (i % 3 === 2) context.fillStyle = "#77ACA2";
        context.beginPath();
        context.arc(
          canvas.width / 2,
          canvas.height / 2,
          OUTSIDE_RADIUAS,
          _startRadian,
          _endRadian,
          false
        );
        context.arc(
          canvas.width / 2,
          canvas.height / 2,
          INSIDE_RADIUAS,
          _endRadian,
          _startRadian,
          true
        );
        context.fill();
        context.restore();
        // -----
        // ----- ③ 繪製文字
        context.save();
        context.font = "bold 16px Helvetica, Arial";
        context.fillStyle = "#000";
        context.translate(
          CENTER_X + Math.cos(_startRadian + awardRadian / 2) * TEXT_RADIUAS,
          CENTER_Y + Math.sin(_startRadian + awardRadian / 2) * TEXT_RADIUAS
        );
        context.rotate(_startRadian + awardRadian / 2 + Math.PI / 2);
        context.fillText(
          this.awards[i],
          -context.measureText(this.awards[i]).width / 2,
          0
        );
        context.restore();
        // -----
      }
      // ----- ④ 繪製指針
      context.save();
      context.beginPath();
      context.moveTo(CENTER_X, CENTER_Y - OUTSIDE_RADIUAS + 8);
      context.lineTo(CENTER_X - 10, CENTER_Y - OUTSIDE_RADIUAS);
      context.lineTo(CENTER_X - 4, CENTER_Y - OUTSIDE_RADIUAS);
      context.lineTo(CENTER_X - 4, CENTER_Y - OUTSIDE_RADIUAS - 10);
      context.lineTo(CENTER_X + 4, CENTER_Y - OUTSIDE_RADIUAS - 10);
      context.lineTo(CENTER_X + 4, CENTER_Y - OUTSIDE_RADIUAS);
      context.lineTo(CENTER_X + 10, CENTER_Y - OUTSIDE_RADIUAS);
      context.closePath();
      context.fill();
      context.restore();
      // -----
    },
    rotateWheel() {
      // 當 當前時間 大於 總時間，停止旋轉，並返回當前值
      spinningTime += 20;
      if (spinningTime >= spinTotalTime) {
        console.log(this.getValue());
        alert(this.getValue());
        // btnSpin.disabled = false;
        return;
      }

      let _spinningChange =
        (spinningChange -
          this.easeOut(spinningTime, 0, spinningChange, spinTotalTime)) *
        (Math.PI / 180);
      startRadian += _spinningChange;
      this.drawRouletteWheel();
      window.requestAnimationFrame(this.rotateWheel);
    },
    getValue() {
      let startAngle = (startRadian * 180) / Math.PI, // 弧度轉換為角度
        awardAngle = (awardRadian * 180) / Math.PI,
        pointerAngle = 90, // 指針所指向區域的度數，該值控制選取哪個角度的值
        overAngle = (startAngle + pointerAngle) % 360, // 無論轉盤旋轉了多少圈，產生了多大的任意角，我們只需要求到當前位置起始角在360°範圍內的角度值
        restAngle = 360 - overAngle, // 360°減去已旋轉的角度值，就是剩下的角度值
        index = Math.floor(restAngle / awardAngle); // 剩下的角度值 除以 每一個獎品的角度值，就能得到這是第幾個獎品
      return this.awards[index];
    },
    btnEvent() {
      console.log("點到ㄌ");
      spinningTime = 0; // 初始化當前時間
      spinTotalTime = Math.random() * 3 + duration; // 隨機定義一個時間總量
      spinningChange = Math.random() * 10 + velocity; // 隨機頂一個旋轉速率
      this.rotateWheel();
      // btnSpin.disabled = true;
    },
    openModal() {
      this.modal.show();
    },
  },
  updated() {},
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.init();
    this.drawRouletteWheel();
  },
};
</script>

<style lang="scss" scoped>
.container {
  /* width: 500px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wheelArea {
  position: relative;
}
#spin_button {
  font-family: "Noto Sans TC", sans-serif;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #e98830;
  border-radius: 100%;
  cursor: pointer;
}

.addArea {
  text-align: center;
}
</style>
