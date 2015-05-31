angular.module("EcmaScript6").controller("proxy-deleteproperty",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	var myObject = {
		name : 'MyName',
		height : 180,
	};

	var proxy = new Proxy(myObject, {
		deleteProperty : function(target, prop) {
			AppLogger.info('Deleting property ' + prop, 'proxy-deleteproperty-1');
			if (prop === 'name') {
				return false;
			}
			delete target[prop];
			return true;
		}
	});

	AppLogger.info(delete proxy.name, 'proxy-deleteproperty-2');
	AppLogger.info('myObject.name: ' + myObject.name, 'proxy-deleteproperty-3');

	AppLogger.info(delete proxy.height, 'proxy-deleteproperty-4');
	AppLogger.info('myObject.height: ' + myObject.height, 'proxy-deleteproperty-5');
}]);