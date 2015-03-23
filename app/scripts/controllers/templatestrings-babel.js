"use strict";

var _taggedTemplateLiteral = function (strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); };

angular.module("EcmaScript6").controller("templatestrings-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	var name = "Slaven",
	    surname = "Tomac";

	AppLogger.info("Hello there " + name + " " + surname + " !");

	var multilineString = "This is my multiline string " + name + "\n\t\t\t\t\t\t\tand what will you do about it?\n\n\t\t\t\t\t\t\tHa?!\n\t\t\t\t\t\t\t";

	AppLogger.info(multilineString);

	var a = 1;
	AppLogger.info("I can also calculate in string now : " + (5 + a));

	function myTagger(strings, value1, value2) {
		return "raw: " + strings.raw.join("") + "\n strings: " + strings.join(",") + "\n values: " + value1 + " - " + value2;
	}

	AppLogger.info(myTagger(_taggedTemplateLiteral(["User ", " will use\n my tagger here for ", "st time"], ["User ", " will use\\n my tagger here for ", "st time"]), name, a));
}]);
//# sourceMappingURL=templatestrings-babel.js.map