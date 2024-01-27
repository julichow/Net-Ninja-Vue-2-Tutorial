new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: "",
    y: "",
  },
  methods: {
    add: function (increment) {
      this.age += increment;
    },
    subtract: function (decrement) {
      this.age -= decrement;
    },
    updateXY: function (event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
});
