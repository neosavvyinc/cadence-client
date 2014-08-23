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
    '$scope', 'taskStorage', 'filterFilter', 'App', function($scope, taskStorage, filterFilter, App) {
      var tasks;
      tasks = $scope.tasks = taskStorage.get();
      $scope.taskRemainingCount = filterFilter(tasks, {
        completed: false
      }).length;

      App.getList().then(function (data) {
        $scope.apps = data;
      });

      // for now...
      $scope.apps = [
          { name: 'Sneeky' },
          { name: 'Shoutout' },
          { name: 'Push For Pizza' }
      ];

      return $scope.$on('taskRemaining:changed', function(event, count) {
        return $scope.taskRemainingCount = count;
      });
    }
  ]).controller('DashboardCtrl', ['$scope', function($scope) {}]);

}).call(this);
