define('mylogger', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
            value: true
    });
    exports.loggerInterceptor = loggerInterceptor;

    function loggerInterceptor(logger, message, messageClass) {
            logger.info('loggerInterceptor --- ' + message, messageClass);
    }

    var variablePi = '3.141593';
    exports.variablePi = variablePi;
});