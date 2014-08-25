'use strict';

describe('Controller: viewAppCtrl', function () {

    // load the controller's module
    beforeEach(module('cadence.app.ctrls', 'cadence.app.services', 'restangular', 'ngRoute', 'cadence.data'));

    var controller,
        $location,
        $scope,
        $route;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$location_, _$route_) {
        $scope = $rootScope.$new();
        $location = _$location_;
        $route = _$route_;
        $route.current = {params: {}};
        controller = $controller('viewAppCtrl', {
            $scope: $scope
        });
    }));

    describe("Initialization", function () {
        it("Should throw a $location object on the $scope", function () {
            expect($scope.$location).toEqual($location);
        });

        it("Should throw chartTypes on the $scope", function () {
            expect($scope.chartTypes).toEqual({
                real: 'Real Time Chart',
                line: 'Line Chart'
            });
        });
    });

});