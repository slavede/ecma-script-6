angular.module("EcmaScript6").controller("proxy-apply",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	'use strict';
	function Dog(name) {
		this.name = name;
	}

	Dog.prototype.bark = function() {
		AppLogger.info('Wuf from ' + this.name, 'proxy-apply-1');
	};

	Dog.prototype.say = function(extra) {
		AppLogger.info('Hello from ' + this.name, 'proxy-apply-2');
		if (extra) {
			AppLogger.info('. And ' + extra, 'proxy-apply-3');
		}
	};

	var dog = new Dog('Snuppy');

	var proxy = new Proxy(dog.say, {
		apply : function(target, thisArgument, argList) {
			AppLogger.info('Going through apply', 'proxy-apply-4');
			argList[0] = argList[0] + '---went through apply';
			target.apply(thisArgument, argList);
		}
	});

	proxy.apply(dog, ['Yes!']);

	dog.say('Yes!');

}]);