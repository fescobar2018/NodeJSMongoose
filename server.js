

const mongoose = require('mongoose');

const MONGODB_CONNECT = 'mongodb+srv://fescobar:12345@cluster0.feqzg.mongodb.net/NodeTest';



mongoose.connect(MONGODB_CONNECT, {
    useNewUrlParser : true , 
  useUnifiedTopology : true , 
  useFindAndModify : false , 
  useCreateIndex : true

})
    .then( () => console.log('Conectado Mongoose'))
    .catch(err=> console.log(err) );
const personaSchema = mongoose.Schema({
    Nombre_actividad:String,
    Ministerio:String,
    Usuario_Registro: String,
    Fecha_actividad: Date
    
})    
    //schema a crear 
    const PersonaModel = mongoose.model('usuarios', personaSchema)
    //mostrar los datos
    const mostrar = async ()=>{const persona = await PersonaModel.find()
        console.log(persona)}
    //mostrar los resultados
    mostrar()

    //crear - est funcion lo que hace es crear un registro 
    const crear = async ()=> {
        const persona = new PersonaModel({
            nombre: 'fredy3',
            id_min: '03'
        })

        const resultado = await persona.save()
        console.log(resultado)
    }


    //crear()

