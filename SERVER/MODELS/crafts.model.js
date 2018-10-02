const mongoose = require('mongoose');

const item = require('./item.model');
const helmet = require('./helmet.model');
const armor = require('./armor.model');
const arms = require('./arms.model');
const weapon = require('./weapon.model');
const legs = require('./legs.model');
const accesory = require('./accesory.model');

const { Schema } = mongoose;

let craftsSchema = new Schema({
    helmet: { type: Schema.ObjectId, ref: helmet, required: false },
    armor: { type: Schema.ObjectId, ref: armor, required: false },
    arms: { type: Schema.ObjectId, ref: arms, required: false },
    weapon: { type: Schema.ObjectId, ref: weapon, required: false },
    legs: { type: Schema.ObjectId, ref: legs, required: false },
    accesory: { type: Schema.ObjectId, ref: accesory, required: false },
    item_1: {
        item: { type: Schema.ObjectId, ref: item, required: true },
        quantity: { type: Number, required: true }
    },
    item_2: { 
        item: { type: Schema.ObjectId, ref: item, required: true },
        quantity: { type: Number, required: true }
    },
    item_3: { 
        item: { type: Schema.ObjectId, ref: item, required: true },
        quantity: { type: Number, required: true }
    }
});

module.exports = mongoose.Schema('crafts', craftsSchema);
