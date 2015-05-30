angular.module('EcmaScript6').controller('defaultParameters', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var extractFirst = function(word) {
		return word.substring(0, 1);
	},
	isFirstCapital = function(word, firstLetter = extractFirst(word)) {
		return firstLetter.toUpperCase() === firstLetter;
	};

	AppLogger.info(isFirstCapital('Slaven'), 'default-parameters-1');
	AppLogger.info(isFirstCapital('slaven'), 'default-parameters-2');
	AppLogger.info(isFirstCapital('slaven', 'S'), 'default-parameters-3');

}]);