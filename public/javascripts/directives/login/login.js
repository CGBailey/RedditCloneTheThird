angular.module('reddit')
  .controller('LoginController', ['$scope', 'userService', LoginController])
  .directive('login', LoginDirective);

    function loginController ($scope, userService) {
        var vm = this;

    }

    function loginDirective () {
      return {
          templateUrl: 'javascripts/directives/login/login.html',
          controller: 'LoginController',
          bindToController: true
      };
    }
