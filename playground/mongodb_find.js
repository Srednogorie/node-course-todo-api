//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// Above two lines are identical

// Next three lines are demonstrating the same thing but with slightly more complicated object
// var user = {name: 'Leno', age: 34};  // This is an nice ES6 feature to directly create variables from object key/value
// var {name} = user;                   // It's called distracturing
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

// TodoApp - this is going to create database if does not exist
// In Mongo we don't need to create db in advance. We just need to give it a name
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // The return statement is going to prevent the rest of the function running
        // Its somehow nicer than to write 'else' statement just to handle an error
        return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDb server.');

    // // Find method is where the query goes. For example - .find({completed: true})
    // db.collection('Todos').find({                             // .find() method => objects.all()
    //     _id: new ObjectID('5a141bd6dce1a6936fb25b44')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // });


    // db.collection('Todos').find().count().then((count) => {     // .count() method
    //     console.log(`Todos counts: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos.', err);
    // });



    db.close(); // This is going to close the connection after the work is done.
});