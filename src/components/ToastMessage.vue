<template>
  <div
    class="toast-container position-fixed pe-3 top-0 end-0"
    style="z-index: 20000"
  >
    <div
      class="toast show fade"
      role="alert"
      aria-live="assertive"
      v-for="(msg, key) in messages"
      :key="key"
    >
      <div class="toast-header">
        <span
          :class="`bg-${msg.style}`"
          class="p-2 rounded me-2 d-inline-block"
        >
        </span>
        <strong class="me-auto">{{ msg.title }}</strong>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="clearToast(key)"
        ></button>
      </div>
      <div class="toast-body" v-if="msg.content">{{ msg.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  inject: ["emitter"],
  methods: {
    toastShow() {
      setTimeout(() => {
        this.messages.shift();
      }, 4000);
    },
    clearToast(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    this.emitter.on("push-message", (msg) => {
      const { style, title, content } = msg;
      this.messages.push({ style, title, content });
      this.toastShow();
      console.log(this.messages);
    });
  },
};
</script>
