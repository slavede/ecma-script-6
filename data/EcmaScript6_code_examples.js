var name = "Slaven", surname = "Tomac";

var multilineString = `This is my multiline string ${name}
						and what will you do about it?

					Ha?!
						`;





function myTagger(strings, value1, value2) {
		return 'raw: ' + strings.raw.join(',') + '\n strings: ' + 
		strings.join(',') + '\n values: ' + value1 + ' - ' + value2 ;
}
var a = -1;
var name = ‘Slaven’;
var b = myTagger`User ${name} will use\n my tagger here for ${a}st time`;


function demo() {
	var a = 10, d = 11;
	if (a >= 10) {
		var c = 4;
		let b = 3;
		let a = 11;
		var d = 15;

		console.log('inside if a: ' + a);
		console.log('inside if b: ' + b);
		console.log('inside if c: ' + c);
		console.log('inside if d: ' + d);
		
	}

	console.log('outside if a: ' + a);
	// console.log('outside if b: ' + b);
	console.log('outside if c: ' + c);
	console.log('outside if d: ' + d);
	console.log('outside if e: ' + e);
	// console.log('outside if f: ' + f);
	var e = 16;
	let f = 111;
}


var lion;
function Lion(name) {
	this.name = name;
	this.roarAfter = function (miliseconds) {
		setTimeout (function() {
			console.log("Roar " + this.name);
		}, miliseconds);
	};
	this.roarArrow = function(miliseconds) {
		// no parameters => parenthesis required
		setTimeout (() => {
			console.log("Arrow roar " + this.name);
		}, miliseconds)
	};
}
lion = new Lion("Slavko");
lion.roarAfter(1500);
lion.roarArrow(2500);



class Vehicle {
	constructor(color, numberOfWheels) {
		this.vehicleColor = color;
		this.numberOfWheels = numberOfWheels;
	}

	static minimumWheels() {
		return 2;
	}

	makeASound () {
		return "Don't know how."
	}

         . . . 
}


console.log( Vehicle.prototype.makeASound !== undefined );
console.log( Vehicle.prototype.minimumWheels === undefined );
console.log( Vehicle.minimumWheels !== undefined );

var vehicle = new Vehicle('red');



class Vehicle {	
         . . . 
 
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


console.log( Vehicle.prototype["string keyed method"] !== undefined ); 

console.log( vehicle.color );
console.log( vehicle.vehicleColor );
vehicle.color = 'blue';
console.log( vehicle.color );
console.log( vehicle.vehicleColor );

console.log( vehicle["string keyed method"]() );




class Bicycle extends Vehicle {
	constructor(color) {
		super(color, 2);
	}
	makeASound() {
		return "Ring Ring, but parent says: " + 
			super.makeASound();
	}
}


var bicycle = new Bicycle('black');

console.log( bicycle.color );
bicycle.color = 'pink';
console.log( bicycle.color );
console.log( bicycle.makeASound() );



// mylogger.js
export function loggerInterceptor(logger, message) {
	logger.info('loggerInterceptor --- ' + message);
};

export var variablePi = '3.141593';

// sum.js
export default function (a, b, c) { 
	return a + b + c;
};


import {variablePi,loggerInterceptor} from 'mylogger';
import sumCalculation from 'sum';

console.log(variablePi);
loggerInterceptor(console, 'importer call')
console.log(sumCalculation(1,2,3));

// sum.js
export default function (a, b, c) { 
	return a + b + c;
};

define("sumModule", ["exports", "module"], function (exports, module) {
        "use strict";
        module.exports = function (a, b, c) {
                return a + b + c;
        };
});



var extractFirst = function(word) {
	return word.substring(0, 1);
},
isFirstCapital = function(word, firstLetter = extractFirst(word)) {
	return firstLetter.toUpperCase() === firstLetter;
};

console.log(isFirstCapital('Slaven'));
console.log(isFirstCapital('slaven'));
console.log(isFirstCapital('slaven', 'S'));



var myArray = [9, 8, 7];
for (let i in myArray) {
	console.log(i);
}

for (let i of myArray) {
	console.log(i);
}

var students = [
	{
		id : '1',
		privateData : {
			name : 'Slaven',
			lastName : 'Tomac'
		}
	},
	{
		id : '2',
		privateData : {
			name : 'Slavko',
			lastName : 'Tomak'
		}
	}
];

function* studentsIterator(students) {
	for (var student of students) {
		if (student.id % 2 === 0) {
			yield [student.id, student.privateData.name]	
		}
	}
}

for (var [id, name] of studentsIterator(students)) {
	console.log(id + ' - ' + name);
}

var iterator = studentsIterator(students);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


var promise1 = new Promise(function(resolve, reject) {
	var counter = 0, iterations = 5;
	// something async here
	setInterval(function() {
		if (counter === iterations) {
			resolve({
				name : 'promise1',
				value : Date.now()
			});
		}
		counter++;
	}, 500);

promise1.then(function(values) {
	console.log(values);
}, function(values) {
	console.log('I failed with values ' + values.value);
});

Promise.all([promise2, promise1, promise3])
		.then(function(values) {
			console.log('Finished everything!!!');
			console.log(values);
		}, function(values) {
			console.log('SOmething failed');
			console.log(values)
		});
		
Promise.race([promise2, promise1, promise3])
			.then(function(values) {
				console.log('Race finished');
				console.log(values);
			}, function(values) {
				console.log('Race failed');
				console.log(values);
			});

var object1 = {
	name : 'Slaven'
},
object2 = {
	surname : 'Tomac'
},
object3 = {
	surname : 'Tomac'
},
myMap = new Map([
					[object1,'ObjectWithNameOnly'],
					['myKey1',object1],
					[object2,object1]
				]);

console.log(myMap.get(object1));
console.log(myMap.get('myKey1'));
console.log(myMap.get(object3));

console.log(myMap.get(myMap.get('myKey1')));

for (var [key, val] of myMap) {
	. . .
}


var object1 = {
	name : 'Slaven'
},
object2 = {
	surname : 'Tomac'
},
object3 = {
	surname : 'Tomac'
},
mySet = new Set([object1, 'StringObject', 2, object2, object1]);

console.log(myMap.size);
console.log(myMap.has(object1));
