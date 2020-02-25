(function(window){
  'use strict';
  var App = window.App || {}; // creating empty object(if it doesnt already exist)

  function Truck(truckId,db){  // Constructor function for our module
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.createOrder = function (order){
  // adding this on the prototype, so every truck instance has this avilable to them
    console.log('adding order for' + order.emailAddress);
    this.db.add(order.emailAddress,order);
  }

  Truck.prototype.deliverOrder = function (customerId){
    console.log('order up for ' + customerId);
    this.db.remove(customerId);
  }

  Truck.prototype.printOrders = function (){
    var customerIdArray = Object.keys(this.db.getAll());
    // calling the .getAll() method on our db property and then retrieving and array of  just the keys with Objects.keys.
    // it will be all the email addresses

    console.log('Truck #' + this.truckId + ' has pending orders');
    //just loggs the truck number and says it has orders pending
    customerIdArray.forEach(function(id){
      // for each element in the array it is logging the values associated with the id
      console.log(this.db.get(id));
      // this should print out what orders there are, the orders and emails
    }.bind(this));
  };

  App.Truck = Truck; // adding function to App object
  window.App =App; // adding our app to the outer scope
}(window))


//this code follows the module pattern. It uses an iife. the purpose of this code with the iife is to bundle code together and run it
// when the page loads. THis also keeps out function and varible names out of the global name space. passing the window varible to the iife
// gives out function an interface to the outer scope
// there are three steps to using iife to register modules in a namespace.

//1) get a reference to that name space. we do that with the var App = window.App || {};. THis just says makes the App varible equal to
// window.App, if that doesnt exist then make app equal to an empty object literal

//2) then we create the module code. This is done through the truck function

//3) we attach the module to the code namespace. we do this by attaching the truck funciton to the app object and then attach the app object
// to the window object, making it accesible to the outer scope



// the forEach method: simply looping through each element and executing a callback for each element
