angular.module('codecc.controllers', [])

.controller('LoginController', ['$scope', 'UserService', '$location', function($scope, UserService, $location) {
    UserService.me().then(function() {
        redirect();
    });
        
    $scope.login = function() {
        UserService.login($scope.email, $scope.password)
        .then(function() {
            redirect();
        }, function(err) {
            console.log(err);
        });
    }

    function redirect() {
        var dest = $location.search().dest;
        if (!dest) { dest = '/'; }
        $location.replace().path(dest).search('dest', null);
    }

}])

.controller('SignupController', ['$scope', 'User', function($scope, User) {
    // $scope.users = User.query();

    $scope.createUser = function() {
        var u = new User($scope.newUser);
        u.$save(function() {
            $scope.newUser = {};
            // $scope.users = User.query();
        });
    }

    function redirect() {
        var dest = $location.search().dest;
        if (!dest) { dest = '/'; }
        $location.replace().path(dest).search('dest', null);
    }
}])

.controller('HomeController', ['$scope', 'Post', 'User', '$location', function($scope, Post, User, $location) {
    $scope.users = User.query();
    $scope.posts = Post.query();
    //later make $scope.posts by followers
     
    $scope.save = function() {
        var p = new Post($scope.post);
        p.$save(function() {
            $location.path('/');
        }, function(err) {
            console.log(err);
        });
    }
}])

.controller('PostReplyController', ['$scope', '$routeParams', '$location', '$resource', '$http', 'Post', 'Reply', function($scope, $routeParams, $location, $resource, $http, Post, Reply) {
    //one_post.html
    
    $scope.post = Post.get({ id: $routeParams.id });
    // $scope.replies = Reply.get({ id: $routeParams.id });
    $http.get('/api/replies/' + $routeParams.id).then(function(response) {
        this.$get = function() {
        $scope.reply = response; 
        //console.log(response); replies are binding because they will console.log but not show up in view
        }
    });

    $scope.edit = function() {
        $location.path('/' + $routeParams.id + '/update');
    }

    $scope.save = function() {
        $scope.post.$update(function() {
            $location.replace().path('/' + $routeParams.id);
        });
    }
    $scope.delete = function() {
        if (confirm('Are you sure you want to delete?')) {
            $scope.post.$delete(function() {
                $location.replace().path('/');
            });
        }
    }
}])

.controller('BootcampsController', ['$scope', '$resource', 'Bootcamp', 'User', '$location', function($scope, $resource, Bootcamp, User, $location) {
    $scope.users = User.query();
    // $scope.reviews = Review.query();
    $scope.bootcamps = Bootcamp.query();
      
    $scope.save = function() {
        var p = new Bootcamp($scope.bootcamps);
        p.$save(function() {
            $location.path('/bootcamps');
        }, function(err) {
            console.log(err);
        });
    }
}]);