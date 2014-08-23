(function () {
    'user strict';
    angular.module('cadence.ui.services')
    .factory('App', ['Restangular', function (Restangular) {
        // App.getList()
        // App.one('123123').all('metrics').getList();
        return Restangular.service('apps');
    }]);
}).call(this);
