'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$window', function($scope, $window) {

	$window.localStorage.setItem('user', 'nicolas');

	$scope.chargerAngular5 = function() {
		console.log("chargerAngular5");
		chargerScript("dist/inline.bundle.js");
		chargerScript("dist/polyfills.bundle.js");
		chargerScript("dist/main.bundle.js");
	};

	var chargerScript = function(value) {
		console.log(value);
		var tag = $window.document.createElement("script");
		tag.src = value;
		$window.document.getElementsByTagName("head")[0].appendChild(tag);
	}

}]);
