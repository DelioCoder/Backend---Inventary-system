const mongoose = require('mongoose');
//const { mongo } = require('mongoose');

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb+srv://fazt:fazt@cluster0.wr5n9.mongodb.net/inventaryDB?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

//Una vez que se conecte a nuestra BD, que nos mande un mensaje en consola

connection.once('open', () =>{
    console.log('DB is connected');
});