angular.module('EcmaScript6').controller('typedarray', ['$scope', 'AppLogger', '$anchorScroll', '$location', function($scope, AppLogger, $anchorScroll, $location) {
	$scope.scrollTo = function(anchor) {
		$location.hash(anchor);
		$anchorScroll();
	};

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

	// copyWithin()
	var int8ArrayNew = new Int8Array(5);
	int8ArrayNew[0] = 1;
	int8ArrayNew[1] = 2;
	int8ArrayNew.copyWithin(2, 0);
	AppLogger.info(int8ArrayNew.join(','), 'typedarray-11');

	// entries()
	var int8ArrayNewIterator = int8ArrayNew.entries();
	for (var [key, val] of int8ArrayNewIterator) {
		AppLogger.info(key + ' : ' + val, 'typedarray-12');
	}

	// every()
	var checkForBiggerThanTwo = function(currentValue, index, array) {
		if (currentValue > 2) {
			return false;
		} else {
			return true;
		}
	};
	AppLogger.info(int8Array.every(checkForBiggerThanTwo), 'typedarray-13');
	AppLogger.info(int8ArrayNew.every(checkForBiggerThanTwo), 'typedarray-14');

	// fill()
	var fillArray1 = new Int8Array(5);
	var fillArray2 = new Int8Array(5);
	var fillArray3 = new Int8Array(5);
	var fillArray4 = new Int8Array(5);

	fillArray1.fill(66);
	fillArray2.fill(66, 1);
	fillArray3.fill(66, 1, 2);
	fillArray4.fill(66, 1, 55);

	AppLogger.info(fillArray1.join(','), 'typedarray-15');
	AppLogger.info(fillArray2.join(','), 'typedarray-16');
	AppLogger.info(fillArray3.join(','), 'typedarray-17');
	AppLogger.info(fillArray4.join(','), 'typedarray-18');

	// filter
	// int8Array = [1,-123,-128,127,126,-127,1,1]
	var negativeNumbersAtOddIndex = int8Array.filter(function(currentValue, index) {
		if (index % 2 === 1 && currentValue < 0) {
			return true;
		}
	});
	AppLogger.info(negativeNumbersAtOddIndex.join(','), 'typedarray-19');

	// find
	// int8Array = [1,-123,-128,127,126,-127,1,1]
	var isBiggerThan100 = function(currentValue, index, array) {
		if (currentValue > 100) {
			return true;
		} else {
			return false;
		}
	};
	AppLogger.info(int8Array.find(isBiggerThan100), 'typedarray-20');

	// findIndex
	AppLogger.info(int8Array.findIndex(isBiggerThan100), 'typedarray-21');

	// forEach
	// int8Array = [1,-123,-128,127,126,-127,1,1]
	int8Array.forEach(function(currentValue, index, array) {
		if (currentValue < 0) {
			array[index]= 0;
		}
	});
	AppLogger.info(int8Array.join(','), 'typedarray-22');

}]);