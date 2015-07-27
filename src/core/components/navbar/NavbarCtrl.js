var navbarModule = angular.module('navbarModule', []);

navbarModule.controller('NavbarCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$http',
  function($rootScope, $scope, $location, $routeParams, $http) {
   $scope.templates =
    [ { name: 'template1.html', url: 'core/components/navbar/navbar.html'}
    , { name: 'template2.html', url: 'core/components/navbar/navbar2.html'} ];
  $scope.template = $scope.templates[1];
 
  }]);
