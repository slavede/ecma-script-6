angular.module("EcmaScript6").controller("proxy",  ['$scope', 'AppLogger', function($scope, AppLogger) {
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

	var proxy = new Proxy(myObject, {
	});	

	myObject.walk();

	proxy.walk = function() {
		this.distance++;
		AppLogger.info('Walking in proxy, distance is ' + this.distance, 'proxy-3');
	};

	// notice I'm calling both methods from myObject
	myObject.walk();
	myObject.run();	
}]);