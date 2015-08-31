(function(){
	var app = angular.module('library-properties', [ "checklist-model" ]);
	
	app.directive('propertiesPanel', function() {
		return {
			restrict : 'E',
			templateUrl : 'properties-panel.html',
			scope: true,
			controller: function() {
				
				this.getWidgetType = function( fieldType ) {
					switch (fieldType) {
					case "radio":
						return "fields/radio.html";
					case "checkbox":
						return "fields/checkbox.html";
					case "text":
					default:
						return "fields/text.html";
					};
				};
			},
			controllerAs: "propertiesCtrl"
				
		};

	});
	
})();

//app.directive('propertiesPanel', function() {
//	return {
//		restrict : 'E',
//		templateUrl : 'properties-panel.html'
//	};
//
//});