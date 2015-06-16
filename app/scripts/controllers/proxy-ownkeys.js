angular.module("EcmaScript6").controller("proxy-ownkeys",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	function Parent () {
		this.size = 'BIG';
	}

	function ChildOne() {
		this.name = 'ChildOne';
		this.height = 180;
	}

	function ChildTwo() {
		this.name = 'ChildTwo';
	}

	ChildOne.prototype = new Parent();
	ChildTwo.prototype = new Parent();

	var c1 = new ChildOne();
	var c2 = new ChildTwo();

	var p1 = new Proxy(c1, {
		ownKeys : function(target) {
			AppLogger.info('Getting keys in proxy1', 'proxy-ownkeys-3');
			return Object.keys(c1);
		}
	});

	var p2 = new Proxy(c2, {
		ownKeys : function(target) {
			AppLogger.info('Getting keys in proxy2', 'proxy-ownkeys-4');
			return ['la'];
		}
	});

	AppLogger.info(Object.getOwnPropertyNames(p1), 'proxy-ownkeys-1');
	AppLogger.info(Object.getOwnPropertyNames(p2), 'proxy-ownkeys-2');
}]);