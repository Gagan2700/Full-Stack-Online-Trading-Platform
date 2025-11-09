const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema({
        Product: String,
        name: String,
        qty: Number, 
        avg: Number, 
        price: Number, 
        day: String 
    }
)

const positionModel = mongoose.model("Position",positionSchema);

module.exports = positionModel;
