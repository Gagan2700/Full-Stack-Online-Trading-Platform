const mongoose = require("mongoose");

const holdingSchema  = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    net_chg: String,
    price: Number,
    day: String
})

const holdingModel = mongoose.model("Holding",holdingSchema);

module.exports = holdingModel;