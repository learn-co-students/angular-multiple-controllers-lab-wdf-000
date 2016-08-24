function StaffController ($scope) {
  this.name = "aaa";
  this.email = "a@b.c";
  this.phone = "123-456-7890";
}

angular
  .module('app')
  .controller('StaffController', StaffController)
