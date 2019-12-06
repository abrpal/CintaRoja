
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum:['Female', 'Male', 'Undefined']
    },
    relationshipStatus:{
        type:String,
        enum: ['Single', 'In a relationship', 'Its complicated', 'Married']
    },
    publicacion:{
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'publicacion'
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;