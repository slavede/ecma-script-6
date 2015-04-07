import {variablePi,loggerInterceptor} from 'mylogger';
console.log(variablePi);
console.log(loggerInterceptor(console, 'importer call'));
export function exporter() {
	return {
		pi : variablePi,
		loggerInterceptor : loggerInterceptor
	}
}