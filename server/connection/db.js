const mongoose = require("mongoose")

mongoose.connect(process.env.connectionString).then(() => console.log("database connected")).catch((error) => console.log(error))

