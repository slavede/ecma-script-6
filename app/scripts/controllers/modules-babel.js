"use strict";

require(["importer"], function (importer) {
	angular.module("EcmaScript6").controller("modules-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
		AppLogger.info(importer.exporter().pi);
		AppLogger.info(importer.exporter().loggerInterceptor(AppLogger, "Angular Controller"));
	}]);
});
//# sourceMappingURL=modules-babel.js.map