import app from "./../application";

import pack from "./../libs/packing.json";

app.controller("FlowerViewController", function ($scope, $rootScope, $state) {
  $scope.packages = pack;

  let item = JSON.parse(localStorage.getItem("selectItem"));
  let color = localStorage.getItem("selectColor");
  let size = JSON.parse(localStorage.getItem("selectSize"));

  $scope.color = color;
  $scope.length = size;
  $scope.count = item.count;
  $scope.item = item;


  $scope.lengthItem = 150;

  if ($rootScope.showColor && $rootScope.showSize) {
    $scope.price = item.colors[color].sizes[size].price;
  } else if ($rootScope.showColor) {
    $scope.price = item.colors[color].price;
  } else if ($rootScope.showSize) {
    $scope.price = item.sizes[size].price;
  } else {
    $scope.countItem = item[0].min || 1;
    $scope.price = item.price * $scope.countItem;
  }

  $scope.calculationPrice = function (c) {
    $scope.price = item.price * c;
  };

  $scope.addPack = function (pack, index) {
    $scope.additionPrice = pack.price;
    $scope.selected = index
  };

  // $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
  //   console.log(from);
  //   $rootScope.previewPage = from
  // });
  //
  // $scope.prevPage = function () {
  //   $state.go($rootScope.previewPage);
  // }
});