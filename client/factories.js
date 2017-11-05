angular.module('codecc.factories', [])
.factory('Post', ['$resource', function($resource) {
    return $resource('/api/posts/:id', { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    });
}])
.factory('User', ['$resource', function($resource) {
    return $resource('/api/users/:id');
    
}])
.factory('Reply', ['$resource', function($resource) {
    return $resource('/api/replies/:id'), { id: '@id' }, {
        update: {
            method: 'PUT'
        }
    }
}])
.factory('Bootcamp', ['$resource', function($resource){
    return $resource('api/bootcamps'), {
        update: {
            method: 'PUT'
        }
    }
}])
