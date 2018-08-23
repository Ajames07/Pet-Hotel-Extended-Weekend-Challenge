console.log('JS');

let app = angular.module('PetHotelApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');
    
    $routeProvider
    .when('/', {
        redirectTo: '/dashboard'
    })
    .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashBoardController as vm'
    })
    .when('/owners', {
        templateUrl: 'views/owners.html',
        controller: 'OwnersController as vm'
    })
    .otherwise( { template: '<h1>404</h1>' } );
}]);