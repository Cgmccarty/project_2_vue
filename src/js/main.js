let app = new Vue({

  el: "#app",

  data: {
    apiRequest: new XMLHttpRequest(),
  },

  created: function () {

    // Format a url
    let url = 'https://entree-f18.herokuapp.com/v1/menu/12';

    // Fetch from the url
    this.apiRequest.onload = this.onSuccess;
    this.apiRequest.onerror = this.onError;
    this.apiRequest.open('get', url, true);
    // apiRequest.setRequestHeader('x-api-key', 'your-key-here');
    this.apiRequest.send();

  },

  methods: {
    printMenu: function () {
      console.log(this.apiRequest);
    }
  }


});
