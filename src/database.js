require('dotenv').config();
import mongoose from 'mongoose'
//separando las cadenas de conexión
//const GRAPHQL-NODEJS_MONGODB_HOST = process.env.NOTES_APP_CRUD_MONGODB_HOST;
//const GRAPHQL-NODEJS_MONGODB_DATABASE = process.env.NOTES_APP_CRUD_MONGODB_DATABASE;
//usando ES6
const { GRAPHQL_NODEJS_MONGODB_HOST, GRAPHQL_NODEJS_MONGODB_DATABASE } = process.env;
//concatenamos las variables de conexión
//validamos la variable de conexion con operador ternario
const MONGODB_URI = 'mongodb://'+GRAPHQL_NODEJS_MONGODB_HOST+'/'+GRAPHQL_NODEJS_MONGODB_DATABASE;

export async function connect(){
    try {
        //await mongoose.connect('mongodb://localhost/mongodbgraphql-nodejs', {
        await mongoose.connect(MONGODB_URI, {
                //atributos de la libreria  
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
    })
    console.log('>>>> DB is connected');
    }
    catch(e){
        console.log('Something goes wrong!');
        console.log(e)
       
    }
}

