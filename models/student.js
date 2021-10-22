let mongoose = require('mongoose');


// Student Schema
const Student = mongoose.model('Student', {
    name: {
        type: String,
        required:true
    }, 
    age: {
        type:String,
        required:true
    },
});



module.exports = {Student}