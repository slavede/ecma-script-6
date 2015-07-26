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

	// indexOf
	// int8Array = [1,0,0,127,126,0,1,1]
	AppLogger.info(int8Array.indexOf(1, 1), 'typedarray-23');

	// join
	// entire page of examples :)

	// keys
	// int8Array = [1,0,0,127,126,0,1,1]
	var keys = int8Array.keys();
	for (key of keys) {
		AppLogger.info(key, 'typedarray-24');
	}

	// lastIndexOf
	// int8Array = [1,0,0,127,126,0,1,1]
	AppLogger.info(int8Array.lastIndexOf(1, 3), 'typedarray-25');

	// map
	// int8Array = [1,0,0,127,126,0,1,1]
	var int8ArrayMinus5 = int8Array.map(function(currentElement) {
		return currentElement - 5;
	});
	AppLogger.info(int8ArrayMinus5.join(','), 'typedarray-26');

	// reduce
	// we'll sum up only last char in number
	var newInt8Array = new Int8Array(4);
	newInt8Array[0] = 51;
	newInt8Array[1] = 51;
	newInt8Array[2] = 62;
	newInt8Array[3] = 72;
	var reducedValue = newInt8Array.reduce(function(previousValue, currentValue, index) {
		AppLogger.info('index: ' + index, 'typedarray-27');
		AppLogger.info('previousValue: ' + previousValue, 'typedarray-27');
		AppLogger.info('currentValue: ' + currentValue, 'typedarray-27');
		return (previousValue % 10) + (currentValue % 10);
	});
	AppLogger.info('reducedValue: ' + reducedValue, 'typedarray-28');

	// reduceRight
	// we'll sum up only last char in number
	newInt8Array = new Int8Array(4);
	newInt8Array[0] = 51;
	newInt8Array[1] = 51;
	newInt8Array[2] = 62;
	newInt8Array[3] = 72;
	reducedValue = newInt8Array.reduceRight(function(previousValue, currentValue, index) {
		AppLogger.info('index: ' + index, 'typedarray-29');
		AppLogger.info('previousValue: ' + previousValue, 'typedarray-29');
		AppLogger.info('currentValue: ' + currentValue, 'typedarray-29');
		return (previousValue % 10) + (currentValue % 10);
	});
	AppLogger.info('reducedValue: ' + reducedValue, 'typedarray-30');

	// reverse
	// newInt8Array = [51, 51, 62, 72]
	newInt8Array.reverse();
	AppLogger.info(newInt8Array.join(','), 'typedarray-31');

	// set
	var setArrayExample = new Int8Array(4);
	setArrayExample.set([1,2,3], 1);
	AppLogger.info(setArrayExample.join(','), 'typedarray-32');

	// slice
	// setArrayExample = [0,1,2,3]
	var slicedArray = setArrayExample.slice(1,3);
	AppLogger.info(slicedArray.join(','), 'typedarray-33');

	// some
	// setArrayExample = [0,1,2,3]
	var isThereATwo = function(currentElement) {
		if (currentElement === 2) {
			return true;
		} else {
			return false;
		}
	};
	AppLogger.info(setArrayExample.some(isThereATwo), 'typedarray-34');

	// sort
	// newInt8Array = [72, 62, 51, 51];
	// var ascSort = function(a, b) {
	// 	if (a > b) {
	// 		return 1;
	// 	} else if (a === b) {
	// 		return 0;
	// 	} else {
	// 		return -1;
	// 	}
	// };
	// var descSort = function(a, b) {
	// 	if (a > b) {
	// 		return -1;
	// 	} else if (a === b) {
	// 		return 0;
	// 	} else {
	// 		return 1;
	// 	}
	// };
	// newInt8Array.sort(ascSort);
	// AppLogger.info(newInt8Array.join(','), 'typedarray-35');
	// newInt8Array.sort(descSort);
	// AppLogger.info(newInt8Array.join(','), 'typedarray-36');

	// subarray
	// newInt8Array = [72, 62, 51, 51];
	var subarray = newInt8Array.subarray(1,3);
	AppLogger.info(subarray.join(','), 'typedarray-37');

	// values
	// newInt8Array = [72, 62, 51, 51];
	var values = newInt8Array.values();
	for (val of values) {
		AppLogger.info(val, 'typedarray-38');
	}

	// toLocaleString
	// newInt8Array = [72, 62, 51, 51];
	AppLogger.info(newInt8Array.toLocaleString(), 'typedarray-39');

	// toString
	// newInt8Array = [72, 62, 51, 51];
	AppLogger.info(newInt8Array.toString(), 'typedarray-40');


}]);
