const mongoose = require('mongoose');


const connectTomongodb = () => {
    try {
        console.log("done")
        mongoose.connect(process.env.mongo, {
            useNewUrlparser: true,
            useUnifiedTopology: true,

        }),
            console.log("connect To database")
    }
    catch (err) {
        console.log("error occure")
        console.log(error);
    }
}

module.exports = connectTomongodb;
