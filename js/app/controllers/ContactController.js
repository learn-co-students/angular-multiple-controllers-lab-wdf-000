function ContactController($scope) {
  var vm = this;

  var changeName = function () {
    $scope.vm.name = 'Something else!'
  }
  var changeEmail = function () {
    $scope.vm.email = 'Something else!'
  }
  var changePhone = function () {
    $scope.vm.phone = 'Something else!'
  }
}
