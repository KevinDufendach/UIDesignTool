(function() {
	var app = angular.module('library', [ 'library-items', 'ngDragDrop' ]);

	app.controller("LibraryController", [ '$http', '$scope',
			function($http, $scope) { // this is a controller
				//this.product = gem; // product is a property of controller
				
				$scope.categories = [];
				$scope.fields = [];
//				$scope.patients = [];

				$scope.pm = new PatientManager().initialize($http);
				
				// $http.post('/path/to/resource.json', {param: 'value'});
				// $http.delete('/path/to/resource.json');

				// $http({ method: 'OPTIONS', url: '/path/to/resource.json'}); // PATCH TRACE

				$http.get('items.json').success(function(data) {
					$scope.categories = data;
				});

				$http.get('fields.json').success(function(data) {
					$scope.fields = data;
				});

//				$http.get('scenarios/patients.json').success(function(data) {
//					library.patients = data;
//				});
//				

			} ]);

	app.directive('propertiesPanel', function() {
		return {
			restrict : 'E',
			templateUrl : 'properties-panel.html'
		};

	});

	app.directive('componentCanvas', function() {
		return {
			restrict : 'E',
			templateUrl : 'component-canvas.html'
		};

	});

	app.directive('elementList', function() {
		return {
			restrict : 'E',
			templateUrl : 'element-list.html'
		};

	});

	app.directive('lab', function() {
		return {
			restrict : 'E',
			template : function(elem, attr) {
				return '<span>{{pm.getLab("12345678", "' + attr.id + '")}}' + ' is of age: ' + attr.age
				+ '</span>'
			}
//			templateUrl : 'lab.html'
		};
	});
	
})();

// Define the skeleton PatientManager
function PatientManager() {
	this.patients = [];
	this.selectedPt = "";
	
	this.initialize = function ($http) {
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