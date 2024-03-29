angular.module('cadence.app.services').value('metricsChangedRequest', {
    value: undefined
});

angular.module('cadence.app.ctrls').controller('viewAppCtrl',
    ['$scope', '$location', 'App', 'Sockets', '$route', 'DataTransformers', 'metricsChangedRequest',
        function ($scope, $location, App, Sockets, $route, dataTransformers, metricsChangedRequest) {

            //Load up the app
            $scope.chartFns = {

            };
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
                if ($scope.app) {
                    var timeFilter = metricsChangedRequest.value;
                    metricsChangedRequest.value = moment();
                    App.metrics($scope.app.id, { timeFilter: timeFilter.format("YYYY-MM-DD HH:mm:SS") }).then(function (metrics) {
                       if (typeof $scope.chartFns.updateRealtimeChart === 'function') {
                           $scope.chartFns.updateRealtimeChart(metrics);
                           //$scope.connectedClients = Neosavvy.Core.Utils.MapUtils.highPerformanceGet(_.last(metrics), 'count') || 0;
                       }
                    });
                } else {
                    throw "No app defined on the $scope, check the code.";
                }
            });

            //Removes the web socket when the $scope is destroyed
            $scope.$on('$destroy', dereg);

            $scope.$location = $location;
            $scope.chartTypes = {
                real: 'Real Time Chart'
            };

            //Getters
            $scope.transformers = dataTransformers;

            //Action Handlers
            $scope.sampleCheckin = function () {
                App.checkin({ appId: String($scope.app.apiKey), deviceId: 'DASHBOARD_TEST_' + $scope.app.id });
            };
        }]);
