angular.module('reddit')
  .controller('UserController', ['$scope', 'userService', UserController])
  .directive('user', UserDirective);

    function UserController ($scope, userService) {
        var vm = this;

    }

    function UserDirective () {
      return {
          templateUrl: 'javascripts/directives/login/login.html',
          controller: 'LoginController',
          bindToController: true
      };
    }
