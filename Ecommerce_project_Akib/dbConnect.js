const mongoose = require('mongoose');
const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb+srv://bstore:Aslakib123@cluster0.8aylcov.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}
module.exports =dbConnect;