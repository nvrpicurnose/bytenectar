var ByteNectar = angular.module('ByteNectar', ['ui.router']);

ByteNectar.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.state('products', {
			url: '/',
			templateUrl: 'templates/products.html',
			controller: 'productCtrl'
		})
		.state('demo', {
			url: '/',
			templateUrl: 'templates/demo.html',
			controller: 'demoCtrl'
		})
		.state('contact', {
			url: '/',
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
		.state('about', {
			url: '/',
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		});
}]);

