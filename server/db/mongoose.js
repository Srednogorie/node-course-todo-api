var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppTwo');

// module.exports = {mongoose};      // ES6 syntax
module.exports = {
    mongoose: mongoose
};