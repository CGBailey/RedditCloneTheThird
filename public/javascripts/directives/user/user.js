angular.module('reddit')
  .controller('UserController', ['$scope', 'userService', UserController])
  .directive('user', UserDirective);

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
