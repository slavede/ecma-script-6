angular
	.module('EcmaScript6', ['ui.router', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider) {
		//
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/");

		

		$stateProvider
			.state('home', {
				url : '/',
				templateUrl : 'app/partials/home.html'
			})
			.state('about-me', {
				url : '/about-me',
				templateUrl : 'app/partials/about-me.html'
			})
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
			.state('ecma6.const', {
				url : '/const',
				templateUrl : 'app/partials/ecma6/const.html',
				controller : 'const'
			})
			.state('ecma6.proxy', {
				url : '/proxy',
				templateUrl : 'app/partials/ecma6/proxy.html',
				controller : 'proxy'
			})
			.state('ecma6.proxy-getprototypeof', {
				url : '/proxy-getprototypeof',
				templateUrl : 'app/partials/ecma6/proxy-getprototypeof.html',
				controller : 'proxy-getprototypeof'
			})
			.state('ecma6.proxy-setprototypeof', {
				url : '/proxy-setprototypeof',
				templateUrl : 'app/partials/ecma6/proxy-setprototypeof.html',
				controller : 'proxy-setprototypeof'
			})
			.state('ecma6.proxy-isextendible', {
				url : '/proxy-isextendible',
				templateUrl : 'app/partials/ecma6/proxy-isextendible.html',
				controller : 'proxy-isextendible'
			})
			.state('ecma6.proxy-preventextensions', {
				url : '/proxy-preventextensions',
				templateUrl : 'app/partials/ecma6/proxy-preventextensions.html',
				controller : 'proxy-preventextensions'
			})
			.state('ecma6.proxy-getownproperty', {
				url : '/proxy-getownproperty',
				templateUrl : 'app/partials/ecma6/proxy-getownproperty.html',
				controller : 'proxy-getownproperty'
			})
			.state('ecma6.proxy-defineproperty', {
				url : '/proxy-defineproperty',
				templateUrl : 'app/partials/ecma6/proxy-defineproperty.html',
				controller : 'proxy-defineproperty'
			})
			.state('ecma6.proxy-has', {
				url : '/proxy-has',
				templateUrl : 'app/partials/ecma6/proxy-has.html',
				controller : 'proxy-has'
			})
			.state('ecma6.proxy-set', {
				url : '/proxy-set',
				templateUrl : 'app/partials/ecma6/proxy-set.html',
				controller : 'proxy-set'
			})
			.state('ecma6.proxy-deleteproperty', {
				url : '/proxy-deleteproperty',
				templateUrl : 'app/partials/ecma6/proxy-deleteproperty.html',
				controller : 'proxy-deleteproperty'
			})
			.state('ecma6.proxy-enumerate', {
				url : '/proxy-enumerate',
				templateUrl : 'app/partials/ecma6/proxy-enumerate.html',
				controller : 'proxy-enumerate'
			})
			.state('ecma6.proxy-ownkeys', {
				url : '/proxy-ownkeys',
				templateUrl : 'app/partials/ecma6/proxy-ownkeys.html',
				controller : 'proxy-ownkeys'
			})
			.state('ecma6.proxy-apply', {
				url : '/proxy-apply',
				templateUrl : 'app/partials/ecma6/proxy-apply.html',
				controller : 'proxy-apply'
			})
			.state('ecma6.proxy-construct', {
				url : '/proxy-construct',
				templateUrl : 'app/partials/ecma6/proxy-construct.html',
				controller : 'proxy-construct'
			});


	})
	.run(function($rootScope, AppLogger) {
		'use strict';
		$rootScope.appLogger = AppLogger;
		$rootScope.$on('$stateChangeStart', function() {
			$rootScope.appLogger.clear();
		});
		$rootScope.$on('asideMenuToggle', function(event, isShown) {
			$rootScope.asideMenuOpened = isShown;
		});
		$rootScope.asideMenuApi = {};
		$rootScope.menuItems = [
			{
				sref : 'ecma6.templatestrings-babel',
				display : 'Template Strings'
			},
			{
				sref : 'ecma6.let-babel',
				display : 'Let Block'
			},
			{
				sref: 'ecma6.arrowfunction-babel',
				display : 'Arrow Function'
			},
			{
				sref : 'ecma6.classes-babel',
				display : 'Classes'
			},
			{
				sref : 'ecma6.modules-babel',
				display : 'Modules',
				note : '(only in Firefox)'
			},
			{
				sref : 'ecma6.default-parameters-babel',
				display : 'Default Parameters'
			},
			{
				sref : 'ecma6.rest-parameters-babel',
				display : 'Rest Parameters'
			},
			{
				sref : 'ecma6.generators-babel',
				display : 'Generators'
			},
			{
				sref : 'ecma6.promises',
				display : 'Promises'
			},
			{
				sref : 'ecma6.map-babel',
				display : 'Map'
			},
			{
				sref : 'ecma6.set-babel',
				display : 'Set'
			},
			{
				sref : 'ecma6.const',
				display : 'Constants',
				note : '(only in Chrome)'
			},
			{
				sref : 'ecma6.proxy',
				display : 'Proxy',
				note : '(only in Firefox)',
				subItems : [
					{
						sref : 'ecma6.proxy-getprototypeof',
						display : '.getPrototypeOf()'
					},
					{
						sref : 'ecma6.proxy-setprototypeof',
						display : '.setPrototypeOf()'
					},
					{
						sref : 'ecma6.proxy-isextendible',
						display : '.isExtendible()'
					},
					{
						sref : 'ecma6.proxy-preventextensions',
						display : '.preventExtensions()'
					},
					{
						sref : 'ecma6.proxy-getownproperty',
						display : '.getOwnPropertyDescriptor()'
					},
					{
						sref : 'ecma6.proxy-defineproperty',
						display : '.defineProperty()'
					},
					{
						sref : 'ecma6.proxy-has',
						display : '.has()'
					},
					{
						sref : 'ecma6.proxy-set',
						display : '.set()'
					},
					{
						sref : 'ecma6.proxy-deleteproperty',
						display : '.deleteproperty()'
					},
					{
						sref : 'ecma6.proxy-enumerate',
						display : '.enumerate()'
					},
					{
						sref : 'ecma6.proxy-ownkeys',
						display : '.ownkeys()'
					},
					{
						sref : 'ecma6.proxy-apply',
						display : '.apply()'
					},
					{
						sref : 'ecma6.proxy-construct',
						display : '.construct()'
					}
				]
			}
		];
	});