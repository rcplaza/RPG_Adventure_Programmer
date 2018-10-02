const mongoose = require('mongoose');

const { Schema } = mongoose;

let itemSchema = new Schema({
    itemName: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required},
    accesory: { type: Schema.ObjectId, ref: accesory, required: false },
    lore: { type: String, required: true }
});

module.exports = mongoose.Schema('item', itemSchema);