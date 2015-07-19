var app = angular.module("app",[])

.controller("ToDoController",function($scope){

	$scope.todo = [];
	$scope.percent = 0;

//Añadir watcher para que siempre que se realice una acción se deseleccione
	$scope.$watchCollection('todo', function(newValue, oldValue){
		console.log(oldValue);
		console.log(newValue);
		for (var i  = 0;  i < $scope.todo.length; i++){
			if($scope.todo[i].selected){
				$scope.todo[i].selected = false;
			}
		}
	});

	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		calculatePercent();
	}


	$scope.delete = function(){
		$scope.todo = [];
		calculatePercent();
	}


	$scope.deleteSelected = function(){
		for (var i  = 0;  i < $scope.todo.length; i++){
			if($scope.todo[i].selected){
				$scope.todo.splice(i, 1);
				i--;
			}
		}
		calculatePercent();
	}

	$scope.doneSelected = function(){
		for (var i  = 0;  i < $scope.todo.length; i++){
			if($scope.todo[i].selected){
				$scope.todo[i].done = true;
			}
		}
		calculatePercent();
	}

	$scope.undoneSelected = function(){
		for (var i  = 0;  i < $scope.todo.length; i++){
			if($scope.todo[i].selected){
				$scope.todo[i].done = false;
			}
		}
		calculatePercent();
	}

	$scope.selectAll = function(){
		for (var i  = 0;  i < $scope.todo.length; i++){
			$scope.todo[i].selected = true;
		}
	}


	$scope.unselectAll = function(){
		for (var i  = 0;  i < $scope.todo.length; i++){
			$scope.todo[i].selected = false;
		}
	}


	function calculatePercent(){
		var counter = 0;
		for (var i = 0; i < $scope.todo.length ; i++){
			if($scope.todo[i].done){
				counter++;
			}
		}

		$scope.percent = (counter / $scope.todo.length) * 100;  
	}

});