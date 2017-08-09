
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['login', 'logout', 'signup', 'login failed', 'login blocked', 'signup blocked', 'account locked']
    },
    level: {
        type: String,
        required: true,
        enum: ['low', 'medium', 'high', 'severe']
    },
    client_loc: {
        long: String,
        lat: String,
        city: String,
        State: String,
        Country: String
    },
    risk_score: Number,
    details: Object
},
{ 
    timestamps: true    
});

module.exports = mongoose.model('Event', schema);