angular.module('EcmaScript6').controller('const', ['$scope', 'AppLogger', function($scope, AppLogger) {
	'use strict';
	var myInnerConstant;

	const myConstant = 123;

	if (myConstant === 123) {
		const myInnerConstant = 444;
		AppLogger.info('In the block: ' + myInnerConstant, 'const1');
	}

	AppLogger.info('Outside the block: ' + myInnerConstant, 'const2');

	try {
		myConstant = 666;
	} catch (e) {
		AppLogger.info('Thrown exception because of trying to redefine it', 'const3');
		console.log(e);
	}
}]);