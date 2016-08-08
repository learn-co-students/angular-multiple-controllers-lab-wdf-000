function StaffController(){
  this.name = 'Steve'
  this.email = 'x@y.z'
  this.phone = '098-765-4321'
}

angular
  .module('app')
  .controller('StaffController',StaffController)
