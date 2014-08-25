(function () {

    angular.module('cadence.data').factory('DataTransformers', function () {
        return {
            metrics: function (data) {
                var count = 0;
                if (data && data.length) {
                    var re = /\sZ$/g;
                    return _.map(data, function (m) {
                        return [count++, m.count, moment(m.time.replace(re, '')).format("MMM D, H:mm:SS")];
                    });
                }
                return data;
            }
        }
    });

}).call(this);