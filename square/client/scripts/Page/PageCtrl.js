(function() {
  'use strict';
  angular.module('cadence.page.ctrls', [])
  .controller('invoiceCtrl', [
    '$scope', '$window', function($scope, $window) {
      return $scope.printInvoice = function() {
        var originalContents, popupWin, printContents;
        printContents = document.getElementById('invoice').innerHTML;
        originalContents = document.body.innerHTML;
        popupWin = window.open();
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
        return popupWin.document.close();
      };
    }
  ])
  .controller('signinCtrl', ['$scope', 'User', function ($scope, User) {
    this.error = null;
    this.user = {};
    this.logIn = _.bind(function () {
        this.error = null;
        User.login(this.user).catch(_.bind(function (err) {
            this.error = err;
        }, this));
    }, this);
  }])
  .controller('signupCtrl', ['$scope', 'User', function ($scope, User) {
    this.error = null;
    this.user = {};
    this.signUp = _.bind(function () {
        this.error = null;
        User.register(this.user).catch(_.bind(function (err) {
            this.error = err;
        }, this));
    }, this);
  }])
  .controller('forgotPasswordCtrl', ['$scope', 'User', function ($scope, User) {
    this.error = null;
    this.user = {};
    this.forgotPassword = _.bind(function () {
        this.error = null;
        User.forgotPassword(this.user).catch(_.bind(function (err) {
            this.error = err;
        }, this));
    }, this);
  }])

}).call(this);

