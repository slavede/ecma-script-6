require(['importer'], function(importer) {
	angular.module('EcmaScript6').controller('modules', ['$scope', 'AppLogger', function($scope, AppLogger) {
		AppLogger.info(importer.exporter().pi);
		AppLogger.info(importer.exporter().loggerInterceptor(AppLogger, 'Angular Controller'));
	}]);
});
