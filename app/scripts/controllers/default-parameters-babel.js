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

	AppLogger.info(isFirstCapital("Slaven"), "default-parameters-1");
	AppLogger.info(isFirstCapital("slaven"), "default-parameters-2");
	AppLogger.info(isFirstCapital("slaven", "S"), "default-parameters-3");
}]);
//# sourceMappingURL=default-parameters-babel.js.map