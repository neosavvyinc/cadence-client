angular.module('cadence.app.ctrls').controller('createAppCtrl',
    ['$scope', 'MarketsData', 'App', '$route', function ($scope, markets, App, $route) {
        $scope.appTypes = ["iPhone", "Android"];

        if ($route.current.params.id) {
            App.one($route.current.params.id).get().then(function (app) {
                $scope.app = app;
            });
        } else {
            $scope.app = { type: $scope.appTypes[0] };
        }

        $scope.markets = markets;

        $scope.submitForm = function () {
            App.post($scope.app);
        }
    }]);
