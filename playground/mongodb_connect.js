//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');   // This two lines are identical
                                                      // Next three lines are demonstrating the same thing
                                                      // but with slightly more complicated object
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

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //  });

    // db.collection('Users').insertOne({
    //     name: 'Leno',
    //     age: 36,
    //     location: 'Manchester'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close(); // This is going to close the connection after the work is done.
});