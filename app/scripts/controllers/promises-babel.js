"use strict";

angular.module("EcmaScript6").controller("promises-babel", ["$scope", "AppLogger", "$interval", "$timeout", function ($scope, AppLogger, $interval, $timeout) {
	var promise1 = new Promise(function (resolve1, reject2) {
		var counter = 0,
		    iterations = 5;
		// something async here
		$interval(function () {
			if (counter === iterations) {
				resolve1({
					name: "promise1",
					value: Date.now()
				});
			}
			counter++;
		}, 500);
		AppLogger.info("Started inteval in promise 1");
	}),
	    promise2 = new Promise(function (resolve2, reject2) {
		// something async here
		$timeout(function () {
			resolve2({
				name: "promise2",
				value: Date.now()
			});
		}, 1000);
		AppLogger.info("Started timeout in promise 2");
	}),
	    promise3 = new Promise(function (resolve3, reject3) {
		// something async here
		$timeout(function () {
			reject3({
				name: "promise3-reject",
				value: Date.now()
			});
		}, 100);
		AppLogger.info("Started timeout in promise 3");
	});

	promise1.then(function (values) {
		AppLogger.info("I am done with promise 1");
		AppLogger.info(values);
	});

	Promise.all([promise2, promise1]).then(function (values) {
		AppLogger.info("Finished everything!!!");
		AppLogger.info(values);
	});

	Promise.race([promise2, promise1]).then(function (values) {
		AppLogger.info("Race finished");
		AppLogger.info(values);
	}, function (values) {
		AppLogger.info("Race failed");
		AppLogger.info(values);
	});

	Promise.race([promise2, promise1, promise3]).then(function (values) {
		AppLogger.info("Race finished");
		AppLogger.info(values);
	}, function (values) {
		AppLogger.info("Race failed because of 3rd promise");
		AppLogger.info(values);
	});

	Promise.all([promise2, promise1, promise3]).then(function (values) {
		AppLogger.info("Finished everything with 3 promises!!!");
		AppLogger.info(values);
	}, function (values) {
		AppLogger.info("Something failed with 3 promises");
		AppLogger.info(values);
	});
}]);
//# sourceMappingURL=promises-babel.js.map