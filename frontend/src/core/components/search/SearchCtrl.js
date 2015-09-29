var navbarModule = angular.module('searchModule', []);

navbarModule.controller('SearchCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$http',
  function($rootScope, $scope, $location, $routeParams, $http) {
   $scope.templates =
   {
     searchBox: 'core/components/search/SearchBoxTemplate.html',
     searchResults: 'core/components/navbar/SearchResultsTemplate.html'
  };
  
  $scope.searchExpr = '';
 
  }]);
