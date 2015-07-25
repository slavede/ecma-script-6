angular.module('EcmaScript6').controller('typedarray', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var int8Array = new Int8Array(8);
	AppLogger.info(int8Array.join(','), 'typedarray-1');
	int8Array[0] = 1;
	AppLogger.info(int8Array.join(','), 'typedarray-2');
	int8Array[1] = -123;
	AppLogger.info(int8Array.join(','), 'typedarray-3');
	int8Array[2] = -128;
	AppLogger.info(int8Array.join(','), 'typedarray-4');
	int8Array[3] = -129;
	AppLogger.info(int8Array.join(','), 'typedarray-5');
	int8Array[4] = -130;
	AppLogger.info(int8Array.join(','), 'typedarray-6');
	int8Array[5] = 129;
	AppLogger.info(int8Array.join(','), 'typedarray-7');
	int8Array[6] = 1.45;
	AppLogger.info(int8Array.join(','), 'typedarray-8');
	int8Array[7] = 1.55;
	AppLogger.info(int8Array.join(','), 'typedarray-9');
	int8Array[7] = 1.55;
	AppLogger.info(int8Array.join(','), 'typedarray-10');


}]);