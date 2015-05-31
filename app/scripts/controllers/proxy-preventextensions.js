angular.module("EcmaScript6").controller("proxy-preventextensions",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	var myObject = {
		name : 'myObject',
		distance : 0,
	};

	myObject.getDistance = function() {
		return this.distance;
	};
	
	var preventExtensionsProxy = new Proxy(myObject, {
		preventExtensions : function(target) {
			AppLogger.info('Prevent extensions in proxy!', 'proxy-103');
			// this will make Object.isExtensible(target) return false
			Object.preventExtensions(target);
			return true;
		}
	});

	Object.preventExtensions(preventExtensionsProxy);


	myObject.resetDistance = function() {
		AppLogger.info('Reseting distance!', 'proxy-104');
		this.distance = 0;
	};

	AppLogger.info('Before preventing, method can be added: ' + (myObject.getDistance !== undefined), 'proxy-105');
	AppLogger.info('After preventing, method can not be added: ' + (myObject.resetDistance === undefined), 'proxy-106');
}]);