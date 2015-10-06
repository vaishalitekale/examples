'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:sampledir
 * @description
 * # sampledir
 */
angular.module('mytodoApp')
  .directive('sampledir', function () {
	  console.log("in directive");
    return {
		require: 'ngModel',
		link: function (scope, element, attrs, ngModelCtrl) {
			console.log("in directive1");
			function fromUser(text) {
				console.log("in directive2");
				var transformedInput = text.replace(/[^0-9]/g, '');
			}
		}
    };
  });
