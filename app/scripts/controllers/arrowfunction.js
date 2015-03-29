angular.module('EcmaScript6').controller('arrowfunction', ['$scope', 'AppLogger', '$timeout', function($scope, AppLogger, $timeout) {
	var lion;
	function Lion(name) {
		this.name = name;
		this.heightThroughYears = [0.5,0.7,1.2];
		this.roarAfter = function (miliseconds) {
			$timeout(function() {
				AppLogger.info("Roar " + this.name);
			}, miliseconds);
		};
		this.roarArrow = function(miliseconds) {
			// no parameters => parenthesis required
			$timeout(() => {
				AppLogger.info("Arrow roar " + this.name);
			}, miliseconds)
		};
		this.showHeights = function() {
			// one parameter => not parenthesis
			$(this.heightThroughYears).map(index => {
				AppLogger.info(this.heightThroughYears[index]);
			});
			$(this.heightThroughYears).map(function(index) {
				AppLogger.info(this);
			});
		}
	}
	lion = new Lion("Slavko");
	lion.roarAfter(1500);
	lion.roarArrow(2500);
	lion.showHeights();
}]);