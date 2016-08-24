function ContactController($scope) {
  var vm = this;
  vm.name = "qwert";
  vm.email = "y@u.i";
  vm.phone = "098-765-4321";

  this.changeName = function () {
    vm.name = "yuiop";
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)
