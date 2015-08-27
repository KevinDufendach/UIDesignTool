(function() {
	var app = angular.module('patientModule', [ ]);

	app.controller("PatientController", [ '$scope',
			function($scope) { // this is a controller
				//this.product = gem; // product is a property of controller

				var library = this;
				library.categories = [];
//				library.patients = [];
				library.fields = [];

				library.myitem = "none";

				this.pm = new PatientManager().initialize($http);
				
				// $http.post('/path/to/resource.json', {param: 'value'});
				// $http.delete('/path/to/resource.json');

				// $http({ method: 'OPTIONS', url: '/path/to/resource.json'}); // PATCH TRACE

				$http.get('items.json').success(function(data) {
					library.categories = data;
				});

				$http.get('fields.json').success(function(data) {
					library.fields = data;
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
				return '<span>{{library.pm.getLab("12345678", "' + attr.id + '")}}' + ' is of age: ' + attr.age
				+ '</span>'
			}
//			templateUrl : 'lab.html'
		};
	});
	
})();
