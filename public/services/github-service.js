angular.module('myApp').service('githubService', function($http) {
    this.getFollowing = function() {
        return $http({
            method: 'GET',
            url: 'api/github/following'
        });

    };
});
