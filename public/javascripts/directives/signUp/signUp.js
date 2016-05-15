angular.module('reddit')
  .controller('SignUpController', ['$scope', 'userService', SignUpController])
  .directive('signUp', SignUpDirective);

    function SignUpController ($scope, userService) {
        var vm = this;

    }

    function SignUpDirective () {
      return {
          templateUrl: 'javascripts/directives/login/signUp.html',
          controller: 'LoginController',
          bindToController: true
      };
    }
