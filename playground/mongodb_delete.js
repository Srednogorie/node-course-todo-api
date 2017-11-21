const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDb server.');

    // deleteMany - delete all that mach the query
    // db.collection('Todos').deleteMany({text: 'Where are all the todos'}).then((result) => {
    //     console.log(result);
    // });
    // deleteOne - delete the first(top to bottom) that match the query than STOPS.
    // db.collection('Todos').deleteOne({text: 'Mote todos are needed'}).then((result) => {
    //     console.log(result);
    // });
    // findOneAndDelete - delete the first that match the query than STOP and RETURN IT'S VALUES! Nice a?
    db.collection('Todos').findOneAndDelete({text: 'Mote todos are needed'}).then((result) => {
        console.log(result);
    })
    // db.close();
});