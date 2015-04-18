import {variablePi,loggerInterceptor} from 'mylogger';
import sumCalculation from 'sum';
console.log(variablePi);
loggerInterceptor(console, 'importer call')
console.log(sumCalculation(1,2,3));
export function exporter() {
	return {
		pi : variablePi,
		loggerInterceptor : loggerInterceptor,
		sumCalculation : sumCalculation
	}
}