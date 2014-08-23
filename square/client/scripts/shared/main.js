(function() {
  'use strict';
  angular.module('cadence.controllers', []).controller('AppCtrl', [
    '$scope', '$location', function($scope, $location) {
      $scope.isSpecificPage = function() {
        var path;
        path = $location.path();
        return _.contains(['/404', '/pages/500', '/pages/login', '/pages/signin', '/pages/signin1', '/pages/signin2', '/pages/signup', '/pages/signup1', '/pages/signup2', '/pages/forgot', '/pages/lock-screen'], path);
      };
      return $scope.main = {
        brand: 'Cadence',
        name: 'Lemmy Kilmister',
        title: 'Gonna Kick Your Ass'
      };
    }
  ]).controller('NavCtrl', [
    '$scope', 'App', function($scope, App) {

      App.getList().then(function (data) {
        $scope.apps = data;
      });

      // for now...
      $scope.apps = [];
    }
  ]);

}).call(this);
