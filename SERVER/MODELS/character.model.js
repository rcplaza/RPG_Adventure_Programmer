const mongoose = require('mongoose');

const helmet = require('./helmet.model');
const armor = require('./armor.model');
const weapon = require('./weapon.model');

const { Schema } = mongoose;

let CharacterSchema = new Schema({
    characterName: { type: String, required: true},
    health: { type: Number, required: true},
    physicsDefese: { type: Number, required: true},
    magicDefense: { type: Number, required: true},
    doge: { type: Number, required: true},
    physicsAttack: { type: Number, required: true},
    magicAttack: { type: Number, required: true},
    criticalRate: { type: Number, required: true},
    mana: { type: Number, required: true},
    equip: {
        head: { type: Schema.ObjectId, ref: helmet, required: false },
        body: { type: Schema.ObjectId, ref: armor, required: false },
        arms: { required: false },
        weapon: { type: Schema.ObjectId, ref: weapon, required: false },
        legs: { required: false },
        accesory: { required: false }
    },
    move: { type: Number, required: true}
});

module.exports = mongoose.Schema('character', CharacterSchema);