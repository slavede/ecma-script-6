angular.module('EcmaScript6').directive('messageClassMarker', ['$rootScope', '$state', function($rootScope, $state) {
	return {
		restrict : 'A',
		compile : function() {
			return {
				pre : function preLink(scope, element) {
					element.on('mouseenter', '[class*="message-class-"]', function(e) {
						$('[class*="message-class-"]').removeClass('focused-message-class');
						var extractWordStartsWith = function(string, startsWith) {
							// strip everything first until end of the word, then strip everything after next space (if there is one)
							return string.replace(new RegExp('.*(' + startsWith + '.*).*'), '$1').replace(/(.*)\s.*/, '$1');
						};

						var classToMark = extractWordStartsWith(e.target.className, 'message-class');
						console.log('Need to mark', classToMark);

						$('.' + classToMark).addClass('focused-message-class');
					});
				}
			};
		}
	};
}]);