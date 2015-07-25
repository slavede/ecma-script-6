angular.module('EcmaScript6').directive('messageClassMarker', ['$rootScope', '$state', function($rootScope, $state) {
	return {
		restrict : 'A',
		compile : function() {
			return {
				pre : function preLink(scope, element) {
					element.on('mouseenter', '[class*="message-class-"]', function(e) {
						var isInLog = $(e.target).parents('.log-output').length > 0 ? true : false,
							extractWordStartsWith = function(string, startsWith) {
								// strip everything first until end of the word, then strip everything after next space (if there is one)
								return string.replace(new RegExp('.*(' + startsWith + '.*).*'), '$1').replace(/(.*)\s.*/, '$1');
							},
							classToMark = extractWordStartsWith(e.target.className, 'message-class'),
							logEntryTopOffset,
							codeExampleTopOffset,
							positionLogOutput = function($target) {
								$rootScope.$apply(function() {
									$rootScope.appLoggerTittleHolderStyle['margin-bottom'] = '0px';
								});
								console.log('not in log');
								logEntryTopOffset = $('.log-output .focused-message-class').offset().top;
								codeExampleTopOffset = $target.offset().top;
								$rootScope.$apply(function() {
									$rootScope.appLoggerTittleHolderStyle['margin-bottom'] = (codeExampleTopOffset - logEntryTopOffset) + 'px';
								});
							};

						$('[class*="message-class-"]').removeClass('focused-message-class');
						$('.' + classToMark).addClass('focused-message-class');

						if (isInLog) {
							// don't do aynthing, because if we move log it will make hover another element and it will just jump around
							// not UX friendly
						} else {
							// if target is not in log, adjust log to be shown inline with code example
							if ($('.log-output .focused-message-class').length > 0) {
								positionLogOutput($(e.target));
							}
						}
					});
				}
			};
		}
	};
}]);