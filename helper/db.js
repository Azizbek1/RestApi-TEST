const mongoose = require('mongoose');

module.exports = () => {

    mongoose.connect('mongodb+srv://mooves:123asd123@cluster0.mm3oe.mongodb.net/test',
        { useNewUrlParser: true , useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false}

        );

    mongoose.connection.on('open', () => {
        //console.log("Mongo DB Bog'landi!!!")
    });
    mongoose.connection.on('error', (err) => {
        console.log("XATO: Mongo DB Bog'lanmadi!!!", err)
    });

    mongoose.Promise = global.Promise;

}
