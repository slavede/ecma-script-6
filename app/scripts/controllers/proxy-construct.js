angular.module("EcmaScript6").controller("proxy-construct",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	'use strict';
	function Dog(name) {
		this.name = name;
	}

	Dog.prototype.bark = function() {
		AppLogger.info('Wuf from ' + this.name, 'proxy-construct-1');
	};

	Dog.prototype.say = function(extra) {
		AppLogger.info('Hello from ' + this.name, 'proxy-construct-2');
		if (extra) {
			AppLogger.info('. And ' + extra, 'proxy-construct-3');
		}
	};

	var proxy = new Proxy(Dog, {
		construct: function(target, argumentsList) {
			AppLogger.info('Constructing in proxy', 'proxy-construct-4');
			argumentsList[0] = argumentsList[0].toUpperCase();
			return new target(argumentsList);
		}
	});

	var dog1 = new proxy('Snuppy');
	var dog2 = new Dog('Snuppy');

	dog1.say();
	dog2.say();
}]);