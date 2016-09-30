import app from "./../application";

import rosesType from "./../libs/prices.json";

app.controller("IndexController", function ($scope, $state, $rootScope) {
  $scope.rosesType = rosesType;

  $scope.selectItem = function (item, key) {
    $rootScope.showColor = item[0].showColor;
    $rootScope.showSize = item[0].showSize;
    localStorage.setItem("selectItem", JSON.stringify(item));

    if (item[0].step2) {
      $state.go('front.flower.list', {type:key})
    } else {
      $state.go('front.flower.view')
    }
    // $state.go(item[0].step2 ? 'front.flower.list({type:key})' : 'front.flower.view')
  }
});