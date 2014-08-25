(function () {
    'user strict';
    angular.module('cadence.app.services')
        .factory('Sockets', ['$location',
            function ($location) {
                /* Want to use $location.port(), but the proxy is not working for sockets */
                var ws = new ReconnectingWebSocket("ws://" + $location.host() + ":8080"),
                    subscriptions = {};

                ws.onmessage = function (event) {
                    if (event && event.data) {
                        event = JSON.parse(event.data).event;
                        var handlers = subscriptions[event];
                        if (handlers && handlers.length) {
                            for (var i = 0; i < handlers.length; i++) {
                                handlers[i].apply(this, arguments);
                            }
                        }
                    }
                };

                return {
                    subscribe: function (event, handler) {
                        subscriptions[event] = subscriptions[event] || [];
                        var lastIndex = subscriptions[event].push(handler) - 1;

                        /* Returns a de-registration function */
                        return (function (event, index) {
                            return function() {
                                subscriptions[event].splice(index, 1);
                            };
                        })(event, lastIndex);
                    }
                }
            }]);
}).call(this);