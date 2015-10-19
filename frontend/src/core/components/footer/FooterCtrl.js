
/*global angular*/

var navbarModule = angular.module('footerModule', []);

navbarModule.controller('FooterCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$http',
  function($rootScope, $scope, $location, $routeParams, $http) {
   $scope.templates = { name: 'template1.html', url: 'core/components/footer/footer.template.html'};
   
  $scope.template = $scope.templates;
 
  }]);
