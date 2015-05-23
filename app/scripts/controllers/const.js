angular.module('EcmaScript6').controller('const', ['$scope', 'AppLogger', function($scope, AppLogger) {
	'use strict';
	var myInnerConstant;

	const myConstant = 123;

	if (myConstant === 123) {
		const myInnerConstant = 444;
		AppLogger.info('In the block: ' + myInnerConstant);
	}

	AppLogger.info('Outside the block: ' + myInnerConstant);

	try {
		myConstant = 666;
	} catch (e) {
		AppLogger.info('Thrown exception because of trying to redefine it');
		console.log(e);
	}
}]);