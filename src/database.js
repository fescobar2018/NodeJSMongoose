const mongoose = require('mongoose');

const MONGODB_CONNECT = 'mongodb+srv://fescobar:12345@cluster0.feqzg.mongodb.net/NodeTest';



mongoose.connect(MONGODB_CONNECT, {
    useNewUrlParser : true , 
  useUnifiedTopology : true , 
  useFindAndModify : false , 
  useCreateIndex : true

})

.then( () => console.log('Conectado MongooDB'))
.catch(err=> console.log(err) ); 

const personaSchema = mongoose.Schema({
    email: String,
    password: String
})

