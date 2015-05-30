angular.module('EcmaScript6').controller('promises', ['$scope', 'AppLogger', '$interval', '$timeout', function($scope, AppLogger, $interval, $timeout) {
	var promise1 = new Promise(function(resolve1, reject2) {
		var counter = 0, iterations = 5;
		// something async here
		$interval(function() {
			if (counter === iterations) {
				resolve1({
					name : 'promise1',
					value : Date.now()
				});
			}
			counter++;
		}, 500);
		AppLogger.info('Started inteval in promise 1', 'promises-1');
	}), promise2 = new Promise(function(resolve2, reject2) {
		// something async here
		$timeout(function() {
			resolve2({
				name : 'promise2',
				value : Date.now()
			});
		}, 1000);
		AppLogger.info('Started timeout in promise 2', 'promises-2');
	}), promise3 = new Promise(function(resolve3, reject3) {
		// something async here
		$timeout(function() {
			reject3({
				name : 'promise3-reject',
				value : Date.now()
			});
		}, 100);
		AppLogger.info('Started timeout in promise 3', 'promises-3');
	});

	promise1.then(function(values) {
		AppLogger.info('I am done with promise 1', 'promises-4');
		AppLogger.info(values, 'promises-5');
	});

	Promise.all([promise2, promise1])
			.then(function(values) {
				AppLogger.info('Finished everything!!!', 'promises-6');
				AppLogger.info(values, 'promises-7');
			});

	Promise.race([promise2, promise1])
			.then(function(values) {
				AppLogger.info('Race finished', 'promises-8');
				AppLogger.info(values, 'promises-9');
			}, function(values) {
				AppLogger.info('Race failed', 'promises-10');
				AppLogger.info(values, 'promises-11');
			});

	Promise.race([promise2, promise1, promise3])
			.then(function(values) {
				AppLogger.info('Race finished', 'promises-12');
				AppLogger.info(values, 'promises-13');
			}, function(values) {
				AppLogger.info('Race failed because of 3rd promise', 'promises-14');
				AppLogger.info(values, 'promises-15');
			});

	Promise.all([promise2, promise1, promise3])
			.then(function(values) {
				AppLogger.info('Finished everything with 3 promises!!!', 'promises-16');
				AppLogger.info(values, 'promises-17');
			}, function(values) {
				AppLogger.info('Something failed with 3 promises', 'promises-18');
				AppLogger.info(values, 'promises-19')
			});
}]);