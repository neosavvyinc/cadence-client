'use strict';

describe('Controller: viewAppCtrl', function () {

    // load the controller's module
    beforeEach(module('cadence.app.ctrls'));

    var controller,
        $location,
        $scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, _$location_) {
        $scope = $rootScope.$new();
        $location = _$location_;
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