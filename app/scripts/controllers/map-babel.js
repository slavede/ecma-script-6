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

	AppLogger.info("--- get ---");

	AppLogger.info(myMap.get(object1));
	AppLogger.info(myMap.get("myKey1"));
	AppLogger.info(myMap.get(object3));
	AppLogger.info(myMap.get(myMap.get("myKey1")));

	AppLogger.info("--- delete ---");

	AppLogger.info(myMap.get(object1));
	myMap["delete"](object1);
	AppLogger.info(myMap.get(object1));

	AppLogger.info("--- entries ---");

	var iterator = myMap.entries();
	AppLogger.info(iterator.next());
	AppLogger.info(iterator.next());
	AppLogger.info(iterator.next());

	AppLogger.info("--- forEach ---");

	myMap.forEach(function (val) {
		AppLogger.info(val);
	});

	AppLogger.info("--- set/has ---");

	AppLogger.info(myMap.has(object3));
	myMap.set(object3, "setObject");
	AppLogger.info(myMap.has(object3));

	AppLogger.info("--- keys ---");

	var keysIterator = myMap.keys();
	AppLogger.info(keysIterator.next());
	AppLogger.info(keysIterator.next());
	AppLogger.info(keysIterator.next());

	AppLogger.info("--- values ---");

	var valuesIterator = myMap.values();
	AppLogger.info(valuesIterator.next());
	AppLogger.info(valuesIterator.next());
	AppLogger.info(valuesIterator.next());

	AppLogger.info("--- for..of ---");

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = myMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _slicedToArray(_step.value, 2);

			var key = _step$value[0];
			var val = _step$value[1];

			AppLogger.info("key");
			AppLogger.info(key);
			AppLogger.info("val");
			AppLogger.info(val);
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