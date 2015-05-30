require(['importer'], function(importer) {
	angular.module('EcmaScript6').controller('modules', ['$scope', 'AppLogger', function($scope, AppLogger) {
		AppLogger.info(importer.exporter().pi, 'modules-1');
		importer.exporter().loggerInterceptor(AppLogger, 'Angular Controller', 'modules-2');
		AppLogger.info(importer.exporter().sumCalculation(1, 2, 3), 'modules-3');
	}]);
});
