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

	AppLogger.info('--- get ---', 'map-1');

	AppLogger.info(myMap.get(object1), 'map-2');
	AppLogger.info(myMap.get('myKey1'), 'map-3');
	AppLogger.info(myMap.get(object3), 'map-4');
	AppLogger.info(myMap.get(myMap.get('myKey1')), 'map-5');

	AppLogger.info('--- delete ---', 'map-6');

	AppLogger.info(myMap.get(object1), 'map-7');
	myMap.delete(object1);
	AppLogger.info(myMap.get(object1), 'map-8');

	AppLogger.info('--- entries ---', 'map-9');

	var iterator = myMap.entries();
	AppLogger.info(iterator.next(), 'map-10');
	AppLogger.info(iterator.next(), 'map-11');
	AppLogger.info(iterator.next(), 'map-12');

	AppLogger.info('--- forEach ---', 'map-13');

	myMap.forEach(function(val) {
		AppLogger.info(val, 'map-14');
	});

	AppLogger.info('--- set/has ---', 'map-15');

	AppLogger.info(myMap.has(object3), 'map-16');
	myMap.set(object3, 'setObject');
	AppLogger.info(myMap.has(object3), 'map-17');

	AppLogger.info('--- keys ---', 'map-18');

	var keysIterator = myMap.keys();
	AppLogger.info(keysIterator.next(), 'map-19');
	AppLogger.info(keysIterator.next(), 'map-20');
	AppLogger.info(keysIterator.next(), 'map-21');

	AppLogger.info('--- values ---', 'map-22');

	var valuesIterator = myMap.values();
	AppLogger.info(valuesIterator.next(), 'map-23');
	AppLogger.info(valuesIterator.next(), 'map-24');
	AppLogger.info(valuesIterator.next(), 'map-25');

	AppLogger.info('--- for..of ---', 'map-26');

	for (var [key, val] of myMap) {
		AppLogger.info('key', 'map-27');
		AppLogger.info(key, 'map-28');
		AppLogger.info('val', 'map-29');
		AppLogger.info(val, 'map-30');
	}

}]);