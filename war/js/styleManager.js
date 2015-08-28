(function() {
	var app = angular.module('library', [ 'library-items', 'ngDragDrop' ]);
	
	// Provides a module to control styles and necessary changes
	app.controller("StyleController", [ '$scope', function($scope) {
		$scope.styles = [];
		
		
	} ]) ;
})
