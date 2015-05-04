angular.module('EcmaScript6').controller('set', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var object1 = {
		name : 'Slaven'
	},
	object2 = {
		surname : 'Tomac'
	},
	object3 = {
		surname : 'Tomac'
	},
	mySet = new Set([object1, 'StringObject', 2, object2, object1]);

	AppLogger.info('--- size ---');
	AppLogger.info(mySet.size);

	AppLogger.info('--- has ---');

	AppLogger.info(mySet.has(object1));
	AppLogger.info(mySet.has('myKey1'));
	AppLogger.info(mySet.has(object3));
	AppLogger.info(mySet.has(2));

	AppLogger.info('--- delete ---');

	AppLogger.info(mySet.has(object1));
	mySet.delete(object1);
	AppLogger.info(mySet.has(object1));

	AppLogger.info('--- entries ---');

	var iterator = mySet.entries();
	AppLogger.info(iterator.next());
	AppLogger.info(iterator.next());
	AppLogger.info(iterator.next());

	AppLogger.info('--- forEach ---');

	mySet.forEach(function(val) {
		AppLogger.info(val);
	});

	AppLogger.info('--- add ---');

	AppLogger.info(mySet.has(object3));
	mySet.add(object3);
	AppLogger.info(mySet.has(object3));

	AppLogger.info('--- keys ---');

	var keysIterator = mySet.keys();
	AppLogger.info(keysIterator.next());
	AppLogger.info(keysIterator.next());
	AppLogger.info(keysIterator.next());

	AppLogger.info('--- values ---');

	var valuesIterator = mySet.values();
	AppLogger.info(valuesIterator.next());
	AppLogger.info(valuesIterator.next());
	AppLogger.info(valuesIterator.next());

	AppLogger.info('--- for..of ---');

	for (var val of mySet) {
		AppLogger.info('val');
		AppLogger.info(val);
	}
}]);