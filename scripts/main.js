(function(window){
  'use strict';

  var FORM_SELECTOR = '[data-coffee-order="form"]'
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmit();
  console.log(formHandler)
}(window));

// this module recievies the window funciton but it also recieves the constructors that are defined on the window.App namespace
