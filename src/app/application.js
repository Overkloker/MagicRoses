import jQuery from "jquery";
window.$ = window.jQuery = window.jquery = jQuery;

import "jquery";

import angular from "angular";

import "angular-resource";
import "angular-ui-router";

import "angular-bootstrap-js";
import "angular-bootstrap-tpls";
import "angular-bootstrap-css";

import "./../../component/bootstrap/dist/css/bootstrap.min.css";
import "./../../component/bootstrap/dist/css/bootstrap-theme.min.css";


import "satellizer";

import "angular-animate";

export default angular.module("magic.front", [
  'ui.router',
  'ui.bootstrap',
  'satellizer',
  'ngAnimate'
]);
