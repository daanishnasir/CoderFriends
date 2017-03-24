angular.module('myApp').controller('mainCtrl', function($scope,githubService, $state) {

    $scope.getFollowing = githubService.getFollowing().then(function(response) {
        $scope.data = response.data;
        console.log(response);
        console.log('hi');

        return response;
    });


$scope.test = 'this is a test';

});
