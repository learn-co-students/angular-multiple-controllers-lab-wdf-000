function StaffController() {
  this.name = "Name";
  this.email = "Email";
  this.phone = "Phone";
}

angular
  .module('app')
  .controller('StaffController', StaffController)
