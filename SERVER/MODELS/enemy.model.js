const mongoose = require('mongoose');
const { Schema } = mongoose;

let enemySchema = new Schema({
    enemyName: { type: String, required: true },
    rarity: { type: String, required: true },
    type: { type: String, required: true },
    health: { type: Number, required: true },
    physicsDefese: { type: Number, required: true },
    magicDefense: { type: Number, required: true },
    doge: { type: Number, required: true },
    physicsAttack: { type: Number, required: true },
    magicAttack: { type: Number, required: true },
    criticalRate: { type: Number, required: true },
    features: {
        size: { type: String, required: true },
        race: { type: String, required: true }
    },
    drop: {
        item_1: {
            item: { required: false },
            dropRate: { required: true }
        },
        item_2: {
            item: { required: false },
            dropRate: { required: true }
        },
        item_3: {
            item: { required: false },
            dropRate: { required: true }
        },
        item_4: {
            item: { required: false },
            dropRate: { required: true }
        },
        item_5: {
            item: { required: false },
            dropRate: { required: true }
        },
        item_6: {
            item: { required: false },
            dropRate: { required: true }
        },

    },
    lore: { type: String, required: false }
});

module.exports = mongoose.Schema('enemy', enemySchema);