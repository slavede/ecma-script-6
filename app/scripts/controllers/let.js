angular.module('EcmaScript6').controller('let', ['$scope', 'AppLogger', function($scope, AppLogger) {
	'use strict';
	var a = 10, d = 11;
	if (a >= 10) {
		var c = 4;
		let b = 3;
		let a = 11;
		var d = 15;

		AppLogger.info('inside if a: ' + a, 'let-1');
		AppLogger.info('inside if b: ' + b, 'let-2');
		AppLogger.info('inside if c: ' + c, 'let-3');
		AppLogger.info('inside if d: ' + d, 'let-4');
		
	}

	AppLogger.info('outside if a: ' + a, 'let-5');
	// AppLogger.info('outside if b: ' + b);
	AppLogger.info('outside if c: ' + c, 'let-6');
	AppLogger.info('outside if d: ' + d, 'let-7');
	AppLogger.info('outside if e: ' + e, 'let-8');
	// AppLogger.info('outside if f: ' + f);
	var e = 16;
	let f = 111;


}]);