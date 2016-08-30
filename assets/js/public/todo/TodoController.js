var myApp = angular.module('TodoModule',[]);

myApp.controller('TodoController', ['$scope','$http', function($scope, $http) {
	$scope.noListFound = true;
	$scope.save = function() {
		if ($scope.todoForm.$valid) {
			// Simple POST request:
			$http({
			  	method: 'POST',
			  	url: '/add',
			  	data: {task: $scope.user.task}
			}).then(function successCallback(response) {
			    // when the response is available
			    // console.log("save successCallback==", response);
			    $scope.getMyList();
				alert("Successfully added to the list")
			    $scope.reset();
			}, function errorCallback(response) {
			    // called asynchronously if an error occurs or server returns response with an error status.
			    console.log("save errorCallback==", response);
			});

		} else {
			alert("There are invalid fields");
			$scope.reset();
		}
	};

	$scope.reset = function() {
		$scope.user = { task: ''};
	}

	$scope.getMyList = function() {
		// Simple GET request:
		$http({
		  	method: 'GET',
		  	url: '/todo'
		}).then(function successCallback(response) {
		    // when the response is available
		    console.log("getMyList successCallback==", response);
		    if(response.data && response.data.length > 0){
		    	$scope.noListFound = false;
		    	$scope.todoArray = response.data;
		    }else{
		    	$scope.noListFound = true;
		    }
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs or server returns response with an error status.
		    console.log("getMyList errorCallback==", response);
		});
	};
	$scope.getMyList();

	$scope.delete = function(taskID) {
		// Simple PUT request:
		$http({
		  	method: 'PUT',
		  	url: '/todo',
		  	data: {id: taskID}
		}).then(function successCallback(response) {
		    // when the response is available
		    console.log("delete successCallback==", response);
		    $scope.getMyList();
		}, function errorCallback(response) {
		    // called asynchronously if an error occurs or server returns response with an error status.
		    console.log("delete errorCallback==", response);
		});
	};

}]);