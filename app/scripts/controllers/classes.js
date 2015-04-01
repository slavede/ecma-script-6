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

		AppLogger.info(Vehicle.prototype.makeASound !== undefined);
		AppLogger.info(Vehicle.prototype["string keyed method"] !== undefined);
		AppLogger.info(Vehicle.prototype.minimumWheels === undefined);

		AppLogger.info(Vehicle.minimumWheels !== undefined);

		var vehicle = new Vehicle('red');

		AppLogger.info(vehicle.color);
		AppLogger.info(vehicle.vehicleColor);
		vehicle.color = 'blue';
		AppLogger.info(vehicle.color);
		AppLogger.info(vehicle.vehicleColor);
		AppLogger.info(vehicle.makeASound());

		AppLogger.info(vehicle["string keyed method"]());

		var bicycle = new Bicycle('black');
		AppLogger.info(bicycle.wheels);
		AppLogger.info(bicycle.color);

		bicycle.color = 'pink';
		AppLogger.info(bicycle.color);
		AppLogger.info(bicycle.makeASound());
	}]);