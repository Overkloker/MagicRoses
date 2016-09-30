import app from "./../application";

import appLayoutTpl from "../themes/template/app.html";
import indexTpl from "../themes/template/index.html";
import flowerListTpl from "../themes/template/flower/list.html";
import flowerViewTpl from "../themes/template/flower/view.html";

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('front', {
      url: '/',
      abstract: true,
      templateUrl: appLayoutTpl,
      controller: "AppController"
    })
    .state('front.index', {
      url: '',
      templateUrl: indexTpl,
      controller: "IndexController"
    })

    .state('front.flower', {
      url: '',
      abstract: true,
      template: "<ui-view></ui-view>"
    })
    .state('front.flower.list', {
      url: 'list/:type',
      templateUrl: flowerListTpl,
      controller: "FlowerListController"
    })
    .state('front.flower.view', {
      url: 'view',
      templateUrl: flowerViewTpl,
      controller: "FlowerViewController"
    })
});
