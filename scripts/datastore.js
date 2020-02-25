(function(window){
// the iife creates a new scope, which creates the 'privacy' that we need. javascript doesnt have privacy like other languages
// but creating the new scope can emulate it. we return only the parts we need
// we name space our code by assigning DataStore to window

  'use strict';
  var App = window.App || {};

  function DataStore(){
    // this is a 'private' method
    this.data = {};
  }

  DataStore.prototype.add = function (key,val){// this will be shared by every instance
    this.data[key] = val;
  }

  DataStore.prototype.get = function (key){
    return this.data[key];
  };

  DataStore.prototype.getAll = function (){
    return this.data;
  };

  DataStore.prototype.remove = function (){
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;

})(window);


//so when you have some sort of storage, in our case its this.data, you never want to access it directly when assigning it a value.
// That is bad software design. you need to provide an interface to interact with the data. to accomplish this we added a function
//to the prototype property. this way, each instance of DataStore has the proper interface for interating with this.data
