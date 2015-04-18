angular.module('EcmaScript6').controller('defaultParameters', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var extractFirst = function(word) {
		return word.substring(0, 1);
	},
	isFirstCapital = function(word, firstLetter = extractFirst(word)) {
		return firstLetter.toUpperCase() === firstLetter;
	};

	AppLogger.info(isFirstCapital('Slaven'));
	AppLogger.info(isFirstCapital('slaven'));
	AppLogger.info(isFirstCapital('slaven', 'S'));

}]);