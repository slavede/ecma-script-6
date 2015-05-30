"use strict";

angular.module("EcmaScript6").controller("restParameters-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	var sum = function sum(start) {
		for (var _len = arguments.length, additional = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			additional[_key - 1] = arguments[_key];
		}

		additional.forEach(function (val) {
			start += val;
		});
		return start;
	};

	AppLogger.info(sum(1, 5, 7, 9, 10), "rest-parameters-1");
	AppLogger.info(sum(3), "rest-parameters-2");
}]);
//# sourceMappingURL=rest-parameters-babel.js.map