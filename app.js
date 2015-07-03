/* Mongoose/Mongo sample */
"use strict;"


// Load required packages
var mongoose = require('mongoose'),
    Schema    = mongoose.Schema,
    ObjectId  = Schema.ObjectId;
	
	
//******************************************************************************
// CONNECT TO MONGODB on MONGOLAB
//
mongoose.connect('mongodb://admin:admin@ds061189.mongolab.com:61189/mongoose-sample');
	
// Define our test schema
var PersonSchema   = new mongoose.Schema({
  name: String,                 // name 
  age: Number					// age
});

var _Person = mongoose.model('Person', PersonSchema);
var person = new _Person();

function findPerson() {
	
	_Person.findOne({'name': 'John Doe' }, function(err, foundPerson) {
		if(err) {
			console.log('error finding person, ', err);
		} else{
			console.log(JSON.stringify(foundPerson));
			console.log('Persons age is: ', foundPerson.age);
		}	
	});
}

person.name = 'John Doe';
person.age  = 35;

// Save the person and check for errors
person.save(function(err) {
  if (err) {
	console.log('error saving person, ' + err);
  } else {
	console.log('person saved!');
	findPerson();
  }
});

