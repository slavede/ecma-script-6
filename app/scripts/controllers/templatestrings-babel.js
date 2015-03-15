"use strict";

angular.module("EcmaScript6").controller("templatestrings-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	var name = "Slaven",
	    surname = "Tomac";

	AppLogger.info("Hello there " + name + " " + surname + " !");

	var multilineString = "This is my multiline string " + name + "\n\t\t\t\t\t\t\tand what will you do about it?\n\n\t\t\t\t\t\t\tHa?!\n\t\t\t\t\t\t\t";

	AppLogger.info(multilineString);
}]);
//# sourceMappingURL=templatestrings-babel.js.map