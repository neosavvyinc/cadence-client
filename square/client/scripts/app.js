(function() {
  'use strict';
  angular.module('cadence', [
      'ngRoute',
      //'ngAnimate',
      'ui.bootstrap',
      'easypiechart',
      'mgo-angular-wizard',
      'textAngular',
      'ui.tree',
      'ngMap',
      'ngTagsInput',
      'cadence.data',
      'cadence.app.ctrls',
      'cadence.ui.ctrls',
      'cadence.ui.directives',
      'cadence.app.services',
      'cadence.controllers',
      'cadence.directives',
      'cadence.form.validation',
      'cadence.ui.form.ctrls',
      'cadence.ui.form.directives',
      'cadence.tables',
      'cadence.map',
      'cadence.task',
      'cadence.localization',
      'cadence.chart.ctrls',
      'cadence.chart.directives',
      'cadence.page.ctrls',
      'restangular'
  ]).config([
    '$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {

      RestangularProvider.setBaseUrl('/api/');
      return $routeProvider.when('/', {
        redirectTo: '/apps/none'
      }).when('/apps/create', {
          templateUrl: 'views/app/create-app.html'
      }).when('/apps/none', {
          templateUrl: 'views/app/no-app.html'
      }).when('/apps/:id', {
          templateUrl: 'views/app/view-app.html'
      }).when('/apps/:id/update', {
          templateUrl: 'views/app/create-app.html'
      }).when('/ui/typography', {
        templateUrl: 'views/ui/typography.html'
      }).when('/ui/buttons', {
        templateUrl: 'views/ui/buttons.html'
      }).when('/ui/icons', {
        templateUrl: 'views/ui/icons.html'
      }).when('/ui/grids', {
        templateUrl: 'views/ui/grids.html'
      }).when('/ui/widgets', {
        templateUrl: 'views/ui/widgets.html'
      }).when('/ui/components', {
        templateUrl: 'views/ui/components.html'
      }).when('/ui/timeline', {
        templateUrl: 'views/ui/timeline.html'
      }).when('/ui/nested-lists', {
        templateUrl: 'views/ui/nested-lists.html'
      }).when('/ui/pricing-tables', {
        templateUrl: 'views/ui/pricing-tables.html'
      }).when('/forms/elements', {
        templateUrl: 'views/forms/elements.html'
      }).when('/forms/layouts', {
        templateUrl: 'views/forms/layouts.html'
      }).when('/forms/validation', {
        templateUrl: 'views/forms/validation.html'
      }).when('/forms/wizard', {
        templateUrl: 'views/forms/wizard.html'
      }).when('/maps/gmap', {
        templateUrl: 'views/maps/gmap.html'
      }).when('/maps/jqvmap', {
        templateUrl: 'views/maps/jqvmap.html'
      }).when('/tables/static', {
        templateUrl: 'views/tables/static.html'
      }).when('/tables/responsive', {
        templateUrl: 'views/tables/responsive.html'
      }).when('/tables/dynamic', {
        templateUrl: 'views/tables/dynamic.html'
      }).when('/charts/others', {
        templateUrl: 'views/charts/charts.html'
      }).when('/charts/morris', {
        templateUrl: 'views/charts/morris.html'
      }).when('/charts/flot', {
        templateUrl: 'views/charts/flot.html'
      }).when('/mail/inbox', {
        templateUrl: 'views/mail/inbox.html'
      }).when('/mail/compose', {
        templateUrl: 'views/mail/compose.html'
      }).when('/mail/single', {
        templateUrl: 'views/mail/single.html'
      }).when('/pages/features', {
        templateUrl: 'views/pages/features.html'
      }).when('/pages/signin', {
        templateUrl: 'views/pages/signin.html',
        controller: 'signinCtrl as signinCtrl'
      }).when('/pages/signup', {
        templateUrl: 'views/pages/signup.html',
        controller: 'signupCtrl as signupCtrl'
      }).when('/pages/forgot', {
        templateUrl: 'views/pages/forgot-password.html',
        controller: 'forgotPasswordCtrl as forgotPasswordCtrl'
      }).when('/pages/lock-screen', {
        templateUrl: 'views/pages/lock-screen.html'
      }).when('/pages/profile', {
        templateUrl: 'views/pages/profile.html'
      }).when('/404', {
        templateUrl: 'views/pages/404.html'
      }).when('/pages/500', {
        templateUrl: 'views/pages/500.html'
      }).when('/pages/blank', {
        templateUrl: 'views/pages/blank.html'
      }).when('/pages/invoice', {
        templateUrl: 'views/pages/invoice.html'
      }).when('/pages/services', {
        templateUrl: 'views/pages/services.html'
      }).when('/pages/about', {
        templateUrl: 'views/pages/about.html'
      }).when('/pages/contact', {
        templateUrl: 'views/pages/contact.html'
      }).when('/tasks', {
        templateUrl: 'views/tasks/tasks.html'
      }).otherwise({
        redirectTo: '/404'
      });
    }
  ]);

  /* Module Instantiation */
  angular.module('cadence.app.ctrls', []);
  angular.module('cadence.chart.directives', []);
    angular.module('cadence.data', []);

}).call(this);
