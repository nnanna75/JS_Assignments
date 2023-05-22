var app = angular.module('simpleProgram', []);
app.filter('singleDecimal', function ($filter) {
return function (input) {
if (isNaN(input)) return input;
return Math.round(input * 10) / 10;
};
});
app.filter('setDecimal', function ($filter) {
return function (input, places) {
if (isNaN(input)) return input;
 var factor = "1" + Array(+(places > 0 && places + 1)).join("0");
return Math.round(input * factor) / factor;
};
});
app.controller('Ctrl', function ($scope) {
$scope.val = 1.56;
});