function StaffController() {
  var vm = this;

  this.changeName = function () {
    vm.name = 'Something else!'
  }
  this.changeEmail = function () {
    vm.email = 'Something else!'
  }
  this.changePhone = function () {
    vm.phone = 'Something else!'
  }
}
angular
    .module('app', [])
    .controller('StaffController', StaffController);
