const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017/mern-tasks";

mongoose.connect(URI)
                     .then(db => console.log('DB is Conected'))
                     .catch(err => consoleerror(err));

module.exports = mongoose;
