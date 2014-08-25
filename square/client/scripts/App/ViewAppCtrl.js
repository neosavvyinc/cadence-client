angular.module('cadence.app.ctrls').controller('viewAppCtrl',
    ['$scope', '$location', 'App', 'Sockets', '$route', 'DataTransformers',
        function ($scope, $location, App, Sockets, $route, dataTransformers) {

            //Load up the app
            App.one($route.current.params.id).get().
                then(function (app) {
                    $scope.app = app;
                    return app;
                }).
                then(function (app) {
                    return App.metrics(app.id);
                }).then(function (result) {
                    $scope.metrics = result;
                });

            //Subscribe to the socket for updates
            var dereg = Sockets.subscribe("metricsChanged", function () {
                console.log("The metrics just changed!");
            });

            //Removes the web socket when the $scope is destroyed
            $scope.$on('$destroy', dereg);

            $scope.$location = $location;
            $scope.chartTypes = {
                real: 'Real Time Chart',
                line: 'Line Chart'
            };

            //Getters
            $scope.transformers = dataTransformers;

            //Action Handlers
            $scope.sampleCheckin = function () {
                App.checkin({appId: String($scope.app.id), deviceId: 'DASHBOARD_TEST_' + $scope.app.id});
            };
        }]);