angular.module('EcmaScript6').directive('menuActiveMarker', ['$rootScope', '$state', function($rootScope, $state) {
	return {
		restrict : 'A',
		compile : function() {
			return {
				pre : function preLink(scope, element) {
					element.find('[ui-sref="' + $state.current.name + '"]').addClass('active-ui-sref');
					element.find('[ui-sref!="' + $state.current.name + '"]').removeClass('active-ui-sref');
					$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
						element.find('[ui-sref="' + fromState.name + '"]').removeClass('active-ui-sref');
						element.find('[ui-sref="' + toState.name + '"]').addClass('active-ui-sref');
					});
				}
			};
		}
	};
}]);