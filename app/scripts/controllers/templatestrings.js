angular.module('EcmaScript6').controller('templatestrings', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var name = "Slaven", surname = "Tomac";

	AppLogger.info(`Hello there ${name} ${surname} !`);


	var multilineString = `This is my multiline string ${name}
							and what will you do about it?

							Ha?!
							`;

	AppLogger.info(multilineString);

}]);