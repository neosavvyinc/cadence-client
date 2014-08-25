'use strict';

describe('Service: DataTransformers', function () {

    // load the controller's module
    beforeEach(module('cadence.data'));

    var dataTransformers, data;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_DataTransformers_) {
        dataTransformers = _DataTransformers_;
        data = [{
            "count": 10,
            "time": "2014-08-23 19:48:00 Z"
        }, {
            "count": 4,
            "time": "2014-08-23 20:55:00 Z"
        }, {
            "count": 2,
            "time": "2014-08-23 21:13:00 Z"
        }];
    }));

    describe("metrics", function () {
        var metrics;

        beforeEach(function () {
            metrics = dataTransformers.metrics;
        });

        it("Should return undefined if passed", function () {
            expect(metrics(undefined)).toBeUndefined();
        });

        it("Should return null if passed", function () {
            expect(metrics(null)).toBeNull();
        });

        it("Should return an empty array if passed", function () {
            expect(metrics([])).toEqual([]);
        });

        it("Should convert obejcts so that the time is the x (0 index) and the value is the y (1 index)", function () {
            expect(metrics(data)).toEqual([[
                0,
                10,
                "Aug 23, 19:48:00"
            ], [
                1,
                4,
                "Aug 23, 20:55:00"
            ], [
                2,
                2,
                "Aug 23, 21:13:00"
            ]]);
        });

        it("Should format the date and time on the x via moment js", function () {
            expect(metrics(data)).toEqual([[
                0,
                10,
                "Aug 23, 19:48:00"
            ], [
                1,
                4,
                "Aug 23, 20:55:00"
            ], [
                2,
                2,
                "Aug 23, 21:13:00"
            ]]);
        });

    });

});