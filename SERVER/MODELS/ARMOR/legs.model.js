const mongoose = require('mongoose');
const { Schema } = mongoose;

let legsSchema = new Schema({
    armorName: { type: String, required: true },
    type: { type: String, required: true },
    physicsDefese: { type: Number, required: false },
    magicDefense: { type: Number, required: false },
    doge: { type: Number, required: false },
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

module.exports = mongoose.Schema('legs', legsSchema);