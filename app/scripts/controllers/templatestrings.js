angular.module('EcmaScript6').controller('templatestrings', ['$scope', 'AppLogger', function($scope, AppLogger) {
	var name = "Slaven", surname = "Tomac";

	AppLogger.info(`Hello there ${name} ${surname} !`);


	var multilineString = `This is my multiline string ${name}
							and what will you do about it?

							Ha?!
							`;

	AppLogger.info(multilineString);

	var a = 1;
	AppLogger.info(`I can also calculate in string now : ${5 + a}`);

	function myTagger(strings, value1, value2) {
		return 'raw: ' + strings.raw.join('') + '\n strings: ' + strings.join(',') + '\n values: ' + value1 + ' - ' + value2 ;
	}

	AppLogger.info(myTagger`User ${name} will use\n my tagger here for ${a}st time`);

}]);