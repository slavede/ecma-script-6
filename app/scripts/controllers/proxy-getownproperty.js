angular.module("EcmaScript6").controller("proxy-getownproperty",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	var myObject = {
		name : 'myObject',
		height : 180
	};
	var proxy = new Proxy(myObject, {
		getOwnPropertyDescriptor : function(target, prop) {
			AppLogger.info('Getting descriptor via proxy for ' + prop, 'proxy-getownproperty-1');
			if (prop === 'height') {
				return {
					value: 100
				};
			} else {
				return Object.getOwnPropertyDescriptor(target, prop);
			}
		}
	});

	AppLogger.info(Object.getOwnPropertyDescriptor(proxy, 'height'), 'proxy-getownproperty-2');
	AppLogger.info(Object.getOwnPropertyDescriptor(proxy, 'name'), 'proxy-getownproperty-3');
}]);