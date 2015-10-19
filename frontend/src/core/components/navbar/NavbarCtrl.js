var navbarModule = angular.module('navbarModule', []);



navbarModule.controller('NavbarCtrl', ['$rootScope', '$scope', '$location', '$routeParams', '$http', '$modal',
    function($rootScope, $scope, $location, $routeParams, $http, $modal) {
        $scope.templates = [{
            name: 'template1.html',
            url: 'core/components/navbar/navbar.html'
        }, {
            name: 'template2.html',
            url: 'core/components/navbar/navbar2.html'
        }];

        $scope.template = $scope.templates[1];

        $scope.searchExpr = {
            text: '',
            pattern: ''
        };

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

        $scope.showDictionaryModal = function() {
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

        $(document).keydown(function(e) {
            //var checkWebkitandIE = (e.which == 26 ? 1 : 0);
            //var checkMoz = (e.which == 122 ? 1 : 0);
            console.log(e.which);

            if($location.$$path.match('basic_data') == null) {
                if($location.$$path.match('ophtalmology') == null) {
                    $('#searchInput').focus();    
                }
            }
        });

        $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        $scope.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(response) {
                return response.data.results.map(function(item) {
                    return item.formatted_address;
                });
            });
        };
    }
]);
