const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6o6qtsb.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao banco de dados');
})
.catch(e => {
    console.log('Erro ao conectar ao banco de dados', e);
    process.exit();
})

module.exports = mongoose;