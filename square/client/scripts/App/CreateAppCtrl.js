angular.module('cadence.app.ctrls').controller('createAppCtrl',
    ['$scope', 'MarketsData', 'App', function ($scope, markets, App) {
        $scope.appTypes = ["iPhone", "Android"];
        $scope.markets = markets;
        $scope.app = { appType: $scope.appTypes[0] };

        $scope.submitForm = function () {
            console.log('submit');
            App.post($scope.app);
        }
    }]);
