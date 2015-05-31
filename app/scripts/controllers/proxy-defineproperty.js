angular.module("EcmaScript6").controller("proxy-defineproperty",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	var myObject = {
		name : 'myObject',
		height : 180
	};

	var proxy = new Proxy(myObject, {
		defineProperty : function(target, property, descriptor) {
			AppLogger.info('Defining property through proxy', 'proxy-defineproperty-1');
			if (property === 'last_name') {
				return false;
			}
			Object.defineProperty(target, property, descriptor);
			return true;
		}
	});

	var descriptor = {
		configurable : true,
		value : 'myLastName'
	};
	var descriptor2 = {
		configurable : true,
		value : 'desc2Value'
	};

	Object.defineProperty(proxy, "last_name", descriptor);
	Object.defineProperty(proxy, "surname", descriptor2);

	AppLogger.info(myObject.name, 'proxy-defineproperty-2');
	// not defined because proxy didn't let us do it
	AppLogger.info(myObject.last_name, 'proxy-defineproperty-3');
	AppLogger.info(myObject.surname, 'proxy-defineproperty-4');
}]);