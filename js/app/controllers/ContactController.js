function ContactController() {
	var vm = this;
	vm.name = 'some name'
	vm.email = 'some@thing.com'
	vm.phone = 'some number'
	
	this.changeName = function() {
		vm.name = 'Something Else';
	}
}

angular
	.module('app')
	.controller('ContactController', ContactController)
