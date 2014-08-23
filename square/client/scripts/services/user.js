(function () {
    'user strict';
    // NOTE: I like the concept of treating these as models and therefore
    // naming them as such (`User` instead of `UserService`, for instance),
    // but I'm open to discussion on this
    angular.module('cadence.ui.services').factory('User', ['Restangular', function (Restangular) {
        var allUsers = Restangular.all('users'),
            userMethods = {
                // each method accepts params, or if the method is being
                // called on an instance, will evaluate it's own instance
                // variables instead
                login: function (params) {
                    params = params || this;
                    return allUsers.all('login').customPOST(_.pick(params, 'email', 'password'));
                },
                logout: function (params) {
                    params = params || this;
                    return allUsers.all('logout').customPOST(_.pick(params, 'sessionId'));
                },
                forgotPassword: function (params) {
                    params = params || this;
                    return allUsers.all('forgotpassword').customPOST(_.pick(params, 'email'));
                }
            };

        // make sure all user instances (for example, those received from GET /users or GET /users/:id)
        // have the same login, logout, and forgotPassword methods
        Restangular.addElementTransformer('users', false, function (user) {
            for (method in userMethods) {
                user[method] = _.bind(userMethods[method], user)
            }
            return user;
        });

        return _.tap(Restangular.service('users'), function (users) {
            return _.extend(users, userMethods);
        });
    }]);
}).call(this);
