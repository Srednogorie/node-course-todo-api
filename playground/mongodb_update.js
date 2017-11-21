const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb server.');
    }
    console.log('Connected to MongoDb server.');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a141bd6dce1a6936fb25b44')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a142ecd48e23d93de8e4438')
    }, {
        $set: {name: 'Pesho'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    // db.close();
});