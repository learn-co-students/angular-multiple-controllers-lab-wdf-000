function ContactController() {
  var vm = this;
    this.name: 'Steve Jobs';
    this.email: 'steve.apple.com';
    this.phone: '123-456-7890';
 
  this.changeName = function () {
    vm.name = 'Jason Bourne'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)