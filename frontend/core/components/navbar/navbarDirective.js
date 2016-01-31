/*global angular*/

var coreModule = angular.module('modernPraxis.core');

coreModule.controller('NavbarCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$http', '$modal',
    function($rootScope, $scope, $location, $routeParams, $http, $modal) {
        $scope.searchExpr = {
            text: '',
            pattern: ''
        };

/*        
        $scope.popoverOpen = searchSvc.checkIfOpen();

        searchSvc.bindFreeSearch();

        $scope.openSearch = function() {
            searchSvc.openModal();
        };
*/
        $scope.searchHistory = [{
            appName: 'Janusz Nowak',
            randomId: '62c8c0fe-9520-449e-a198-a1eb35077f49'
        }, {
            appName: 'Grażyna Kowalska',
            randomId: 'dff1f609-f2a2-4ce4-be91-f9c39edf6fe7'
        }];

        $scope.doSearch = function() {
            var searchExpr = $scope.searchExpr.text;
            console.log('searchExpr: ' + searchExpr);

            if (searchExpr.replace(' ', '') !== '') {
                $location.path('/search/' + searchExpr);
            }
        };

        $scope.newVisitModal = function() {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: '/modules/dictionary/dictionary.template.html',
                controller: 'DictionaryCtrl',
                windowClass: 'app-modal-window',
                resolve: {}
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                console.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.getLocation = function(val) {
            /*
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(response) {
                return response.data.results.map(function(item) {
                    return item.formatted_address;
                });
            }); */
            
            return {
                    address: $scope.searchHistory,
                    sensor: false
                };
        };
    }
]);

coreModule.directive('mpNavbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'core/components/navbar/navbar.template.html'
  };
});