"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

angular.module("EcmaScript6").controller("generators-babel", ["$scope", "AppLogger", "$location", "$anchorScroll", function ($scope, AppLogger, $location, $anchorScroll) {
	"use strict";
	var studentsIterator = regeneratorRuntime.mark(function studentsIterator(students) {
		var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, student;

		return regeneratorRuntime.wrap(function studentsIterator$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					_iteratorNormalCompletion2 = true;
					_didIteratorError2 = false;
					_iteratorError2 = undefined;
					context$2$0.prev = 3;
					_iterator2 = students[Symbol.iterator]();

				case 5:
					if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
						context$2$0.next = 13;
						break;
					}

					student = _step2.value;

					if (!(student.id % 2 === 0)) {
						context$2$0.next = 10;
						break;
					}

					context$2$0.next = 10;
					return [student.id, student.privateData.name];

				case 10:
					_iteratorNormalCompletion2 = true;
					context$2$0.next = 5;
					break;

				case 13:
					context$2$0.next = 19;
					break;

				case 15:
					context$2$0.prev = 15;
					context$2$0.t0 = context$2$0["catch"](3);
					_didIteratorError2 = true;
					_iteratorError2 = context$2$0.t0;

				case 19:
					context$2$0.prev = 19;
					context$2$0.prev = 20;

					if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
						_iterator2["return"]();
					}

				case 22:
					context$2$0.prev = 22;

					if (!_didIteratorError2) {
						context$2$0.next = 25;
						break;
					}

					throw _iteratorError2;

				case 25:
					return context$2$0.finish(22);

				case 26:
					return context$2$0.finish(19);

				case 27:
				case "end":
					return context$2$0.stop();
			}
		}, studentsIterator, this, [[3, 15, 19, 27], [20,, 22, 26]]);
	});
	$scope.iterators = $location.hash() === "iterators";
	$scope.forOfGenerators = $location.hash() === "for-of-generators";

	var myArray = [9, 8, 7];
	for (var i in myArray) {
		AppLogger.info(i, "generators-1");
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = myArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var i = _step.value;

			AppLogger.info(i, "generators-2");
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

	var students = [{
		id: 1,
		privateData: {
			name: "Slaven",
			lastName: "Tomac"
		}
	}, {
		id: 2,
		privateData: {
			name: "Slavko",
			lastName: "Tomak"
		}
	}, {
		id: 3,
		privateData: {
			name: "Sly",
			lastName: "Tom"
		}
	}];

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {

		for (var _iterator2 = studentsIterator(students)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _step2$value = _slicedToArray(_step2.value, 2);

			var id = _step2$value[0];
			var name = _step2$value[1];

			AppLogger.info(id + " - " + name, "generators-3");
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
				_iterator2["return"]();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var iterator = studentsIterator(students);
	AppLogger.info(iterator.next(), "generators-4");
	AppLogger.info(iterator.next(), "generators-5");
	AppLogger.info(iterator.next(), "generators-6");
	AppLogger.info(iterator.next(), "generators-7");
}]);
//# sourceMappingURL=generators-babel.js.map