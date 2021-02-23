const mongoose = require('mongoose');

const BPSchema = new mongoose.Schema({
    userID: String,
    serverID: Array,
    primogem: Number,
    ifate: Number,
    afate: Number,
    gcrystal: Number,
    mora: Number,
    stardust: Number,
    region: String,
    UID: String,
    bio: String,
    Pcharacter: Array,
    Gcharacter: Array,
    Bweapon: Array,
    Pweapon: Array,
    Gweapon: Array,
});

module.exports = mongoose.model("backpacks", BPSchema);