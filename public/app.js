angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: './templates/login.html'
        })

        .state('friends', {
            url: '/friends/:github_username',
            templateUrl: './templates/friend.html'
        })

        .state('home', {
            url: '/home',
            templateUrl:'./templates/home.html',
            controller: "mainCtrl"
        });



    $urlRouterProvider.otherwise('/');



});
