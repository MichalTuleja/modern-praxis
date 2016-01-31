/*global angular*/

angular.module('modernPraxis.search1', [])

.service('searchSvc', function($rootScope, $location, $http, $modal, $timeout) {

    var modalOpen = false;
    var aCharCode = 65;
    var zCharCode = 90

    var openModal = function() {
        var modalInstance = $modal.open({
            animation: false,
            templateUrl: '/core/components/search/searchModal.template.html',
            controller: 'SearchCtrl',
            windowClass: 'app-modal-window',
            resolve: {}
        });

        modalOpen = true;

        modalInstance.result.then(function(selectedItem) {
            //$scope.selected = selectedItem;
        }, function() {
            modalOpen = false;
            console.info('Modal dismissed at: ' + new Date());
        });
    };
    
    var focusSearchBox = function() {
        $('#searchInput').focus();
    };
    
    var checkIfOpen = function() {
        return true;
    };

    return {
        search: function(callback) {
            callback();
        },
        bindFreeSearch: function() {
            $(document).keydown(function(e) {
                //var checkWebkitandIE = (e.which == 26 ? 1 : 0);
                //var checkMoz = (e.which == 122 ? 1 : 0);
                console.log(e.which);

                if ($location.$$path.match('basic_data') == null) {
                    if ($location.$$path.match('ophtalmology') == null) {
                        if(modalOpen === false) {
                            if(e.which >= aCharCode && e.which <= zCharCode) {
                                //openModal();
                                focusSearchBox();
                            }
                        }
                    }
                }
            });
        },
        openModal: focusSearchBox,
        focusSearchBox: focusSearchBox,
        checkIfOpen: checkIfOpen
    };
});
