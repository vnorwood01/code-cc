var app = angular.module('codecc.controllers', []);


app.controller('PostListController', ['$scope', 'Post', 'User', function($scope, Post, User) {
    function getPosts() {
        $scope.posts = Post.query();
    }
    getPosts();

    $scope.users = User.query();

    $scope.createPost = function() {
        var payload = {
            content: $scope.newContent,
            userid: $scope.newUserId
        };
        var p = new Post(payload);
        p.$save(function(success) {
            $scope.newcontent = '';
            $scope.newUserId = '';
            getPosts();
        }, function(err) {
            console.log(err);
        });
    }
}]);

// app.controller('PostController', ['$scope', 'Post', '$routeParams', function($scope, Post, $routeParams) {
//     function getOnePost() {
//         $scope.posts = Post.get({ id: $routeParams.someId });
//     }
//     getOnePost($routeParams.someId);

// }]);

// app.controller('PostController', ['$scope', 'Post', '$routeParams', function($scope, Post, $routeParams) {
    
//     $scope.post = Post.get({ id: $routeParams.someId });

// }]);


app.controller('PostController', ['$scope', 'Post', '$location', '$routeParams', function($scope, Post, $location, $routeParams) {
    
    $scope.post = Post.get({ id: $routeParams.someId });
   
    $scope.editPost = function() {
        $location.path('/Posts/' + $routeParams.someId + '/update');
    }

    $scope.deletePost = function() {
        if (confirm('Are you sure you want to delete this Post?')) {
            $scope.post.$delete(function() {
                $location.replace().path('/Posts');
            }, function(err) {
                console.log(err);
            });
        }
    }
}]);

app.controller('UpdatePostController', ['$scope', 'Post', '$location', '$routeParams', function($scope, Post, $location, $routeParams) {
    $scope.post = Post.get({ id: $routeParams.someId });

    $scope.updatePost = function() {
        $scope.Post.$update(function() {
            window.history.back();
        }, function(err) {
            console.log(err);
        });
    }
}]);


app.controller