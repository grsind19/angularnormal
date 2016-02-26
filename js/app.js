'use strict';

/* App Module */

var App = angular.module("appname", ['ngRoute','app.maincontroller', 'app.directives', 'app.services',
    'app.filters']);
App.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'appControl'
    }).otherwise({
        redirectTo: '/home'
    });
});
