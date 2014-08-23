'use strict';

describe('cadence', function () {

    // load the controller's module
    beforeEach(module('cadence'));

    var controller,
        $scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
    }));

    it("Should be true", function () {
        expect(true).toBe(true);
    });

});