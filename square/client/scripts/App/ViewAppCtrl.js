angular.module('cadence.app.ctrls').controller('viewAppCtrl',
    ['$scope', '$location', 'App', '$route',
        function ($scope, $location, App, $route) {

            //Load up the app
            App.one($route.current.params.id).get().then(function (app) {
                $scope.app = app;
            });

            $scope.$location = $location;
            $scope.chartTypes = {
                real: 'Real Time Chart',
                line: 'Line Chart'
            };
        }]);