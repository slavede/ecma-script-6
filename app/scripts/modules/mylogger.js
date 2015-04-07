export function loggerInterceptor(logger, message) {
	logger.info('loggerInterceptor --- ' + message);
};

export var variablePi = '3.141593';