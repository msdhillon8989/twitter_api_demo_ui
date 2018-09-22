// create the module and name it scotchApp
var demo_app = angular.module('twitter_demo_app', ['ngRoute','ngMaterial']);

// configure our routes
demo_app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/dashboard.html',
            controller  : 'dashboardController'
        });



});

// create the controller and inject Angular's $scope
demo_app.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

demo_app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

demo_app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});