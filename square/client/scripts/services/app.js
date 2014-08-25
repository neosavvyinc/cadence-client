(function () {
    'user strict';
    angular.module('cadence.app.services')
        .factory('App', ['Restangular', 'User', function (Restangular, User) {
            var name = 'apps',
            /* Ideally allMetrics will be re-factored away */
                allMetrics = Restangular.all("metrics"),
                allApps = Restangular.all(name),
                appMethods = {
                    metrics: function (id) {
                        return allMetrics.all(id).getList();
                    },
                    checkin: function (params) {
                        params = params || this;
                        return allMetrics.all('checkin').customPOST(_.pick(params, 'appId', 'deviceId'));
                    }
                };
            // App.getList()
            // App.one('123123').all('metrics').getList();

            // for any configuration specific to this service and it's requests,
            // include it here. this will apply to only this service. this is ideal
            // for addFullRequestInterceptor because any and all addFullRequestInterceptor
            // methods will get called for every service call. to avoid conditional checking
            // of `what`, `url`, `operation` params, use withConfig

            var config = Restangular.withConfig(function (RestangularConfigurer) {
                RestangularConfigurer.addFullRequestInterceptor(
                    function (element, operation, what, url, headers, queryParams) {
                        var currentUser = User.current || {};
                        return { params: { userId: currentUser.id || '140' } };
                    });
            });
            
            var service = config.service(name);

            return _.tap(service, function (apps) {
                return _.extend(apps, appMethods);
            });

        }]);
}).call(this);
