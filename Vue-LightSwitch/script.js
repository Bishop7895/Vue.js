const app = Vue.createApp({
  data() {
    return {
      isLightOn: false,
    };
  },
  methods: {
    toggleLight() {
      this.isLightOn = !this.isLightOn;
      document.body.classList.toggle("light-on", this.isLightOn);
    },
  },
});

app.mount("#app");
