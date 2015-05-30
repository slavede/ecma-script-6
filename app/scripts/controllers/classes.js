angular.module('EcmaScript6').controller('classes', ['$scope', 'AppLogger', function($scope, AppLogger) {
		class Vehicle {
			constructor(color, numberOfWheels) {
				this.vehicleColor = color;
				this.numberOfWheels = numberOfWheels;
			}

			static minimumWheels() {
				return 2;
			}

			get wheels () {
				return this.numberOfWheels;
			}

			makeASound () {
				return "I'm unknown vehicle. Don't know how."
			}

			// accessor properties
			get color() {
				return this.vehicleColor;
			}

			set color(color) {
				this.vehicleColor = color;
				return this.vehicleColor;
			}

			"string keyed method"() {
				return "String Keyed Method"
			}
		}

		class Bicycle extends Vehicle{
			constructor(color) {
				super(color, 2);
			}
			makeASound() {
				return "Ring Ring, but parent says: " + super.makeASound();
			}
		}

		AppLogger.info(Vehicle.prototype.makeASound !== undefined, 'classes-1');
		AppLogger.info(Vehicle.prototype["string keyed method"] !== undefined, 'classes-2');
		AppLogger.info(Vehicle.prototype.minimumWheels === undefined, 'classes-3');

		AppLogger.info(Vehicle.minimumWheels !== undefined, 'classes-4');

		var vehicle = new Vehicle('red');

		AppLogger.info(vehicle.color, 'classes-5');
		AppLogger.info(vehicle.vehicleColor, 'classes-6');
		vehicle.color = 'blue';
		AppLogger.info(vehicle.color, 'classes-7');
		AppLogger.info(vehicle.vehicleColor, 'classes-8');
		AppLogger.info(vehicle.makeASound(), 'classes-9');

		AppLogger.info(vehicle["string keyed method"](), 'classes-10');

		var bicycle = new Bicycle('black');
		AppLogger.info(bicycle.wheels, 'classes-11');
		AppLogger.info(bicycle.color, 'classes-12');

		bicycle.color = 'pink';
		AppLogger.info(bicycle.color, 'classes-13');
		AppLogger.info(bicycle.makeASound(), 'classes-14');
	}]);