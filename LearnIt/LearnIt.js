
myCollection = new Mongo.Collection("collected");



if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({

    //theSecret = "Hello .JS is very easy when it comes to variables";

    //Create a multidimensional array that contains all the information from the database
    insideCollected: function()
    {
      return myCollection.find({});
    }   
  });

    


  // EVENT LISTENER ON BODY SECTION OF PAGE
    Template.body.events({
     "submit .new-task": function (event) {
       // This function is called when the new task form is submitted

       var w = event.target.text.value;

       myCollection.insert({
          names: w,
          createdAt: new Date() // current time
         });

       // Clear form
        event.target.text.value = "";

        // Prevent default form submit
       return false;
      }
   });
}



