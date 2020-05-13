//Definimos los Resolver que es lo que vamos a hacer
//cuando Consulten algo, se pueden anidar las Querys con root
//esto es similar como los Controllers de las Rutas del Server
//creamos un arreglo de tareas y lo importamos
import { tasks } from './sample'
//Tambien sera el encargado de utilizar el modelo de la BBDD
//para las operaciones con la BBDD
import User from './models/User'

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello World with GraphQl"
        },
        greet(root, { name }, ctx){
            console.log(ctx)
            //se puede hacer Querys Anidadas
            //console.log(args.name);
            //con destructuring puede pedir solo una propiedad especifica
            return `Hello ${name}!!!`;
        },
        tasks(){ 
            return tasks;
        },
        async Users(){
            return await User.find();        }
    },
    Mutation: {
        createTask(_,{ input }) {
            input._id = tasks.length;
            //para guardar el input
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }){
            const newUser = new User(input);
            //para guardar el input
            await newUser.save();
            return newUser;
        },
        async updateUser(_, { _id, input}){
            //aca Mongoose devuelve el Dato No Modificado
           return await User.findByIdAndUpdate(_id, input, { new: true });
        },
        async deleteUser(_,{ _id }){
            //Cuando Moongose elimina un dato lo retorna como info
            return await User.findByIdAndDelete(_id);
        }
    } 
};