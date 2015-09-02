(function() {
	var app = angular.module('library', [ 'library-items', 'library-canvas',
			'library-properties', 'ngDragDrop' ]);

	app.filter('weeksAndDays', function() {
		return function(number) {
			if (isNaN(number) || number < 0) {
				return number;
			}

			var wholeWeeks = Math.floor(number / 7);
			var wholeDays = number % 7;

			return wholeWeeks + " " + wholeDays + "/7";
		}
	});

	app.filter('ageFilter', function() {
		return function(number) {
			if (isNaN(number) || number < 0) {
				return number;
			} else if (number < 4 * 7) {
				return number + "d";
			} else {
				var wholeWeeks = Math.floor(number / 7);
				var wholeDays = number % 7;

				return wholeWeeks + " " + wholeDays + "/7w";
			}
		}
	});

	app.controller("LibraryController", [ '$http', '$scope',
			function($http, $scope) { // this is a controller
				//this.product = gem; // product is a property of controller

				$scope.categories = [];
				$scope.fields = [];
				$scope.patients = [];

				$scope.calcSum = function(mainArray, arrayParameter) {
					var total = 0;
					for (subItem in mainArray) {
						total += subItem[arrayParameter];
					}

					return total;
				};

				$scope.calcDOL = function(date) {
					var magicNumber = 86400000;

					if (isNaN(date)) {
						date = new Date(date);
					}

					currentDate = new Date();

					return Math.floor((currentDate - date) / magicNumber);

				};

				// $scope.labNew = $scope.fields.ital_new_labs.value ? {'font-style':'italic'} : {};
				//				if ($scope.fields.ital_new_labs.value) {
				//					$scope.labNew = {'font-style':'italic'};
				//				} else {
				//					$scope.labNew = {};
				//				}
				//				$scope.labNew = fields.ital_new_labs.value ? {'font-style':'italic'} : {};

				//				$scope.pm = new PatientManager().initialize($http);

				// $http.post('/path/to/resource.json', {param: 'value'});
				// $http.delete('/path/to/resource.json');

				// $http({ method: 'OPTIONS', url: '/path/to/resource.json'}); // PATCH TRACE

				$http.get('items.json').success(function(data) {
					$scope.categories = data;
				});

				$http.get('fields.json').success(function(data) {
					$scope.fields = data;

				});

				$http.get('scenarios/patients.json').success(function(data) {
					$scope.patients = data;
				});

				$scope.getItemsByCategory = function(categoryName) {
					for (cat in categories) {
						if (cat.category === categoryName) {
							return cat;
						}
					}

					return null;
				};

			} ]);

	//	app.directive('propertiesPanel', function() {
	//		return {
	//			restrict : 'E',
	//			templateUrl : 'properties-panel.html'
	//		};
	//
	//	});

	app.directive('elementList', function() {
		return {
			restrict : 'E',
			templateUrl : 'element-list.html'
		};

	});
	
	//////////////// ngDragDrop Demo
	app.controller('oneCtrl', function($scope) {
		  $scope.list1 = [
		    { 'title': 'L', 'drag': true },
		    { 'title': 'O', 'drag': true },
		    { 'title': 'M', 'drag': true },
		    { 'title': 'L', 'drag': true },
		    { 'title': 'G', 'drag': true },
		    { 'title': 'U', 'drag': true }
		  ];

		  this.dropCallback = function(event, ui, title, $index) {
		    if ($scope.list1.map(function(item) { return item.title; }).join('') === 'GOLLUM') {
		      $scope.list1.forEach(function(value, key) { $scope.list1[key].drag = false; });
		    }
		  };
		});
	

})();

// Define the skeleton PatientManager
function PatientManager() {
	this.patients = [];
	this.selectedPt = "";

	this.initialize = function($http) {
		$http.get('scenarios/patients.json').success(function(data) {
			this.patients = data;

		});

		return this;
	};

	this.getLab = function(patientId, labId) {
		return patients[patientId].labs[labId]; // TODO: add default value resolution 
	};

	this.getPatients = function() {
		return patients;
	};
};

//
//(function() {
//var patientManager = {
//		
//		patients : [],
//		
//		
//		
//		
////		
////		// initialize the lab list
////		initialize: function($http) {
////			$http.get('scenarios/patients.json').then(function(data) {
////				this.patients = data;
////			});
////			
////			return "initializing";
////		};
////
////		// request the value of a lab
////		getLab : function(patientId, labId) {
////			return patients[patientId].labs[labId] || "lab not found";
//		};
//})();

// (function(){
// var app = angular.module('store', [ 'store-products' ]);

// app.controller("StoreController", ['$http', function($http){ // this is a controller
// // this.product = gem; // product is a property of controller

// var store = this;
// store.products = [ ];

// // $http.post('/path/to/resource.json', {param: 'value'});
// // $http.delete('/path/to/resource.json');

// // $http({ method: 'OPTIONS', url: '/path/to/resource.json'}); // PATCH TRACE

// $http.get('products.json').success(function(data) {
// store.products = data;
// }); // product is a property of controller

// } ]);

// // var gems = ;

// })();