// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.posts', 'ngSanitize', 'starter.recipeDetail', 'starter.category', 'starter.categoryDetail'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.recipes', {
        url: '/recipes',
        views: {
          'tab-recipes': {
            templateUrl: 'templates/tab-recipes.html',
            controller: 'postsCtrl as vm'
          }
        }
      })

      .state('tab.categories', {
        url: '/categories',
        views: {
          'tab-categories': {
            templateUrl: 'templates/tab-categories.html',
            controller: 'categoryCtrl as vm'
          }
        }
      })
      .state('tab.recipe-detail', {
        url: '/recipe/:recipeId',
        views: {
          'tab-recipes': {
            templateUrl: 'templates/recipe-detail.html',
            controller: 'recipeDetailCtrl as vm'
          }
        }
      })

      .state('tab.category-detail', {
        url: '/category/:categoryId',
        views: {
          'tab-categories': {
            templateUrl: 'templates/category-detail.html',
            controller: 'categoryDetailCtrl as vm'
          }
        }
      })

      .state('tab.categoryRecipe-detail', {
        url: '/category/recipes/:categoryId',
        views: {
          'tab-categories': {
            templateUrl: 'templates/recipe-detail.html',
            controller: 'recipeDetailCtrl as vm'
          }
        }
      })

      .state('tab.favorites', {
        url: '/favorites',
        views: {
          'tab-favorites': {
            templateUrl: 'templates/tab-favorites.html',
            controller: 'postsCtrl as vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/recipes');

  });
