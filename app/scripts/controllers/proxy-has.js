angular.module("EcmaScript6").controller("proxy-has",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	var myObject = {
		name : 'myObject',
		height : 180
	};

	// we are 'hiding' name
	var proxy = new Proxy(myObject, {
		has : function(target, prop) {
			AppLogger.info('Checking through proxy existence of ' + prop, 'proxy-has-1');
			if (prop === 'name') {
				return false;
			} else {
				return (prop in target);
			}
		}
	});

	AppLogger.info('name' in proxy, 'proxy-has-2');
	AppLogger.info('height' in proxy, 'proxy-has-3');
	AppLogger.info(proxy.hasOwnProperty('name'), 'proxy-has-4');
	AppLogger.info(proxy.hasOwnProperty('height'), 'proxy-has-5');
}]);