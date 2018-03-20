'use strict';

angular.module('myApp.view3', ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view3', {
			templateUrl: 'view3/view3.html',
			controller: 'view3Ctrl'
		});
	}])
	.directive('iframeOnload', [function () {
		return {
			scope: {
				callBack: '&iframeOnload'
			},
			link: function (scope, element, attrs) {
				element.on('load', function () {
					return scope.callBack();
				});
			}
		};
	}])
	.controller('view3Ctrl', ['$scope','$window', function ($scope, $window) {

		var resizeIframe = function(event) {
			var obj = $window.document.querySelector('#iframe');
			console.log(event);
			if(event.origin === 'http://localhost:4200') {
				obj.style.height = event.data.height + 'px';
			}

		}


		$window.addEventListener("message", resizeIframe, false);

		$scope.chargeIframe = false;

		$scope.askIframe = function () {
			var obj = $window.document.querySelector('#iframe');
			obj.contentWindow.postMessage('css', 'http://localhost:4200');

		};




	}]);

