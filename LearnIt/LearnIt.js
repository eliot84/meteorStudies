// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({

    //Arrays to be Used in html for processing
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ],

    names: [
      { names: "Jack"},
      { names: "jones"},
      { names: "Robert"},
      { names: "Sandra"},
      { names: "Mike"},
      { names: "Jane"},
      { names: "Alice"},
      { names: "Barbara"}
    ]
  });
}