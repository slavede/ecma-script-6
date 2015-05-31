angular.module("EcmaScript6").controller("proxy-isextendible",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	var myObject = {
		name : 'MyName',
		distance : 0,
		walk : function() {
			this.distance++;
			AppLogger.info('Walking, distance is ' + this.distance, 'proxy-1');
		},
		run : function() {
			this.distance += 2;
			AppLogger.info('Running, distance is ' + this.distance, 'proxy-2');
		}
	};
	
	AppLogger.info('Object.isExtensible(myObject): ' + Object.isExtensible(myObject), 'proxy-4');

	var extensibleProxy = new Proxy(myObject, {
		isExtensible : function(target) {
			AppLogger.info('I am being proxied through extensibleProxy' + target.name, 'proxy-5');
			return true;
		}
	});

	AppLogger.info('Object.isExtensible(myObject): ' + Object.isExtensible(myObject), 'proxy-6');
	AppLogger.info('Object.isExtensible(extensibleProxy): ' + Object.isExtensible(extensibleProxy), 'proxy-7');
}]);