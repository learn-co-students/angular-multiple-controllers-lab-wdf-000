function StaffController() {
	var vm = this;

	vm.name = 'Bill Gates staff';
	vm.email = 'bgates@gmail.com';
	vm.phone = '123-123-1234';
}

angular
	.module('app')
	.controller('StaffController', StaffController);