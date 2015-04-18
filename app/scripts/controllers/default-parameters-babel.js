"use strict";

angular.module("EcmaScript6").controller("defaultParameters-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	var extractFirst = function extractFirst(word) {
		return word.substring(0, 1);
	},
	    isFirstCapital = function isFirstCapital(word) {
		var firstLetter = arguments[1] === undefined ? extractFirst(word) : arguments[1];
		return (function () {
			return firstLetter.toUpperCase() === firstLetter;
		})();
	};

	AppLogger.info(isFirstCapital("Slaven"));
	AppLogger.info(isFirstCapital("slaven"));
	AppLogger.info(isFirstCapital("slaven", "S"));
}]);
//# sourceMappingURL=default-parameters-babel.js.map