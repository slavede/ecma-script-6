"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

angular.module("EcmaScript6").controller("map-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	var object1 = {
		name: "Slaven"
	},
	    object2 = {
		surname: "Tomac"
	},
	    object3 = {
		surname: "Tomac"
	},
	    myMap = new Map([[object1, "ObjectWithNameOnly"], ["myKey1", object1], [object2, object1]]);

	AppLogger.info("--- get ---", "map-1");

	AppLogger.info(myMap.get(object1), "map-2");
	AppLogger.info(myMap.get("myKey1"), "map-3");
	AppLogger.info(myMap.get(object3), "map-4");
	AppLogger.info(myMap.get(myMap.get("myKey1")), "map-5");

	AppLogger.info("--- delete ---", "map-6");

	AppLogger.info(myMap.get(object1), "map-7");
	myMap["delete"](object1);
	AppLogger.info(myMap.get(object1), "map-8");

	AppLogger.info("--- entries ---", "map-9");

	var iterator = myMap.entries();
	AppLogger.info(iterator.next(), "map-10");
	AppLogger.info(iterator.next(), "map-11");
	AppLogger.info(iterator.next(), "map-12");

	AppLogger.info("--- forEach ---", "map-13");

	myMap.forEach(function (val) {
		AppLogger.info(val, "map-14");
	});

	AppLogger.info("--- set/has ---", "map-15");

	AppLogger.info(myMap.has(object3), "map-16");
	myMap.set(object3, "setObject");
	AppLogger.info(myMap.has(object3), "map-17");

	AppLogger.info("--- keys ---", "map-18");

	var keysIterator = myMap.keys();
	AppLogger.info(keysIterator.next(), "map-19");
	AppLogger.info(keysIterator.next(), "map-20");
	AppLogger.info(keysIterator.next(), "map-21");

	AppLogger.info("--- values ---", "map-22");

	var valuesIterator = myMap.values();
	AppLogger.info(valuesIterator.next(), "map-23");
	AppLogger.info(valuesIterator.next(), "map-24");
	AppLogger.info(valuesIterator.next(), "map-25");

	AppLogger.info("--- for..of ---", "map-26");

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = myMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2);

			var key = _step$value[0];
			var val = _step$value[1];

			AppLogger.info("key", "map-27");
			AppLogger.info(key, "map-28");
			AppLogger.info("val", "map-29");
			AppLogger.info(val, "map-30");
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
//# sourceMappingURL=map-babel.js.map