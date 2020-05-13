import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
});

export default model('User', UserSchema);