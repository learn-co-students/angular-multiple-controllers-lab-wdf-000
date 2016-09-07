function StaffController(){
  this.name: 'ABC';
  this.email: 'abc@abc.com';
  this.phone: '123-123-1234';
}

angular
  .module('app')
  .controller('StaffController', StaffController)