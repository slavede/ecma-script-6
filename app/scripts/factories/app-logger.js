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
		},
		prefixMessageClass = function(message) {
			if (message !== undefined && message !== '') {
				message = 'message-class-' + message;
			}
			return message;
		};
		logger.log = function(message, messageClass) {
			messageClass = prefixMessageClass(messageClass);
			logger.logs.log.push({message:message, messageClass:messageClass});
			$log.log(message);
		};
		logger.info = function(message, messageClass) {
			messageClass = prefixMessageClass(messageClass);
			logger.logs.info.push({message:message, messageClass:messageClass});
			$log.info(message);
		};
		logger.infoSeparator = function(char) {
			var separateWith = char || '-';
			separateWith = Array(20).join(separateWith);
			logger.logs.info.push(separateWith);
			$log.info(separateWith);
		};
		logger.warn = function(message, messageClass) {
			messageClass = prefixMessageClass(messageClass);
			logger.logs.warn.push({message:message, messageClass:messageClass});
			$log.warn(message);
		};
		logger.error = function(message, messageClass) {
			messageClass = prefixMessageClass(messageClass);
			logger.logs.error.push({message:message, messageClass:messageClass});
			$log.error(message);
		};
		logger.debug = function(message, messageClass) {
			messageClass = prefixMessageClass(messageClass);
			logger.logs.debug.push({message:message, messageClass:messageClass});
			$log.debug(message);
		};
		logger.clear = function(key) {
			if (key) {
				logger.logs[key].length = 0;
			} else {
				logger.logs.log.length = 0;
				logger.logs.info.length = 0;
				logger.logs.warn.length = 0;
				logger.logs.error.length = 0;
				logger.logs.debug.length = 0;
			}
		};
		return logger;
	}]);