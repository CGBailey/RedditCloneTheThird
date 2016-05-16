

angular.module('reddit').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
          url: '/',
          controllerAs:'vm',
          controller: 'HomeController',
          template: "<h1>{{vm.title}}</h1>",
        })
        .state('login', {
          url: '/login',
          template:'<h1>Login you Fool</h1>',
          controlerAs: 'login',

        });
        $locationProvider.html5Mode(true);
});

angular.module('reddit').run(function($rootScope) {

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
