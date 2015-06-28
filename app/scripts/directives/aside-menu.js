angular.module( 'EcmaScript6' ).directive( 'asideMenu', [

    function () {
        'use strict';
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/aside-menu.tpl',
            scope: {
                menuElements: '=',
                options: '=?',
                api: '=?'
            },
            compile: function () {
                return {
                    pre: function preLink( scope, element ) {
                        var defaults = {
                            onRouteChangeClose: true,
                            onStateChangeClose : true,
                            onClickClose: true
                        };
                        if ( !scope.options ) {
                            scope.options = {};
                        }

                        $.extend( true, defaults, scope.options );
                        scope.showAsideMenu = function () {
                            scope.asideMenuShown = true;
                            scope.$emit('asideMenuToggle', true);
                        };

                        scope.hideAsideMenu = function () {
                            scope.asideMenuShown = false;
                            scope.$emit('asideMenuToggle', false);
                        };

                        if ( scope.api ) {
                            scope.api.hideAsideMenu = scope.hideAsideMenu;
                            scope.api.showAsideMenu = scope.showAsideMenu;
                        }

                        // if (defaults.onRouteChangeClose) {

                        // }

                        if (defaults.onStateChangeClose) {
                        	scope.$on('$stateChangeStart', function() {
								scope.hideAsideMenu();
							});
                        }

                        if (defaults.onClickClose) {
                        	element.on('click', 'a.menu-link', function() {
                        		scope.hideAsideMenu();
                        	});
                        }
                    }
                };
            }
        };
} ] );