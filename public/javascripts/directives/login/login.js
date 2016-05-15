angular.module('reddit')
  .controller('LoginController', ['$scope', 'userService', LoginController])
  .directive('login', LoginDirective);

    function LoginController ($scope, userService) {
        var vm = this;

    }

    function LoginDirective () {
      return {
          templateUrl: 'javascripts/directives/login/login.html',
          controller: 'LoginController',
          bindToController: true
      };
    }
