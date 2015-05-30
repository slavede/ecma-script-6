angular.module('EcmaScript6').controller('generators', ['$scope', 'AppLogger', '$location', '$anchorScroll', function($scope, AppLogger, $location, $anchorScroll) {
	'use strict';
	$scope.iterators = $location.hash() === 'iterators';
	$scope.forOfGenerators = $location.hash() === 'for-of-generators';
	
	var myArray = [9, 8, 7];
	for (let i in myArray) {
		AppLogger.info(i, 'generators-1');
	}

	for (let i of myArray) {
		AppLogger.info(i, 'generators-2');
	}

	var students = [
		{
			id : 1,
			privateData : {
				name : 'Slaven',
				lastName : 'Tomac'
			}
		},
		{
			id : 2,
			privateData : {
				name : 'Slavko',
				lastName : 'Tomak'
			}
		},
		{
			id : 3,
			privateData : {
				name : 'Sly',
				lastName : 'Tom'
			}
		}
	];

	function* studentsIterator(students) {
		for (var student of students) {
			if (student.id % 2 === 0) {
				yield [student.id, student.privateData.name];	
			}
		}
	}

	for (var [id, name] of studentsIterator(students)) {
		AppLogger.info(id + ' - ' + name, 'generators-3');
	}



	var iterator = studentsIterator(students);
	AppLogger.info(iterator.next(), 'generators-4');
	AppLogger.info(iterator.next(), 'generators-5');
	AppLogger.info(iterator.next(), 'generators-6');
	AppLogger.info(iterator.next(), 'generators-7');
}]);