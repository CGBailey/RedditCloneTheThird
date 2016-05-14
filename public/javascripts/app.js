var app = angular.module('reddit', ['ui.router','ngAnimate']);

angular.module('reddit').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
          url: '/',
          views: {
              'header': {
                templateUrl: '/header/header.html',
                controller: 'HeaderCtrl'
              },
              'posts': {
                template: '<posts />'
              }
          }
        })
        .state('posts.comments', {
          url
        });

});

angular.module('RedditClone').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
});