angular.module('cadence.app.ctrls').controller('createAppCtrl',
    ['$scope', 'MarketsData', 'App', '$route', '$location',
        function ($scope, markets, App, $route, $location) {
            $scope.appTypes = ["iPhone", "Android"];
            $scope.markets = markets;

            if ($route.current.params.id) {
                App.one($route.current.params.id).get().then(function (app) {
                    $scope.app = app;
                });
            } else {
                $scope.app = { appType: $scope.appTypes[0] };
            }

            $scope.submitForm = function (valid) {
                if (valid) {
                    $scope.error = "";
                    App.post(_.merge($scope.app, {ownerId: 140})).then(function (app) {
                        $scope.main.apps.push(app);
                        $location.path("apps/" + app.id);
                    });
                } else {
                    $scope.error = "All fields are required.";
                }
            }
        }]);
