const mongoose = require('mongoose');

const helmet = require('./helmet.model');
const armor = require('./armor.model');
const arms = require('./arms.model');
const weapon = require('./weapon.model');
const legs = require('./legs.model');
const accesory = require('./accesory.model');

const { Schema } = mongoose;

let armorSetSchema = new Schema({
    nameArmorSet: { type: String, required: true },
    numberPartOfSet: { type: Number, required: true },
    helmet: { type: Schema.ObjectId, ref: helmet, required: false },
    armor: { type: Schema.ObjectId, ref: armor, required: false },
    arms: { type: Schema.ObjectId, ref: arms, required: false },
    weapon: { type: Schema.ObjectId, ref: weapon, required: false },
    legs: { type: Schema.ObjectId, ref: legs, required: false },
    accesory: { type: Schema.ObjectId, ref: accesory, required: false },
    firstBonus: {
        stat: { type: String, require: false },
        quantityStat: { type: Number, required: false },
        secondStat: { type: String, require: false },
        quantitySecondStat: { type: Number, required: false },
        thirdStat: { type: String, require: false },
        quantityThirdStat: { type: Number, required: false }
    },
    secondBonus: {
        stat: { type: String, require: false },
        quantityStat: { type: Number, required: false },
        secondStat: { type: String, require: false },
        quantitySecondStat: { type: Number, required: false },
        thirdStat: { type: String, require: false },
        quantityThirdStat: { type: Number, required: false }
    },
    thirdBonus: {
        stat: { type: String, require: false },
        quantityStat: { type: Number, required: false },
        secondStat: { type: String, require: false },
        quantitySecondStat: { type: Number, required: false },
        thirdStat: { type: String, require: false },
        quantityThirdStat: { type: Number, required: false }
    },
    lore: { type: String, required: true }
});

module.exports = mongoose.Schema('armorSet', armorSetSchema);