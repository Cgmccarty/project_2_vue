let app = new Vue({

  el: "#app",

  data: {

    apiRequest: new XMLHttpRequest(),
    menu: {}

  },

  created: function () {

    // Format a url
    let url = 'https://entree-f18.herokuapp.com/v1/menu/12';

    // Fetch from the url
    this.apiRequest.onload = this.onSuccess;
    this.apiRequest.onerror = this.onError;
    this.apiRequest.open('get', url, true);
    this.apiRequest.send();

  },

  methods: {

    printMenu: function () {
      console.log(this.apiRequest);
    },

    onSuccess: function () {

      if (this.apiRequest.status == "200") {
          this.menu = JSON.parse(this.apiRequest.responseText);
          console.log(this.menu);
      }
      else {
          this.onError();
      }

    }

  }


});
