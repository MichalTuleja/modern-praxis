var dashboardModule = angular.module('dictionaryModule', []);

dashboardModule.controller('DictionaryCtrl', function ($scope, $modalInstance) {

/*
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
*/
  $scope.ok = function () {
    //$modalInstance.close($scope.selected.item);
    $modalInstance.close();
  };

  $scope.cancel = function () {
    //$modalInstance.dismiss('cancel');
    $modalInstance.dismiss('cancel');
  };
});