function StaffController() {
	var vm = this;
	vm.email = 'some@thing.com'
	vm.name = 'some name'
	vm.phone = 'number'
	
}


angular
	.module('app')
	.controller('StaffController', StaffController)
