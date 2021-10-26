const mongoose = require('mongoose');
const URI = process.env.MONGO_ATLAS_CONNECTION || 'mongodb://localhost:27017/my_app_node';

mongoose.connect(URI, 
    {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("MongoDB Conectado");
}) 