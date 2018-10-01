const mongoose = require('mongoose');
const { Schema } = mongoose;

let weaponSchema = new Schema({
    weaponName: { type: String, required: true },
    type: { type: String, required: true },
    rarity: { type: String, required: true },
    typeDamage: { type: String, required: true },
    damage: { type: Number, required: true },
    bonus: {
        stat: { type: String, require: false },
        quantityStat: { type: Number, required: false },
        secondStat: { type: String, require: false },
        quantitySecondStat: { type: Number, required: false },
        thirdStat: { type: String, require: false },
        quantityThirdStat: { type: Number, required: false }
    },
    requirements: {
        typeClass: { type: String, required: true },
        SecondTypeClass: { type: String, required: false },
        level: { type: Number, required: true }
    },
    lore: { type: String, required: true }
});

module.exports = mongoose.Schema('weapon', weaponSchema);