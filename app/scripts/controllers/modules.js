require(['importer'], function(importer) {
	angular.module('EcmaScript6').controller('modules', ['$scope', 'AppLogger', function($scope, AppLogger) {
		AppLogger.info(importer.exporter().pi);
		importer.exporter().loggerInterceptor(AppLogger, 'Angular Controller');
		AppLogger.info(importer.exporter().sumCalculation(1, 2, 3));
	}]);
});
