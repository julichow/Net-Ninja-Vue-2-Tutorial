new Vue({
  el: '#vue-app', 
  data: {
    name: "Shaun",
    job: "Ninja", 
    website: 'http://www.thenetninja.co.uk'
  }, 
  methods: {
    greet: function (time) {
      return "good" + time + this.name
    }
  }
})