define('importer', ['exports', 'mylogger'], function (exports, _mylogger) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.exporter = exporter;

	console.log(_mylogger.variablePi);
	console.log(_mylogger.loggerInterceptor(console, 'importer call'));

	function exporter() {
		return {
			pi: _mylogger.variablePi,
			loggerInterceptor: _mylogger.loggerInterceptor
		};
	}
});
