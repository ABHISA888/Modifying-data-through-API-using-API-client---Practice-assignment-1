const mongoose = require('mongoose');

const newMenuSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String
    },
    Price: {
        type: Number,
        required: true
    }
});

const MenuItem= mongoose.model('MenuItem', newMenuSchema);
module.exports = MenuItem;
