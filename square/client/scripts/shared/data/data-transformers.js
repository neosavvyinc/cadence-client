(function () {

    angular.module('cadence.data').factory('DataTransformers', function () {
        return {
            metrics: function (data, now) {
                if (data && data.length) {
                    var re = /\sZ$/g;

                    return _.map(data, function (m, i) {
                        var parsed = moment(m.time.replace(re, ''));
                        return [parsed.unix(), m.count, parsed.format("MMM D, H:mm:SS")];
                    });
                }
                return data;
            }
        }
    });

}).call(this);
