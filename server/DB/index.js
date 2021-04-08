const mongoose = require('mongoose')

const dbConnection = process.env.DB;

mongoose
    .connect(dbConnection) //creating the connection to cinema db | local - ('mongodb://127.0.0.1:27017/cinema')
    .catch(error => {                            //error handling
        console.error('Connection error', error.message)
    })

const db = mongoose.connection

module.exports = db // exporting the connection