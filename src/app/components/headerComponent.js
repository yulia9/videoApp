 let headerObj = {
    controller: headerController,
    template: require('./header.html'),
  }

  function headerController() {
    this.greeting = 'Hello!!!!';
    alert(5)
  };

  export default headerObj;