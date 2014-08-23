angular.module('cadence.app.ctrls').controller('createAppCtrl',
    ['$scope', 'MarketsData', function ($scope, markets) {
        $scope.appTypes = ["iPhone", "Android"];
        $scope.markets = markets;
        $scope.app = {type: $scope.appTypes[0]};
    }]);