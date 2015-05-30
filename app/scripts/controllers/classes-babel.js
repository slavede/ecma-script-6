"use strict";

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

angular.module("EcmaScript6").controller("classes-babel", ["$scope", "AppLogger", function ($scope, AppLogger) {
	var Vehicle = (function () {
		function Vehicle(color, numberOfWheels) {
			_classCallCheck(this, Vehicle);

			this.vehicleColor = color;
			this.numberOfWheels = numberOfWheels;
		}

		_createClass(Vehicle, {
			wheels: {
				get: function () {
					return this.numberOfWheels;
				}
			},
			makeASound: {
				value: function makeASound() {
					return "I'm unknown vehicle. Don't know how.";
				}
			},
			color: {

				// accessor properties

				get: function () {
					return this.vehicleColor;
				},
				set: function (color) {
					this.vehicleColor = color;
					return this.vehicleColor;
				}
			},
			"string keyed method": {
				value: function stringKeyedMethod() {
					return "String Keyed Method";
				}
			}
		}, {
			minimumWheels: {
				value: function minimumWheels() {
					return 2;
				}
			}
		});

		return Vehicle;
	})();

	var Bicycle = (function (_Vehicle) {
		function Bicycle(color) {
			_classCallCheck(this, Bicycle);

			_get(Object.getPrototypeOf(Bicycle.prototype), "constructor", this).call(this, color, 2);
		}

		_inherits(Bicycle, _Vehicle);

		_createClass(Bicycle, {
			makeASound: {
				value: function makeASound() {
					return "Ring Ring, but parent says: " + _get(Object.getPrototypeOf(Bicycle.prototype), "makeASound", this).call(this);
				}
			}
		});

		return Bicycle;
	})(Vehicle);

	AppLogger.info(Vehicle.prototype.makeASound !== undefined, "classes-1");
	AppLogger.info(Vehicle.prototype["string keyed method"] !== undefined, "classes-2");
	AppLogger.info(Vehicle.prototype.minimumWheels === undefined, "classes-3");

	AppLogger.info(Vehicle.minimumWheels !== undefined, "classes-4");

	var vehicle = new Vehicle("red");

	AppLogger.info(vehicle.color, "classes-5");
	AppLogger.info(vehicle.vehicleColor, "classes-6");
	vehicle.color = "blue";
	AppLogger.info(vehicle.color, "classes-7");
	AppLogger.info(vehicle.vehicleColor, "classes-8");
	AppLogger.info(vehicle.makeASound(), "classes-9");

	AppLogger.info(vehicle["string keyed method"](), "classes-10");

	var bicycle = new Bicycle("black");
	AppLogger.info(bicycle.wheels, "classes-11");
	AppLogger.info(bicycle.color, "classes-12");

	bicycle.color = "pink";
	AppLogger.info(bicycle.color, "classes-13");
	AppLogger.info(bicycle.makeASound(), "classes-14");
}]);
//# sourceMappingURL=classes-babel.js.map