var App = angular.module('drag-and-drop', ['ngDragDrop']);

Array.prototype.move = function (from, to) {
	  this.splice(to, 0, this.splice(from, 1)[0]);
	};

App.controller('oneCtrl', function($scope) {
  $scope.list1 = [
    { 'title': 'T', 'drag': true , 'loc': 0},
    { 'title': 'A', 'drag': true , 'loc': 1},
    { 'title': 'A', 'drag': true , 'loc': 2},
    { 'title': 'G', 'drag': true , 'loc': 3},
    { 'title': 'T', 'drag': true , 'loc': 4},
    { 'title': 'A', 'drag': true , 'loc': 5},
    { 'title': 'C', 'drag': true , 'loc': 6}
  ];

  $scope.dragging = true;
  
  $scope.startPosition = -1;
  
  $scope.message = "";
  
  $scope.toggle = function() {
	  $scope.$apply();
	  $scope.dragging = !$scope.dragging;
  };
  
  $scope.onOver = function(event) {
	  angular.element(event.target).addClass("hover");
  };
  $scope.onOut = function(event) {
	  angular.element(event.target).removeClass("hover");
  };

  this.dropCallback = function(event, ui, title, $index) {
	angular.element(event.target).removeClass("hover");
	
	var orig = $scope.list1[$index].loc;
	var newPos = $index;
	
//	$scope.list1.move(0, 1);
	
	$scope.message = "moved " + title + " from slot " + $index + " to slot " + $scope.list1[$index].loc;
	$scope.list1[$scope.list1[$index].loc].loc = $scope.list1[$index].loc;
	$scope.list1[$index].loc = $index;
	
	  
    if ($scope.list1.map(function(item) { return item.title; }).join('') === 'GATTACA') {
      $scope.list1.forEach(function(value, key) { $scope.list1[key].drag = false; });
    }
  };
});