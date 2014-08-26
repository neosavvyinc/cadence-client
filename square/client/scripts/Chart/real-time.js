(function () {
    'use strict';

    angular.module('cadence.chart.directives').directive('realtimeChart', ['$timeout', '$interval',
        function ($timeout, $interval) {
            return {
                restrict: 'A',
                scope: {
                    chartData: '=',
                    transformer: '=',
                    updateTrigger: '='
                },
                link: function (scope, elem, attrs) {
                    var _plot,
                        _data = [],
                        _offset = 0,
                        _chooseData = function (data) {
                            return (typeof scope.transformer === 'function' ? scope.transformer(data) : data);
                        },
                        _initData = function (data) {
                            $interval(function () {
//                                if (_data.length > 1) {
//                                    _.tap(_data.slice(1), function (data) {
//                                        var last = _.last(data);
//                                        last[0]++;
//                                        data.push(last);
//                                        _data = data;
//                                    });
//                                }
                                
                                var data = _chooseData(_data.slice(_offset));
                                _plot.setData([data]);
                                _plot.draw();
                                
                            }, 60);

                            _plot = $.plot(elem[0], [_chooseData(data)], {
                                series: {
                                    lines: {
                                        show: true,
                                        fill: true
                                    },
                                    shadowSize: 0
                                },
                                yaxis: {
                                    min: 0,
                                    max: 150
                                },
                                xaxis: {
                                    show: true,
                                    tickFormatter: function (timestamp) {
                                        return moment.unix(timestamp).format("H:mm:SS");
                                    }
                                },
                                grid: {
                                    hoverable: true,
                                    borderWidth: 1,
                                    borderColor: '#eeeeee'
                                },
                                colors: ["#5BDDDC"],
                                tooltip: true,
                                tooltipOpts: {
                                    content: function () {
                                        if (arguments.length >= 4) {
                                            var idx = arguments[3].dataIndex;
                                            var date = arguments[3].series.data[idx][2];
                                            if (date) {
                                                return date;
                                            }
                                        }
                                        return 'No date provided';
                                    }
                                }
                            });
                        };

                    if (attrs.updateTrigger) {
                        ns.applyTo(scope.$parent, attrs.updateTrigger, function (data) {

                            // having to use this offset sucks. it's ugly,
                            // not to mention the obvious long-running app concerns,
                            // where this number just keeps growing and growing.
                            // ideally, it'd be great to receive a delta of the data
                            // so that we could just append to the end and slice out
                            // the beginning... is this possible from the server side?
                            if (_data.length && (_data.length !== data.length)) {
                                _offset += data.length - _data.length;
                            }
                            
                            _data = data;
                        });
                    }

                    scope.$watch('chartData', function (val) {
                        var re = /\sZ$/g;
                        if (val && val.length) {
                            var now = moment().subtract(5, "minutes")
                            _initData(val);
                        }
                    });
                }
            };
        }
    ])

}).call(this);
