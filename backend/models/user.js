import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    prenom:{
        type : String
    },
    nom:{
        type : String
    },
    email:{
        type: String
    },
    mdp :{
        type : String
    },
    role : {
        type : String
    },
    competences :{
        type : Array
    },
    projets : {
        type : Array
    }
});

export default mongoose.model('User',User);

