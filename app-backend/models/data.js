// app/models/data.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our data model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Data', {
    name : {
    	type : String, 
    	default : ''
    }
});