(function () {
    'use strict';

    angular.module('cadence.chart.directives').directive('realtimeChart', [
        function () {
            return {
                restrict: 'A',
                scope: {
                    chartData: '=',
                    transformer: '=',
                    updateTrigger: '='
                },
                link: function (scope, ele, attrs) {
                    var _plot,
                        _chooseData = function (data) {
                            return (typeof scope.transformer === 'function' ? scope.transformer(data) : data);
                        },
                        _initData = function (data) {
                            _plot = $.plot(ele[0], [_chooseData(data)], {
                                series: {
                                    lines: {
                                        show: true,
                                        fill: true
                                    },
                                    shadowSize: 0
                                },
                                yaxis: {
                                    min: 0,
                                    max: 10
                                },
                                xaxis: {
                                    show: false
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
                        ns.applyTo(scope, attrs.updateTrigger, function (data) {
                            if (!_plot) {
                                _initData(data)
                            }
                            _plot.setData([_chooseData(data)]);
                            _plot.draw();
                        });
                    }

                    scope.$watch('chartData', function (val) {
                        if (val && val.length) {
                            _initData(val);
                        }
                    });

//
//                    var data, getRandomData, plot, totalPoints, update, updateInterval;
//                    data = [];
//                    totalPoints = 300;
//                    getRandomData = function() {
//                        var i, prev, res, y;
//                        if (data.length > 0) {
//                            data = data.slice(1);
//                        }
//                        while (data.length < totalPoints) {
//                            prev = (data.length > 0 ? data[data.length - 1] : 50);
//                            y = prev + Math.random() * 10 - 5;
//                            if (y < 0) {
//                                y = 0;
//                            } else {
//                                if (y > 100) {
//                                    y = 100;
//                                }
//                            }
//                            data.push(y);
//                        }
//                        res = [];
//                        i = 0;
//                        while (i < data.length) {
//                            res.push([i, data[i]]);
//                            ++i;
//                        }
//                        return res;
//                    };
//                    update = function() {
//                        plot.setData([getRandomData()]);
//                        plot.draw();
//                        setTimeout(update, updateInterval);
//                    };
//                    data = [];
//                    totalPoints = 300;
//                    updateInterval = 200;
//
//                    return update();
                }
            };
        }
    ])

}).call(this);