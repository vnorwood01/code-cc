angular.module('bootcamp', ['ngRoute', 'ngResource', 'bootcamp.controllers', 'bootcamp.factories', 'bootcamp.services'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/bootcamps.html',
        
    })
    .when('/bootcamps', {
        templateUrl: 'views/bootcamps_all.html',
        // controller: 'ListController'
    })
    .when('/bootcamps/state', {
        templateUrl: 'views/bootcamps_state.html',
        // controller: 'ListController'
    })
//     .when('/login', {
//         templateUrl: 'views/login.html',
//         controller: 'LoginController'
//     })
//     .when('/users', {
//         templateUrl: 'views/user_list.html',
//         controller: 'UserListController',
//         requiresLogin: true,
//         requiresAdmin: true
//     })
//     .when('/donate', {
//         templateUrl: 'views/donate.html',
//         controller: 'DonationController'
//     })
//     .when('/:id/update', {
//         templateUrl: 'views/update.html',
//         controller: 'UpdatePostController'
//     })
//     .when('/:id', {
//         templateUrl: 'views/single.html',
//         controller: 'SinglePostController'
//     })
    // .otherwise({
    //     redirectTo: '/'
    // });
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