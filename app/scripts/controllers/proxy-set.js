angular.module("EcmaScript6").controller("proxy-set",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	var myObject = {
		name : 'myObject',
		height : 180
	};

	var proxy = new Proxy(myObject, {
		set : function(target, property, value, receiver) {
			AppLogger.info('Setting value for ' + property + ' to ' + value, 'proxy-set-1');
			if (property === 'height' && value > 300) {
				return false;
			}
			target[property] = value;
			return true;
		}
	});

	proxy.height = 150;
	AppLogger.info(myObject.height, 'proxy-set-2');

	proxy.height = 500;
	AppLogger.info(myObject.height, 'proxy-set-3');

	proxy.name = 'NewName';
	AppLogger.info(myObject.name, 'proxy-set-4');
}]);