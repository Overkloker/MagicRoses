import app from "./../application";

import rosesType from "./../libs/prices.json";

app.controller("FlowerListController", function ($scope, $stateParams, $state, $rootScope) {
  $scope.data = rosesType[$stateParams.type];
  $rootScope.showColor = $scope.data[0].showColor;
  $rootScope.showSize =$scope.data[0].showSize;
  $rootScope.title = $scope.data[0].title;

  let keys = Object.keys($scope.data.items);

  // todo colors
  let colorKey = Object.keys($scope.data.items[keys[0]].colors)[0];
  $scope.color = colorKey;

  $scope.selectColor = function (val) {
    $scope.color = val;
    localStorage.setItem("selectColor", val);
  };

  $scope.selectSize = function (val) {
    $scope.size = val;
    localStorage.setItem("selectSize", val);
  };

  $scope.selectItem = function (item) {
    localStorage.setItem("selectItem", JSON.stringify(item));
    $state.go('front.flower.view')
  }
});