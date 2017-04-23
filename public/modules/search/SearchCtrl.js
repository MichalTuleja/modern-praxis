var searchModule = angular.module('modernPraxis.search', []);

searchModule.config(function($routeProvider,  $locationProvider) {
  $routeProvider
    .when('/search/:searchExpr', {
      templateUrl: 'modules/search/searchResults.template.html',
      controller: 'SearchCtrl'
    })
});

searchModule.controller('SearchCtrl', 
          ['$rootScope', '$scope', '$location', '$routeParams', '$timeout', 'DataStoreService',
  function($rootScope, $scope, $location, $routeParams, $timeout, dataStore) {
    $scope.templates = {
      searchBox: 'modules/search/SearchBox.template.html',
      searchResults: 'modules/navbar/SearchResults.template.html'
    };

    $scope.searchExpr = $routeParams.searchExpr;

    $scope.results = [];
    
    if($routeParams.searchExpr === 'all') {
      dataStore.getAllPatients(function(data) {
        $scope.$evalAsync(function() {
          var res = [];
          for(var i in data) {
            var row = data[i];
            res.push(row);
          }
          $scope.results = res;
        });
      });
    }
    else {
      dataStore.getPatientListByName($routeParams.searchExpr, function(data) {
        $scope.$evalAsync(function() {
          var res = [];
          for(var i in data) {
            var row = data[i];
            res.push(row);
          }
          $scope.results = res;
        });
      });
    }
    
    $scope.onEnterKey = function() {
      if($scope.searchExpr !== '') {
        $location.path('/search/' + $scope.searchExpr);
      }
    }
    
  }
]);
