angular
	.module('EcmaScript6', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("#/ecma6");

		$stateProvider
			.state('ecma6', {
				url : '/ecma6',
				templateUrl : 'partials/ecma6.html'
			})
			.state('ecma6.templatestrings', {
				url : 'ecma6/templatestrings',
				templateUrl : 'partials/ecma6/templatestrings.html',
				controller : 'templatestrings'
			})
			.state('ecma6.templatestrings-babel', {
				url : 'ecma6/templatestrings',
				templateUrl : 'partials/ecma6/templatestrings-babel.html',
				controller : 'templatestrings-babel'
			})
			.state('home', {
				url : '/home',
				templateUrl : 'partials/home.html'
			})
	});