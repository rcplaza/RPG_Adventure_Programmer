const mongoose = require('mongoose');
const { Schema } = mongoose;

let BasicPotionSchema = new Schema({
    potionName: { type: String, required: true },
    type: { type: String, required: true },
    minQuantityEffect: { type: Number, required: true },
    maxQuantityEffect: { type: Number, required: true},
    level: { type: Number, required: true }
});

module.exports = mongoose.Schema('basicPotion', BasicPotionSchema);