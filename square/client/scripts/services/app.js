(function () {
    'user strict';
    angular.module('cadence.ui.services')
    .factory('App', ['Restangular', 'User', function (Restangular, User) {
        var name = 'apps';
        // App.getList()
        // App.one('123123').all('metrics').getList();

        // for any configuration specific to this service and it's requests,
        // include it here. this will apply to only this service. this is ideal
        // for addFullRequestInterceptor because any and all addFullRequestInterceptor
        // methods will get called for every service call. to avoid conditional checking
        // of `what`, `url`, `operation` params, use withConfig
        return Restangular.withConfig(function (RestangularConfigurer) {
            RestangularConfigurer.addFullRequestInterceptor(function (element, operation, what, url, headers, queryParams) {
                var currentUser;
                // only add userId param for this route
                currentUser = User.current() || {};
                return { params: { userId: currentUser.id || '140' } };
            });
        }).service(name);

    }]);
}).call(this);
