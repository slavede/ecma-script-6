angular.module('EcmaScript6').controller('restParameters', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var sum = function(start, ...additional) {
		additional.forEach(function(val) {
			start += val;
		});
		return start;
	};

	AppLogger.info(sum(1,5,7,9,10), 'rest-parameters-1');
	AppLogger.info(sum(3), 'rest-parameters-2');
}]);