const mongoose = require('mongoose');
const { Schema } = mongoose;

let warriorSchema = new Schema({
    warriorName: { type: String, required: true},
    health: { type: Number, required: true},
    physicsDefese: { type: Number, required: true},
    magicDefense: { type: Number, required: true},
    doge: { type: Number, required: true},
    physicsAttack: { type: Number, required: true},
    magicAttack: { type: Number, required: true},
    criticalRate: { type: Number, required: true},
    mana: { type: Number, required: true},
    move: { type: Number, required: true},
});

module.exports = mongoose.Schema('warrior', warriorSchema);