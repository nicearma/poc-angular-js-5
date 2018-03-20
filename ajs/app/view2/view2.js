'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$window', function($scope, $window) {


	$scope.chargerAngular5 = function() {
		console.log("chargerAngular5");
		chargerScript("dist2/inline.bundle.js");
		chargerScript("dist2/polyfills.bundle.js");
		chargerScript("dist2/main.bundle.js");
	};

	var chargerScript = function(value) {
		console.log(value);
		var tag = $window.document.createElement("script");
		tag.src = value;
		$window.document.getElementsByTagName("head")[0].appendChild(tag);
	}


}]);