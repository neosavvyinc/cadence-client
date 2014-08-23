(function () {
    'user strict';
    angular.module('cadence.ui.services')
    .factory('App', ['Restangular', function (Restangular) {
        var name = 'apps';
        // App.getList()
        // App.one('123123').all('metrics').getList();

        Restangular.addFullRequestInterceptor(function (element, operation, what, url, headers, queryParams) {
            // TODO fetch userId from somewhere

            // only add userId param for this route
            if (what === name) {
                return { params: { userId: '140' } };
            }
        });

        return Restangular.service(name);
    }]);
}).call(this);
