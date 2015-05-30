export function loggerInterceptor(logger, message, messageClass) {
	logger.info('loggerInterceptor --- ' + message, messageClass);
}

export var variablePi = '3.141593';