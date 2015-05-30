define('importer', ['exports', 'mylogger', 'sum'], function (exports, _mylogger, _sum) {
        'use strict';

        var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

        Object.defineProperty(exports, '__esModule', {
                value: true
        });
        exports.exporter = exporter;

        var _sumCalculation = _interopRequire(_sum);

        console.log(_mylogger.variablePi);
        _mylogger.loggerInterceptor(console, 'Angular Controller');
        console.log(_sumCalculation(1, 2, 3));

        function exporter() {
                return {
                        pi: _mylogger.variablePi,
                        loggerInterceptor: _mylogger.loggerInterceptor,
                        sumCalculation: _sumCalculation
                };
        }
});