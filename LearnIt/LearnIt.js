//Notes: Name of variable holding mongo collection
//notes: name of actual mongo collection
  Notes = new Mongo.Collection("notes");


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);


//Provides the passJS Template with the following variable  
 Template.passJS.helpers({
    secretGreeting: "yo"
 });


// You can store multiple helpers in one block secret and word are both helpers 
Template.serverStuff.helpers({
secret: "This is the shit!!",
word: "hello there again"
});

//Stores an array inside of the body for coding that uses it in this section
Template.body.helpers({


 // Server Functions
  notes: function () {
      return Notes.find({}); //run a search 
    },
//Arrays
names: [
    {name: "Joel"},
    {name: "Mike"}
],

ages: [
  {age: "10"},
  {age: "31"}
  ],

noInfo: []
});



  
} // END CLIENT

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
  });
}
