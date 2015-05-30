"use strict";

angular.module("EcmaScript6").controller("set-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	var object1 = {
		name: "Slaven"
	},
	    object2 = {
		surname: "Tomac"
	},
	    object3 = {
		surname: "Tomac"
	},
	    mySet = new Set([object1, "StringObject", 2, object2, object1]);

	AppLogger.info("--- size ---", "set-1");
	AppLogger.info(mySet.size, "set-2");

	AppLogger.info("--- has ---", "set-3");

	AppLogger.info(mySet.has(object1), "set-4");
	AppLogger.info(mySet.has("myKey1"), "set-5");
	AppLogger.info(mySet.has(object3), "set-6");
	AppLogger.info(mySet.has(2), "set-7");

	AppLogger.info("--- delete ---", "set-8");

	AppLogger.info(mySet.has(object1), "set-9");
	mySet["delete"](object1);
	AppLogger.info(mySet.has(object1), "set-10");

	AppLogger.info("--- entries ---", "set-11");

	var iterator = mySet.entries();
	AppLogger.info(iterator.next(), "set-12");
	AppLogger.info(iterator.next(), "set-13");
	AppLogger.info(iterator.next(), "set-14");

	AppLogger.info("--- forEach ---", "set-15");

	mySet.forEach(function (val) {
		AppLogger.info(val, "set-16");
	});

	AppLogger.info("--- add ---", "set-17");

	AppLogger.info(mySet.has(object3), "set-18");
	mySet.add(object3);
	AppLogger.info(mySet.has(object3), "set-19");

	AppLogger.info("--- keys ---", "set-20");

	var keysIterator = mySet.keys();
	AppLogger.info(keysIterator.next(), "set-21");
	AppLogger.info(keysIterator.next(), "set-22");
	AppLogger.info(keysIterator.next(), "set-23");

	AppLogger.info("--- values ---", "set-24");

	var valuesIterator = mySet.values();
	AppLogger.info(valuesIterator.next(), "set-25");
	AppLogger.info(valuesIterator.next(), "set-26");
	AppLogger.info(valuesIterator.next(), "set-27");

	AppLogger.info("--- for..of ---", "set-28");

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = mySet[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var val = _step.value;

			AppLogger.info("val", "set-29");
			AppLogger.info(val, "set-30");
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator["return"]) {
				_iterator["return"]();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}]);
//# sourceMappingURL=set-babel.js.map