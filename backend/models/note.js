import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Note = new Schema({
    note:{
        type : Number
    },
    commentaire:{
        type : String
    }
});

export default mongoose.model('Note',Note);

