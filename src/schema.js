//importamos Herramienta para integrar los TypeDefs y Resolvers en un 
//nuevo Schema que pueden cambiar Dinamicamente
import { makeExecutableSchema } from "graphql-tools" 
//importamos el objeto Resolvers que estan dentro de otro objeto
import {  resolvers } from "./resolvers"; 
//Definimos los typeDefs (tipos de Datos) a Consultar
//Las Query pueden ser propiedades
//Tipos de Datos: String, Int, Float, Boolean and Id
//con el "!" le decimos que si o si necesitamos esa propiedad
//estas serian equivalentes a las Rutas del Server
//Creamos un arreglo de tareas y definimos su tipo
//como sabe que tipo de dato puede ser Id (Int o String) su tipo de dato sera ID
//se puede enviar cosas y cambiarlas dentro del Server
//usando TypeMutation podes consultar y enviarle datos para cambiar en el Server
//En este caso creamos el tipo TaskInput para recibir los datos y el _Id agrega automaticamente
const typeDefs = `

    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Tasks]
        Users: [User]

    }
    type Tasks{
        _id: ID
        title: String!
        description: String!
        number: Int
    }
    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int

    }
    type Mutation{
        createTask(input: TaskInput): Tasks
        createUser(input: UserInput): User
        deleteUser(_id:ID): User
        updateUser(_id: ID, input: UserInput): User
    }
    input TaskInput {
        title: String!
        description: String!
        number: Int
    }
    input UserInput {
        firstname: String!
        lastname: String!
        age: Int
    }


`;
//Creamos el Nuevo Schema para vincular los TypeDefs y los resolvers
//y lo exportamos
export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})