angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'main',
      redirectTo: 'login'
    })
   .state('login', {
      parent: 'app',
      url: 'login',
      component: 'appLogin'
    })    
   .state('store', {
      parent: 'app',
      url: 'store',
      component: 'appStore'
    })
    .state('edit', {
      parent: 'app',
      url: 'edit/:idItem',
      component: 'editItem'
    })
    .state('add', {
      parent: 'app',
      url: 'add',
      component: 'addItem'
    });
}