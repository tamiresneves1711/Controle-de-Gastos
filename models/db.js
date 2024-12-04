const mongoose = require('mongoose');

// Conexão com o MongoDB
const connectDB = () =>{
    mongoose.connect('mongodb+srv://tamiresneves1711:QYHMTRPmpRL1IVpj@cluster0.kftbf.mongodb.net/');
    
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
    db.once('open', () => console.log('Conectado ao MongoDB.'));    
};

module.exports = connectDB;