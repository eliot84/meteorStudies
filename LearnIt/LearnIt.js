
myCollection = new Mongo.Collection("collected");


// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({


//Create a multidimensional array that contains all the information from the database
    insideCollected: function()
    {
      return myCollection.find({});
    }



   
  });
}