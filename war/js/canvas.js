(function(){
	var app = angular.module('library-canvas', [ ]);
	
//	app.controller("CanvasController", ["$scope", function($scope) {
//		this.hasLabValue = function( labList ) {
//			for (lab in labList) {
//				if ($scope.patient.labs[lab].value !== undefined) {
//					return true;
//				}
//			}
//			
//			return false;
//		}
//	}]);
	
	app.directive('componentCanvas', function() {
		return {
			restrict : 'E',
			templateUrl : 'component-canvas.html',
			scope: true,
			controller: function() {
				
				this.hasLabValue = function(patient, labList ) {
					for (i = 0; i < labList.length; i++) {
						if (hasOwnProperty(patient.labs, labList[i])) {
							return true;
						}
					}
					
					return false;
				};
				
			},
			controllerAs: "canvasCtrl"
				
		};

	});
	
	app.directive('lab', function() {
		return {
			restrict : 'E',
			template : function(elem, attr) {
				return '<span ng-style="patient.labs.' + attr.id +'.age < fields.new_labs.value ? labNew : labOld">{{patient.labs.' + attr.id + '.value}}</span>'
			}
//			templateUrl : 'lab.html'
		};
	});
})();

function hasOwnProperty(obj, prop) {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
        (!(prop in proto) || proto[prop] !== obj[prop]);
}