angular
	.module('EcmaScript6', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		require.config({
			baseUrl: "app/scripts/modules"
		});

		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/home");

		

		$stateProvider
			.state('ecma6', {
				url : '/ecma6',
				templateUrl : 'app/partials/ecma6.html'
			})
			.state('ecma6.templatestrings', {
				url : '/templatestrings',
				templateUrl : 'app/partials/ecma6/templatestrings.html',
				controller : 'templatestrings'
			})
			.state('ecma6.templatestrings-babel', {
				url : '/templatestrings-babel',
				templateUrl : 'app/partials/ecma6/templatestrings-babel.html',
				controller : 'templatestrings-babel'
			})
			.state('ecma6.let', {
				url : '/let',
				templateUrl : 'app/partials/ecma6/let.html',
				controller : 'let'
			})
			.state('ecma6.let-babel', {
				url : '/let-babel',
				templateUrl : 'app/partials/ecma6/let-babel.html',
				controller : 'let-babel'
			})
			.state('ecma6.arrowfunction', {
				url : '/arrowfunction',
				templateUrl : 'app/partials/ecma6/arrowfunction.html',
				controller : 'arrowfunction'
			})
			.state('ecma6.arrowfunction-babel', {
				url : '/arrowfunction-babel',
				templateUrl : 'app/partials/ecma6/arrowfunction-babel.html',
				controller : 'arrowfunction-babel'
			})
			.state('ecma6.classes-babel', {
				url : '/classes-babel',
				templateUrl : 'app/partials/ecma6/classes-babel.html',
				controller : 'classes-babel'
			})
			.state('ecma6.modules-babel', {
				url : '/modules-babel',
				templateUrl : 'app/partials/ecma6/modules-babel.html',
				controller : 'modules-babel'
			})
			.state('ecma6.default-parameters-babel', {
				url : '/default-parameters-babel',
				templateUrl : 'app/partials/ecma6/default-parameters-babel.html',
				controller : 'defaultParameters-babel'
			})
			.state('ecma6.rest-parameters-babel', {
				url : '/rest-parameters-babel',
				templateUrl : 'app/partials/ecma6/rest-parameters-babel.html',
				controller : 'restParameters-babel'
			})
			.state('ecma6.generators', {
				url : '/generators',
				templateUrl : 'app/partials/ecma6/generators.html',
				controller : 'generators'
			})
			.state('ecma6.generators-babel', {
				url : '/generators-babel',
				templateUrl : 'app/partials/ecma6/generators-babel.html',
				controller : 'generators-babel'
			})
			.state('ecma6.promises', {
				url : '/promises',
				templateUrl : 'app/partials/ecma6/promises.html',
				controller : 'promises'
			})
			.state('ecma6.map', {
				url : '/map',
				templateUrl : 'app/partials/ecma6/map.html',
				controller : 'map'
			})
			.state('ecma6.map-babel', {
				url : '/map-babel',
				templateUrl : 'app/partials/ecma6/map-babel.html',
				controller : 'map-babel'
			})
			.state('ecma6.set', {
				url : '/set',
				templateUrl : 'app/partials/ecma6/set.html',
				controller : 'set'
			})
			.state('ecma6.set-babel', {
				url : '/set-babel',
				templateUrl : 'app/partials/ecma6/set-babel.html',
				controller : 'set-babel'
			})
	})
	.run(function($rootScope, AppLogger) {
		$rootScope.appLogger = AppLogger;
		$rootScope.$on('$stateChangeStart', function(event, next, current) {
			$rootScope.appLogger.clear();
		});
	});