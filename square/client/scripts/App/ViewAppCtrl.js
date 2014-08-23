angular.module('cadence.app.ctrls').controller('viewAppCtrl',
    ['$scope', '$location', function ($scope, $location) {
        $scope.app = {
            id: 26,
            name: 'Sneeky',
            url: 'https://itunes.apple.com/us/app/sneeky/id797190314?mt=8',
            type: 'iPhone',
            market: 'Photo & Video',
            apiKey: new Date().getTime()
        };
        $scope.$location = $location;
        $scope.chartTypes = {
            real: 'Real Time Chart',
            line: 'Line Chart'
        };
    }]);