'use strict';

/**
 * @ngdoc overview
 * @name angularDemoApp
 * @description
 * # angularDemoApp
 *
 * Main module of the application.
 */
angular
  .module('angularDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
