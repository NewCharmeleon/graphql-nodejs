//llamamos las variables de Entorno con el modulo dotenv
require('dotenv').config();
//Creamos el Server Express
//const express = require('express');
//con EcmaScript2019
import express from "express";
//Necesitamos importar el modulo de GraphQl
//y el Middleware de express para que la ruta 
// sea procesada utilizando una herramienta de GraphQl
import graphqlHTTP from "express-graphql";
//importamos el Nuevo Schema con los TypeDefs y resolvers
import schema from './schema';
//importamos mongoose para la BBDD
import { connect } from './database';


//Instanciamos el Server
const app = express();
connect();

//cuando se ingrese a cierta ruta devuelva una Herramienta que la procese
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!!!!'
    })
});
//Debo crear un Schema para obtener un objeto que diga
//todo lo que puedo consultar desde las aplicaciones Clientes Movil o Web
//const schema = {}

app.use('/graphql', graphqlHTTP({
    //interfaz para testear
    graphiql: true,
    //Schema que le dice al Cliente en un solo EndPoint que puede consultar
    //o no, este Schema es la AutoDocumentacion de GraphQl
    schema: schema,
    //podemos pasar ciertos datos a todos los Resolvers
    //se puede usar para Autenticar Usuarios o Cadenas de Conexión
    context: {
        messageId: 'test'
    }
}));
//Iniciamos el Server
app.listen(process.env.PORT, () => console.log('Server on port ',process.env.PORT))