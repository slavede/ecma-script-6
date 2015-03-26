"use strict";

angular.module("EcmaScript6").controller("let-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	"use strict";
	var a = 10,
	    d = 11;
	if (a >= 10) {
		var c = 4;
		var b = 3;
		var _a = 11;
		var d = 15;

		AppLogger.info("inside if a: " + _a);
		AppLogger.info("inside if b: " + b);
		AppLogger.info("inside if c: " + c);
		AppLogger.info("inside if d: " + d);
	}

	AppLogger.info("outside if a: " + a);
	// AppLogger.info('outside if b: ' + b);
	AppLogger.info("outside if c: " + c);
	AppLogger.info("outside if d: " + d);
	AppLogger.info("outside if e: " + e);
	// AppLogger.info('outside if f: ' + f);
	var e = 16;
	var f = 111;
}]);
//# sourceMappingURL=let-babel.js.map