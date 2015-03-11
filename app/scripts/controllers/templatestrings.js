angular.module('EcmaScript6').controller('templatestrings', ['$scope', function($scope) {
	var name = "Slaven", surname = "Tomac";

	console.log(`Hello there ${name} ${surname} !`);

}]);