/**
 * 
 */

(function(){
	var app = angular.module('library-items', [ ]);
	
	app.controller('ItemController', function() {
		this.activeItem = [] ;
		
		this.setActiveItem = function(setItem) {
			this.activeItem = setItem;
		}
	});
	
	app.directive('myComponent', function() {
		return {
			restrict: 'E',
			templateUrl: function(elem, attr){
				return 'component-'+attr.type;
			}
		
//			controller:function() {
//				this.item = [];
//				
//				this.setItem = function(setItem) {
//					this.item = setItem;
//				};
//			},
//			controllerAs: 'myComp'
		};
	});
	
})();