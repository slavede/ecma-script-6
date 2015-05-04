angular.module('EcmaScript6').controller('map', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var object1 = {
		name : 'Slaven'
	},
	object2 = {
		surname : 'Tomac'
	},
	object3 = {
		surname : 'Tomac'
	},
	myMap = new Map([
						[object1,'ObjectWithNameOnly'],
						['myKey1',object1],
						[object2,object1]
					]);

	AppLogger.info('--- get ---');

	AppLogger.info(myMap.get(object1));
	AppLogger.info(myMap.get('myKey1'));
	AppLogger.info(myMap.get(object3));
	AppLogger.info(myMap.get(myMap.get('myKey1')));

	AppLogger.info('--- delete ---');

	AppLogger.info(myMap.get(object1));
	myMap.delete(object1);
	AppLogger.info(myMap.get(object1));

	AppLogger.info('--- entries ---');

	var iterator = myMap.entries();
	AppLogger.info(iterator.next());
	AppLogger.info(iterator.next());
	AppLogger.info(iterator.next());

	AppLogger.info('--- forEach ---');

	myMap.forEach(function(val) {
		AppLogger.info(val);
	});

	AppLogger.info('--- set/has ---');

	AppLogger.info(myMap.has(object3));
	myMap.set(object3, 'setObject');
	AppLogger.info(myMap.has(object3));

	AppLogger.info('--- keys ---');

	var keysIterator = myMap.keys();
	AppLogger.info(keysIterator.next());
	AppLogger.info(keysIterator.next());
	AppLogger.info(keysIterator.next());

	AppLogger.info('--- values ---');

	var valuesIterator = myMap.values();
	AppLogger.info(valuesIterator.next());
	AppLogger.info(valuesIterator.next());
	AppLogger.info(valuesIterator.next());

	AppLogger.info('--- for..of ---');

	for (var [key, val] of myMap) {
		AppLogger.info('key');
		AppLogger.info(key);
		AppLogger.info('val');
		AppLogger.info(val);
	}

}]);