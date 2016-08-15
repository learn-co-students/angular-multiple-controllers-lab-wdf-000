function ContactController() {
	var vm = this;

	vm.name = 'Bill Gates';
	vm.email = 'bgates@gmail.com';
	vm.phone = '123-123-1234';
 
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
	.module('app')
	.controller('ContactController', ContactController);