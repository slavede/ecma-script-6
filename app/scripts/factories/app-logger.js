angular.module("EcmaScript6").
	factory('AppLogger', ['$log', function($log) {
		var logger = {
			logs : {
				log : [],
				info : [],
				warn : [],
				error : [],
				debug : []
			}
		};
		logger.log = function(message) {
			logger.logs.log.push(message);
			$log.log(message);
		};
		logger.info = function(message) {
			logger.logs.info.push(message);
			$log.info(message);
		};
		logger.warn = function(message) {
			logger.logs.warn.push(message);
			$log.warn(message);
		};
		logger.error = function(message) {
			logger.logs.error.push(message);
			$log.error(message);
		};
		logger.debug = function(message) {
			logger.logs.debug.push(message);
			$log.debug(message);
		};
		return logger;
	}]);