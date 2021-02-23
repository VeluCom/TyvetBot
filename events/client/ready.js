require('dotenv').config();
const mongoose = require("mongoose");

module.exports = (Discord, client) => {
    
    console.log("Let's begin our adventure!");

    mongoose.connect(process.env.DBlogin, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        userFindAndModify: false,
    }).then(() => {
        console.log('Connected to Database!');
    });

    client.user.setActivity('Type .help for more informations!');
}