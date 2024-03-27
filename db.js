
const mongoose = require("mongoose")
async function connectToMongoodb (url){
    return mongoose.connect(url)

}
module.exports = {
    connectToMongoodb 
}