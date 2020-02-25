
(function(window){
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector){
    if(!selector){
      throw new Error('No selector provided')
    }
    this.$formElement = $(selector); // this is just jQuery finding
    // preferencing something with $ says that the varible refers to an element selected using jQuery. you dont need it but its standard
    //
    if (this.$formElement.length === 0){
      // the length property of a jQuery wrapped selection tells how many elements were matched
      // this says that if there are 0 elements, throw an error
      throw new Error('Could not find element with selector: ' + selector);
    }

    FormHandler.prototype.addSubmit = function(fn){
      console.log('setting submit handler for form');
      this.$formElement.on('submit', function(event){
        event.preventDefault();

        var data = {};
        $(this).serializeArray().forEach(function (item){
          //serializeArray creates an array of objects. we call the forEach method on that array
          data[item.name] = item.value;
          //we are assigning the name property to be the key on the data array
          console.log(item.name + ' is ' + item.value)
        })
        //this is referencing the form element
        console.log(data)
        fn(data)
      })
    }
  }
  App.FormHandler = FormHandler;

  window.App = App;
})(window);
