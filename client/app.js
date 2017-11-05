angular.module('codecc', ['ngRoute', 'ngResource', 'codecc.controllers', 'codecc.factories', 'codecc.services'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/login.html', 
        controller: 'HomeController' 
    })
    .when('/signup', {
        templateUrl: 'views/signup.html', 
        controller: 'SignupController' 
    })
    .when('/posts/:id', {
        templateUrl: 'views/one_post.html',
        controller: 'PostReplyController', //issue loading replies
    })
    .when('/codeplay', {
        templateUrl: 'views/codeplay.html',
    })    
    .when('/codeplay/color-index', {
        templateUrl: 'views/color-index.html', //issue
    })
    .when('/codeplay/multichoice', {
        templateUrl: 'views/multichoice.html', //issue
    })
    .when('/careers', {
        templateUrl: 'views/careers.html',
        //controller: 
    })
    .when('/bootcamps', {
        templateUrl: 'views/bootcamps.html', //issue
        //controller: 
    })
    .when('/resources', {
        templateUrl: 'views/resources.html',
        controller: 'BootcampsController'
    })
    .otherwise({
        redirectTo: '/'
    });
}])
// .run(['$rootScope', '$location', 'UserService', function($rootScope, $location, UserService) {
//     $rootScope.$on('$routeChangeStart', function(event, nextRoute, previousRoute) {
//         if (nextRoute.$$route.requiresLogin && !UserService.isLoggedIn()) {
//             event.preventDefault();
//             UserService.loginRedirect();
//         } else if (nextRoute.$$route.requiresAdmin && !UserService.isAdmin()) {
//             event.preventDefault();
//             $location.replace().path('/');
//         }
//     });
// }]);