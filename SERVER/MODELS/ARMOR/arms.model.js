const mongoose = require('mongoose');
const { Schema } = mongoose;

let armsSchema = new Schema({
    armorName: { type: String, required: true },
    type: { type: String, required: true },
    physicsDefese: { type: Number, required: false },
    magicDefense: { type: Number, required: false },
    doge: { type: Number, required: false },
    stat: { type: String, required: false },
    quantityStat: { type: Number, required: false }
});

module.exports = mongoose.Schema('arms', armsSchema);