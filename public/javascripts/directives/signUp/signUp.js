angular.module('reddit')
  .controller('SignUpController', ['$scope', 'userService', SignUpController])
  .directive('signUp', SignUpDirective);

    function signUpController ($scope, userService) {
        var vm = this;

    }

    function signUpDirective () {
      return {
          templateUrl: 'javascripts/directives/login/signUp.html',
          controller: 'LoginController',
          bindToController: true
      };
    }
