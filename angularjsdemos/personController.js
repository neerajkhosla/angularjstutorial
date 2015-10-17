angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.names = [
        { name: 'Mohan', country: 'India' },
        { name: 'Neeraj', country: 'USA' },
        { name: 'Nitin', country: 'UK' },
        { name: 'Ravinder', country: 'Sweden' },
        { name: 'Rohit', country: 'Sweden' },
        { name: 'Navjeet', country: 'Germany' },
    ];
});