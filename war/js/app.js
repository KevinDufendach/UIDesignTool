(function(){
	var app = angular.module('library', [ 'library-items' ]);

	app.controller("LibraryController", ['$http', function($http){ // this is a controller
		//this.product = gem; // product is a property of controller
		
		var library = this;
		library.categories = [ ];
		
		// $http.post('/path/to/resource.json', {param: 'value'});
		// $http.delete('/path/to/resource.json');
		
		// $http({ method: 'OPTIONS', url: '/path/to/resource.json'}); // PATCH TRACE
		
		$http.get('items.json').success(function(data) {
			library.categories = data;
		}); // product is a property of controller
		
	} ]);
	
	
	
	//var gems = ;
	
})();

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