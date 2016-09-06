function ContactController() {
  var vm = this;

  vm.name = "A name";
  vm.email = "An email";
  vm.phone = "A phone number";

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
