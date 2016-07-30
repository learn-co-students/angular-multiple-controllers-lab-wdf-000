function ContactController(){
  var vm = this;

  vm.name = 'Bill';
  vm.email = 'a@b.c';
  vm.phone = '123-456-7890'

  this.changeName = function(){
    vm.name = 'Sonmething else!';
  }
}

angular
  .module('app')
  .controller('ContactController',ContactController)
