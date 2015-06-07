angular.module("EcmaScript6").controller("proxy-enumerate",  ['$scope', 'AppLogger', function($scope, AppLogger) {
	'use strict';
	var myObject1 = [1,2,3,4,5],
		myObject2 = [100, 101],
		enumerateFuncion = function* (objects) {
			var counter = 0,
				obj;
			AppLogger.info('Starting to enumerate in proxy', 'proxy-enumerate-1');
			AppLogger.info(objects, 'proxy-enumerate-2');
			
			if (objects.length < 3) {
				for (obj of objects) {
					yield obj;
				}
			} else {
				for (obj of objects) {
					if (counter < 3) {
						yield obj;
						counter++;
					}
				}
			}
		};

	var proxy1 = new Proxy(myObject1, {
		enumerate : function(target) {
			return enumerateFuncion(target);
		}
	});

	var proxy2 = new Proxy(myObject2, {
		enumerate : function(target) {
			return enumerateFuncion(target);
		}
	});

	var obj;

	AppLogger.info('Iterating myObject1', 'proxy-enumerate-3');
	for (obj in proxy1) {
		AppLogger.info(obj, 'proxy-enumerate-4');
	}

	AppLogger.info('Iterating myObject2', 'proxy-enumerate-5');
	for (obj in proxy2) {
		AppLogger.info(obj, 'proxy-enumerate-6');
	}

}]);