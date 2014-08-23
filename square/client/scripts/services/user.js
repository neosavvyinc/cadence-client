(function () {
    'use strict';
    // NOTE: I like the concept of treating these as models and therefore
    // naming them as such (`User` instead of `UserService`, for instance),
    // but I'm open to discussion on this
    angular.module('cadence.app.services').factory('User', ['Restangular', function (Restangular) {
        var name = 'users',
            allUsers = Restangular.all(name),
            currentUser,
            userMethods = {
                // each method accepts params, or if the method is being
                // called on an instance, will evaluate it's own instance
                // variables instead
                login: function (params) {
                    params = params || this;
                    return allUsers.all('login').customPOST(_.pick(params, 'email', 'password')).then(function (res) {
                        currentUser = res;
                        return res;
                    });
                },
                logout: function (params) {
                    params = params || this;
                    return allUsers.all('logout').customPOST(_.pick(params, 'sessionId')).then(function (res) {
                        currentUser = null;
                        return res;
                    });
                },
                register: function (params) {
                    return allUsers.all('register').customPOST(_.pick(params, 'firstName', 'lastName', 'company', 'email', 'password', 'passwordConfirm'))
                },
                forgotPassword: function (params) {
                    params = params || this;
                    return allUsers.all('forgotpassword').customPOST(_.pick(params, 'email'));
                }
            };

        // make sure all user instances (for example, those received from GET /users or GET /users/:id)
        // have the same login, logout, and forgotPassword methods
        Restangular.addElementTransformer(name, false, function (user) {
            for (method in userMethods) {
                user[method] = _.bind(userMethods[method], user)
            }
            return user;
        });

        return _.tap(Restangular.service(name), function (users) {
            return _.extend(users, userMethods, {
                current: function () {
                    // for now... 
                    return currentUser;
                }
            });
        });
    }]);
}).call(this);
