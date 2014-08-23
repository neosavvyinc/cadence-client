'use strict';

describe('Controller: createAppCtrl', function () {

    // load the controller's module
    beforeEach(module('cadence.app.ctrls', 'cadence.data'));

    var controller,
        markets,
        $scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, MarketsData) {
        $scope = $rootScope.$new();
        markets = MarketsData;
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