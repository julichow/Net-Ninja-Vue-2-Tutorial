new Vue({
  el: '#vue-app', 
  data: {
    name: "Shaun",
    job: "Ninja", 
    website: 'http://www.thenetninja.co.uk', 
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
  }, 
  methods: {
    greet: function (time) {
      return "good" + time + this.name
    }
  }
})