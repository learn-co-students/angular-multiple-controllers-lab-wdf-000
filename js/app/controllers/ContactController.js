function ContactController() {
  var vm = this;

  vm.name = "name";
  vm.email = "email";
  vm.phone = "phone";

  this.changeName = function () {
  	if (vm.name === "name") {
    	vm.name = 'Something else!'
  	} else {
    	vm.name = "name"
    }
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController)