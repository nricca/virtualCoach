"use strict";

angular.module('virtualCoachApp', ['ngRoute', 'ui.bootstrap', 'angularFileUpload'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',
                controller: 'HomeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });