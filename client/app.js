var app = angular.module('codecc', ['ngRoute', 'ngResource', 'codecc.controllers', 'codecc.factories']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/list.html'
    })  
    .when('/posts', {
        templateUrl: 'views/list.html',
        controller: 'PostListController'
    })
    .when('/posts/:someId/update', {
        templateUrl: 'views/single_update.html',
        controller: 'UpdatePostController'
    })
    .when('/posts/:someId', {
        templateUrl: 'views/single_view.html',
        controller: 'PostController'
    })
    .when('/newpost', {
        templateUrl: 'views/submit_post.html',
        controller: 'PostController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

