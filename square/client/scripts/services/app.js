(function () {
    'user strict';
    angular.module('cadence.ui.services')
    .factory('App', ['Restangular', function (Restangular) {
        // App.getList()
        // App.one('123123').all('metrics').getList();

        Restangular.addFullRequestInterceptor(function (element, method, name) {
            // TODO fetch userId from somewhere
            return { params: { userId: '140' } };
        });

        return Restangular.service('apps');
    }]);
}).call(this);
