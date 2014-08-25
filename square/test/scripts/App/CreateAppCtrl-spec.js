'use strict';

describe('Controller: createAppCtrl', function () {

    // load the controller's module
    beforeEach(module('cadence.app.ctrls', 'cadence.data', 'cadence.app.services', 'restangular', 'ngRoute'));

    var controller,
        markets,
        $route,
        $scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, MarketsData, _$route_) {
        $scope = $rootScope.$new();
        markets = MarketsData;
        $route = _$route_;
        $route.current = {params: {}};
        controller = $controller('createAppCtrl', {
            $scope: $scope
        });
    }));

    describe("Initialization", function () {

        it("Should throw markets onto the $scope", function () {
            expect($scope.markets).toBe(markets);
        });

        it("Should throw appTypes onto the $scope", function () {
            expect($scope.appTypes).toEqual(["iPhone", "Android"]);
        });
    });

});