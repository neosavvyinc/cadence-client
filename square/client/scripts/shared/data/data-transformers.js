(function () {

    angular.module('cadence.data').factory('DataTransformers', function () {
        return {
            metrics: function (data, now) {
                if (data && data.length) {
                    return _.map(data, function (m, i) {
                        var parsed = moment(m.time);
                        return [parsed.unix(), m.count, parsed.format("MMM D, H:mm:SS")];
                    });
                }
                return data;
            }
        }
    });

}).call(this);
